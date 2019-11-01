export const universityPath = "/studyathome/partner/";
export const lecturerPath = "/lecturer/";
export function getPage(pageCtx, path) {
  return pageCtx.$site.pages.find(({ regularPath }) => regularPath === path);
}
export function getPageByTitle(pageCtx, title) {
  return pageCtx.$site.pages.find(page => {
    return page.frontmatter.title === title;
  });
}
export function getCourseUniversityPage(
  pageCtx,
  coursePage,
  page = "",
  path = universityPath
) {
  const university = coursePage.frontmatter.university.name || "";
  return getPage(pageCtx, `${path + university}/${page}`);
}
export function getLecturerPages(pageCtx, coursePage, path = lecturerPath) {
  let pages = [];
  const { lecturers } = coursePage.frontmatter || [];
  for (const lecturer of lecturers) {
    if (typeof lecturer.page !== "undefined") {
      const page = getPage(pageCtx, `${path + lecturer.page}`);
      if (typeof page !== "undefined") pages.push(page);
    }
  }
  return pages;
}
export function getPages(pageCtx, paths) {
  return pageCtx.$site.pages.filter(({ regularPath }) => paths.includes(regularPath));
}
export function getCourses(pageCtx, path = "/courses/") {
  const indexPage = getPage(pageCtx, path);
  const index = indexPage.frontmatter.indexed;
  return getPages(pageCtx, index)
    .map(page => page.frontmatter)
    .filter(({ state }) => state)
    .map(frontmatter => frontmatter.title)
    .sort();
}
