export const getPath = (longPath) => {
  const array = longPath.split("/");
  return array[array.length - 1];
};
