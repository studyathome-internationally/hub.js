export function extractSlot(slotKey, html, elem = "div", type = "gslot") {
  const dom = new DOMParser().parseFromString(html, "text/html");
  const slot = dom.querySelector(`.${type}.${slotKey}`);
  return slot ? slot.innerHTML : "";
}
