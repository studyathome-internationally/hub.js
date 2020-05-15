export const convertDate = (input) => {
  if (!input) return {};
  const date = input.split(".");
  return date.length === 3
    ? { day: Number(date[0]), month: Number(date[1]), year: Number(date[2]) }
    : {};
};
