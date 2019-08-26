import { handleOptions } from "./handleOptions";
import { HubPluginOptions } from "./interface/Options";

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

  const { extraPages } = handleOptions(options, ctx);

  return {
    name: "vuepress-plugin-hub",

    /**
     * 1. Execute `pageEnhancers` generated in handleOptions
     */
    extendPageData() {
      // logPageContext(pageCtx);
    },
    async ready() {
      // const { pages } = ctx;
      // console.log("Pages: "); //, pages);
      // logKeys(pages[0], "Page Keys: ");
      // logKeys(ctx, "Context Keys: ");
      // logPages(pages);
      // console.log("ready()");
      // await ctx.addPage({ title: "My New Page", path: "/new_page/" });
      // await ctx.addPage({ title: "My 2nd New Page", path: "/new_page_2/" });
      // logPages(pages);
      // await Promise.all(extraPages.map(async page => ctx.addPage(page)));
    },
    additionalPages: extraPages
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
