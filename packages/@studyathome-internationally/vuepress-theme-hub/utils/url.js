function append(url, params) {
  let q = "?";
  for (const prop in params) {
    const value = params[prop];
    if (typeof value === "boolean") {
      q += `${prop}=${value ? "1" : "0"}`;
    } else {
      q += `${prop}=${value}`;
    }
  }
  return url + q;
}

module.exports = { append };
