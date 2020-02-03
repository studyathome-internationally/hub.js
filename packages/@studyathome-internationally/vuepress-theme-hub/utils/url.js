function append(url, params) {
  let q = "?";
  for (const prop in params) {
    const value = params[prop];
    if (typeof value === "boolean") {
      q += `${prop}=${value ? "1" : "0"}`;
    } else {
      q += `${prop}=${value}`;
    }
    q += "&";
  }
  q = q.substring(0, q.length - 1);
  return url + q;
}

module.exports = { append };
