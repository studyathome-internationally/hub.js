function construct(label, elems) {
  if (typeof elems === "undefined") return "";
  let entry = elems;
  if (typeof elems === "Array") entry = elems.join(",");
  return `${encodeURIComponent(label)}=${encodeURIComponent(entry)}`;
}
export function generateMailto({ to, cc, bcc, subject, body }) {
  if (typeof to === "string") to = [to];
  if (typeof to === "string") cc = [cc];
  if (typeof to === "string") bcc = [bcc];
  const mail = { to, cc, bcc, subject, body };
  return Object.entries(mail)
    .map(([key, value]) => construct(key, value))
    .join("&");
}
