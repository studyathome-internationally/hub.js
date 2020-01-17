export const coursePath = "/courses/";
export const universityPath = "/studyathome/partner/";
export const lecturerPath = "/lecturer/";
export const enrollmentPath = "/general/enroll.html";

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
  const { university } = coursePage.frontmatter;
  const name = university && university.name ? university.name : "";
  return getPage(pageCtx, `${path + name}/${page}`);
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
export function getEnrollmentPages(pageCtx, course) {
  const general = getPage(pageCtx, enrollmentPath);
  const university = getCourseUniversityPage(pageCtx, course, "enroll.html");
  return { general, university };
}
export function getPages(pageCtx, paths) {
  return pageCtx.$site.pages.filter(({ regularPath }) =>
    paths.includes(regularPath)
  );
}
export function getCourses(pageCtx, path = coursePath) {
  const indexPage = getPage(pageCtx, path);
  const index = indexPage.frontmatter.indexed;
  return getPages(pageCtx, index)
    .map(page => page.frontmatter)
    .filter(({ state }) => state)
    .map(frontmatter => frontmatter.title)
    .sort();
}

export function getCoursePages(pageCtx, tabs, course) {
  const pages = { course };
  for (const tab of tabs) {
    if (typeof tab.path !== "undefined") {
      const page = getPage(pageCtx, `${course.path}${tab.path}`);
      if (typeof page !== "undefined") pages[tab.slot] = page;
    } else if (tab.slot) {
      if (tab.slot === "lecturers") {
        pages.lecturers = getLecturerPages(pageCtx, course);
      } else if (tab.slot === "university") {
        pages.university = getCourseUniversityPage(pageCtx, course);
      } else if (tab.slot === "enrollment") {
        pages.enrollment = getEnrollmentPages(pageCtx, course);
      }
    }
  }
  return pages;
}

export function subHeading(content) {
  return content
    .replace(/h3/g, "h4")
    .replace(/h2/g, "h3")
    .replace(/h1/g, "h2");
}

export function withBase(content, base) {
  return content
    .replace(/\$withBase\('\/(.*?)'\)/g, (m, url) => base + url)
    .replace(/img :src/g, "img class='medium-zoom-image' src");
}

export function video(content) {
  return content.replace(
    /<Video.*id=["'](.*)["']\/>/g,
    (m, id) =>
      `<div id="youtube-container"><iframe id="youtube-player" type="text/html" src="https://www.youtube.com/embed/${id}?autoplay=0controle=0rel=0modestbranding=1origin=" frameborder="0"></iframe></div>`
  );
}
