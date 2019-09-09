import { HubPluginOptions } from "./interface/Options";
import { handleOptions, handleEnrollmentPages } from "./handleOptions";

function injectExtraAPI(ctx: any) {
  const { layoutComponentMap } = ctx.themeAPI;

  /**
   * A function used to check whether layout exists
   */
  const isLayoutExists = name => layoutComponentMap[name] !== undefined;

  /**
   * Get layout
   */
  ctx.getLayout = (name?: string, fallback?: string) => {
    return isLayoutExists(name) ? name : fallback || "Layout";
  };
}

module.exports = (options: HubPluginOptions, ctx: any) => {
  injectExtraAPI(ctx);

  const { pageEnhancers, extraPages } = handleOptions(options, ctx);

  return {
    name: "vuepress-plugin-hub",

    /**
     * 1. Execute `pageEnhancers` generated in handleOptions
     */
    extendPageData(pageCtx: any) {
      const { frontmatter: rawFrontMatter } = pageCtx;

      pageEnhancers.forEach(({ when, data = {}, frontmatter = {} }) => {
        if (when(pageCtx)) {
          Object.keys(frontmatter).forEach(key => {
            /**
             * Respect the original frontmatter in markdown
             */
            if (!rawFrontMatter[key]) {
              rawFrontMatter[key] = frontmatter[key];
            }
          });
          Object.assign(pageCtx, data);
        }
      });
    },
    /**
     * 2. Create pages according to user's config.
     */
    async ready() {
      const enrollmentPages = handleEnrollmentPages(options, ctx);

      /**
       * 2.2 Combine all pages.
       *
       *   - Index page for courses.
       *   - Enrollment pages.
       */
      const allExtraPages = [...extraPages, ...enrollmentPages];

      await Promise.all(allExtraPages.map(async page => ctx.addPage(page)));
    }
  };
};

// function logKeys(obj, label) {
//   // console.log(label, Object.keys(obj));
//   console.log(label, Object.getOwnPropertyNames(obj));
// }

// function logPages(pages) {
//   for (const [idx, page] of pages.entries()) {
//     console.log(`Page ${idx}: ${page["title"]}`);
//   }
// }

// function logPageContext(ctx) {
//   console.log(`Page Context:`);
//   for (const key of Object.keys(ctx)) {
//     if (key === "frontmatter") {
//       console.log(`  frontmatter:`);
//       for (const frontmatterKey of Object.keys(ctx[key])) {
//         console.log(`    [${frontmatterKey}]: ${ctx[key][frontmatterKey]}`);
//       }
//     } else if (key === "_computed") {
//       console.log(`  [_computed]: ~`);
//     } else if (key === "_content") {
//       console.log(`  [_content]: ~`);
//     } else if (key === "_strippedContent") {
//       console.log(`  [_strippedContent]: ~`);
//     } else {
//       console.log(`  [${key}]: ${ctx[key]}`);
//     }
//   }
// }
