import { join } from "path";
import { existsSync } from "fs";

import chalk from "chalk";
import logger from "../util/logger";

import { HubPluginOptions, DirectoryClassifier } from "./interface/Options";
import { IndexPage } from "./interface/ExtraPages";
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

  const indexPages: IndexPage[] = [];
  const pageEnhancers: PageEnhancer[] = [];

  /**
   * 1. Directory-based classification
   */
  for (const directory of directories) {
    const {
      id,
      dirname,
      path: indexPath = `/${directory.id}/`,
      layout: indexLayout = "IndexPage",
      frontmatter,
      itemLayout = "Page",
      level = 1
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
    indexPages.push({
      permalink: indexPath,
      frontmatter: {
        layout: ctx.getLayout(indexLayout),
        title: capitalize(id),
        subdirlevel: level,
        itemPath: dirname,
        ...frontmatter
      },
      meta: {
        id
      }
    });

    /**
     * 1.3 Set layout for pages that match current directory classifier.
     */
    pageEnhancers.push({
      when: ({ regularPath }) => isIndexed(regularPath, indexPath, level),
      frontmatter: {
        layout: itemLayout || "Page"
      },
      data: {
        id
      }
    });
  }

  return {
    pageEnhancers,
    indexPages
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
 * @param level
 * @return {*}
 */
export function isIndexed(indexedPath: string, indexPath: string, level: number) {
  return (
    Boolean(indexedPath) &&
    indexedPath !== indexPath &&
    indexedPath.startsWith(indexPath) &&
    (indexedPath.endsWith("index.html") ||
      indexedPath.endsWith("/") ||
      isWithinSubDir(indexPath, indexedPath, level))
  );
}

/**
 * Subtract `sub` from `text`.
 * @param text
 * @param sub
 * @return {*}
 */
function diff(text, sub) {
  return text.split(sub).join("");
}

/**
 * Test weather subtraction makes sense.
 * @param text
 * @param sub
 * @return {*}
 */
function diffValidate(text, sub) {
  return text !== diff(text, sub);
}

/**
 * Test if path is within the next`level` sub directories.
 * @param index
 * @param path
 * @param level
 * @return {*}
 */
function isWithinSubDir(index, path, level = 1) {
  if (level > 0 && diffValidate(path, index)) {
    const dirLevel = diff(path, index).split("/").length;
    return dirLevel > 0 && dirLevel <= level + 1;
  }
  return false;
}

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
      setDefaultEnrollmentLayout(indexPages, directory);
      enrollmentPages.push(...generateMissingEnrollment(enroll, ctx, indexPages));
    }
  }
  return enrollmentPages;
}

function setDefaultEnrollmentLayout(pages: any, directory: DirectoryClassifier) {
  const { enroll } = directory;
  const enrollmentPages = pages.filter(({ regularPath }) =>
    regularPath.endsWith(enroll ? enroll.path + ".html" : "enroll.html")
  );
  for (const page of enrollmentPages) {
    if (!page.frontmatter.layout) {
      page.frontmatter.layout = enroll ? enroll.enrollLayout : "Layout";
    }
  }
}

function generateMissingEnrollment(
  enroll: { template: string; path: string; enrollLayout: string },
  ctx: any,
  indexPages: any
) {
  const { pages } = ctx;
  const { template: enrollmentTemplatePath, path: enrollmentSubpath, enrollLayout } = enroll;
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
        frontmatter: {
          layout: enrollLayout || "Layout"
        },
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
