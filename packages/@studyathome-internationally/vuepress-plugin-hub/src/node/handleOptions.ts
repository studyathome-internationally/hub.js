import { join } from "path";
import { existsSync } from "fs";
import { PageEnhancer } from "./interface/PageEnhancer";
import { logger, chalk } from "@vuepress/shared-utils";
import { HubPluginOptions } from "./interface/Options";

/**
 * Handle options from users.
 * @param options
 * @param ctx
 * @return {*}
 */
export function handleOptions(options: HubPluginOptions, ctx: any) {
  let { directories = [] } = options;

  /**
   * Validate the existence of directory specified by directory classifier.
   */
  directories = directories.filter(directory => {
    const targetDir = join(ctx.sourceDir, directory.dirname);
    if (existsSync(targetDir)) {
      return true;
    }

    logger.warn(
      `[@studyathome-internationally/plugin-hub]` +
        `  Invalid directory classifier: ${chalk.cyan(directory.id)}, ` +
        `  ${chalk.gray(targetDir)} doesn't exist!}`
    );
    return false;
  });

  const pageEnhancers: PageEnhancer[] = [];

  return {
    pageEnhancers
  };
}
