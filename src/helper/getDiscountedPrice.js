export const getDiscountedPrice = (price, discount) => {
  return (1 - discount / 100) * price;
};
