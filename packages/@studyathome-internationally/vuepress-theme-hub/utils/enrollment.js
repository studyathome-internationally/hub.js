import { getPageByTitle, getCourseUniversityPage } from "@theme/utils/page.js";

export function prepareMail(mail, pageCtx, course) {
  const coursePage = getPageByTitle(pageCtx, course);
  if (typeof coursePage === "undefined") return null;
  const universityPage = getCourseUniversityPage(pageCtx, coursePage);
  if (typeof universityPage === "undefined") return null;

  const to = universityPage.frontmatter["international-office"];
  const {
    cc,
    bcc,
    subject,
    body: { before, form, after }
  } = mail;
  const body = processBody([before, form, after].join(""), { course: coursePage });

  return {
    to,
    cc,
    bcc,
    subject,
    body
  };
}
function processBody(body, { course }) {
  let result = body.replace(/(\\n\s|\\n)/g, "\n");
  [["title", course.frontmatter.title], ["link", course.frontmatter.link]].forEach(
    ([name, value]) => {
      result = result.replace(new RegExp(`{{\\s?${name}\\s?}}`, "g"), value);
    }
  );
  return result;
}
