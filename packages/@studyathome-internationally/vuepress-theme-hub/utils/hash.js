async function hash(value, length) {
  const msgUint8 = new TextEncoder().encode(value);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return length ? hashHex.substring(0, length) : hashHex;
}

export { hash };
