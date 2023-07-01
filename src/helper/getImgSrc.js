export const getImgSrc = (name) => {
  const baseUrl = "http://localhost:3001";
  // const baseUrl = "https://confused-teal-ox.cyclic.app";
  return baseUrl + "/uploads/products/" + name;
};
