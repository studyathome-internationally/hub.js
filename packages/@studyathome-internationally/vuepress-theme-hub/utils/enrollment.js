export function prepareMail(mail, course, hostUniversity, homeUniversity) {
  const to = homeUniversity.frontmatter["international-office"];
  const {
    cc,
    bcc,
    subject,
    body: { before, form, after },
  } = mail;
  const body = processBody([before, form, after].join(""), {
    course,
    university: hostUniversity,
  });

  return {
    to,
    cc,
    bcc,
    subject,
    body,
  };
}
function processBody(body, { course, university }) {
  let result = body.replace(/(\\n\s|\\n)/g, "\r\n");

  [
    ["title", course.title],
    ["link", course.frontmatter.link],
    ["university.name", university.title],
  ].forEach(([name, value]) => {
    result = result.replace(new RegExp(`{{\\s?${name}\\s?}}`, "g"), value);
  });
  return result;
}
