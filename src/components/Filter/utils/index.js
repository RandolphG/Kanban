export const contains = (orig, filter) => {
  let res = filter.map((item) => {
    return orig.includes(item);
  });
  return !res.includes(false);
};

export const hasDuplicates = (array) => {
  return new Set(array).size !== array.length;
};
