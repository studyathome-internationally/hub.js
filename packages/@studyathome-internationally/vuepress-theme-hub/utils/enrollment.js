import { getPageByTitle, getCourseUniversityPage } from "@theme/utils/page.js";

export function prepareMail(mail, pageCtx) {
  const universityPage = getCourseUniversityPage(pageCtx, pageCtx.$page);
  if (typeof universityPage === "undefined") return null;

  const to = universityPage.frontmatter["international-office"];
  const {
    cc,
    bcc,
    subject,
    body: { before, form, after }
  } = mail;
  const body = processBody([before, form, after].join(""), { course: pageCtx.$page });

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
