export const getImgSrc = (name) => {
  const baseUrl = "http://localhost:3001";
  return baseUrl + "/products/" + name;
};
