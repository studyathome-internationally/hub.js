import { join } from "path";
import { existsSync } from "fs";
import { logger, chalk } from "@vuepress/shared-utils";
import { HubPluginOptions } from "./interface/Options";
import { ExtraPage } from "./interface/ExtraPages";

function capitalize(w) {
  if (typeof w !== "string") return "";
  return w.charAt(0).toUpperCase() + w.slice(1);
}

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

  const extraPages: ExtraPage[] = [];

  /**
   * 1. Directory-based classification
   */
  for (const directory of directories) {
    const {
      id,
      dirname,
      path: indexPath = `/${directory.id}/`,
      layout: indexLayout = "IndexCourse",
      frontmatter,
      // itemLayout = "Course",
      nav
    } = directory;

    /**
     * 1.1 Required index path.
     */
    if (!indexPath) {
      continue;
    }

    /**
     * 1.2 Inject index page.
     */
    extraPages.push({
      permalink: indexPath,
      frontmatter: {
        layout: ctx.getLayout(indexLayout),
        title: capitalize(id),
        itemPath: dirname,
        ...frontmatter
      },
      meta: {
        pid: id,
        id
      }
    });

    /**
     * 1.3 Inject entry in navigation.
     */
    if (nav) {
      const { nav: navBar } = ctx.themeConfig;
      if (nav.order > 0 && nav.order < navBar.length) {
        navBar.splice(nav.order - 1, 0, {
          text: nav.title,
          link: indexPath
        });
      }
    }
  }

  return {
    extraPages
  };
}
