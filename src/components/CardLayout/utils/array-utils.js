export const remove = (arr, item) => {
  const newArr = [...arr];
  newArr.splice(
    newArr.findIndex((i) => i === item),
    1
  );
  return newArr;
};

export const add = (arr, message) => {
  console.log(`the shit that got added : `, message);
  return [...arr, { message }];
};

export const contains = (original, filter) => {
  let res = filter.map((item) => {
    return original.includes(item);
  });
  return !res.includes(false);
};

export const hasDuplicate = (array) => {
  return new Set(array).size !== array.length;
};
