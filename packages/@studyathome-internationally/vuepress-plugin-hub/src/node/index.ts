import { handleOptions } from "./handleOptions";
import { HubPluginOptions } from "./interface/Options";
import { VuePressPage } from "./interface/VuePress";

module.exports = (options: HubPluginOptions, ctx: any) => {
  const { pageEnhancers } = handleOptions(options, ctx);

  return {
    name: "vuepress-plugin-hub",

    /**
     * 1. Execute `pageEnhancers` generated in handleOptions
     */
    extendPageData(pageCtx: VuePressPage) {
      const { frontmatter: rawFrontmatter } = pageCtx;

      pageEnhancers.forEach(({ when, data = {}, frontmatter = {} }) => {
        if (when(pageCtx)) {
          Object.keys(frontmatter).forEach(key => {
            /**
             * Respect the original frontmatter in markdown
             */
            if (!rawFrontmatter[key]) {
              rawFrontmatter[key] = frontmatter[key];
            }
          });
          Object.assign(pageCtx, data);
        }
      });
    }
  };
};
