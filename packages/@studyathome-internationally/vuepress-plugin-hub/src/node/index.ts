import { HubPluginOptions } from "./interface/Options";
import { handleOptions, handleEnrollmentPages, isIndexed } from "./handleOptions";

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

  const { pageEnhancers, indexPages } = handleOptions(options, ctx);

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
             * Respect the original frontmatter in markdown.
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
      const { pages } = ctx;
      const enrollmentPages = handleEnrollmentPages(options, ctx);

      /**
       * 2.1 Add paths of indexed pages to index pages.
       */
      for (let { permalink, frontmatter } of indexPages) {
        frontmatter.indexed = pages
          .filter(({ regularPath }) => isIndexed(regularPath, permalink, frontmatter.subdirlevel))
          .map(({ regularPath }) => regularPath)
          .sort();
      }

      /**
       * 2.2 Combine all pages.
       *
       *   - Index page for courses.
       *   - Enrollment pages.
       */
      const allExtraPages = [...indexPages, ...enrollmentPages];

      await Promise.all(allExtraPages.map(async page => ctx.addPage(page)));
    }
  };
};
