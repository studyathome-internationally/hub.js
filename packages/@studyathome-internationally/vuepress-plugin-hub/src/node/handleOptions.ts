import { join } from "path";
import { existsSync } from "fs";
import { logger, chalk } from "@vuepress/shared-utils";
import { HubPluginOptions } from "./interface/Options";
import { ExtraPage } from "./interface/ExtraPages";
import { PageEnhancer } from "./interface/PageEnhancer";

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
  const pageEnhancers: PageEnhancer[] = [];

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
      itemLayout = "Course",
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
      title: capitalize(id),
      permalink: indexPath,
      frontmatter: {
        layout: ctx.getLayout(indexLayout),
        title: capitalize(id),
        itemPath: dirname,
        ...frontmatter
      },
      meta: {
        cid: id,
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

    /**
     * 1.4 Set layout for pages that match current directory classifier.
     */
    pageEnhancers.push({
      when: ({ regularPath }) => filterIndexedPages(regularPath, indexPath, dirname),
      frontmatter: {
        layout: ctx.getLayout(itemLayout, "Course")
      },
      data: {
        id,
        cid: id
      }
    });
  }

  return {
    pageEnhancers,
    extraPages
  };
}

/**
 * Capitalize first letter of every word.
 * @param text
 * @return {*}
 */
function capitalize(text: string) {
  return text.replace(/(?:^|\s)\S/g, l => l.toUpperCase());
}

/**
 * Filter pages in `dirname`, i.e. only top-level files or index files in sub directories.
 * @param regularPath
 * @param indexPath
 * @param dirname
 * @return {*}
 */
export function filterIndexedPages(regularPath: string, indexPath: string, dirname: string) {
  return (
    Boolean(regularPath) &&
    regularPath !== indexPath &&
    regularPath.startsWith(`/${dirname}/`) &&
    (regularPath.endsWith("index.html") || regularPath.endsWith("/"))
    // || isFirstLevelEntry(regularPath, indexPath)
  );
}

// /**
//  * Tests if entry is first level entry of given index page.
//  * @param itemPath
//  * @param indexPath
//  * return {*}
//  */
// function isFirstLevelEntry(itemPath: string, indexPath: string) {
//   const p = relative(indexPath, itemPath);
//   return p.split("/").length == 1;
// }

/**
 * Create default enrollment pages where missing.
 * @param options
 * @param ctx
 * @return {*}
 */
export function handleEnrollmentPages(options: HubPluginOptions, ctx: any) {
  let enrollmentPages: any[] = [];
  const { directories } = options;
  const { pages } = ctx;
  for (const directory of directories) {
    const { path: indexPath = `/${directory.id}/`, enroll } = directory;
    if (enroll) {
      const indexPages = pages.filter(({ regularPath }) => regularPath.startsWith(indexPath));
      enrollmentPages.push(...generateMissingEnrollment(enroll, ctx, indexPages));
    }
  }
  return enrollmentPages;
}

function generateMissingEnrollment(
  enroll: { template: string; path: string },
  ctx: any,
  indexPages: any
) {
  const { pages } = ctx;
  const { template: enrollmentTemplatePath, path: enrollmentSubpath } = enroll;
  const coursePages = indexPages.filter(
    ({ regularPath }) => !regularPath.endsWith(enrollmentSubpath + ".html")
  );
  let enrollmentPages: any[] = [];

  for (const coursePage of coursePages) {
    const enrollmentPagePath = coursePage.regularPath + enrollmentSubpath + ".html";
    const hasEnrollmentPage =
      indexPages.filter(({ regularPath }) => regularPath === enrollmentPagePath).length > 0;

    if (!hasEnrollmentPage) {
      const defaultEnrollmentPage = pages.find(
        ({ relativePath }) => relativePath === enrollmentTemplatePath + ".md"
      );
      // const enrollmentPage = Object.assign({}, defaultEnrollmentPage);
      // Object.assign(enrollmentPage, {
      const enrollmentPage = {
        title: defaultEnrollmentPage.title,
        path: enrollmentPagePath,
        content: defaultEnrollmentPage._content
        // });
      };
      enrollmentPages.push(enrollmentPage);
    }
  }
  return enrollmentPages;
}
