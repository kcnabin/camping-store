export const getTotalCartQuantity = (cart) => {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  return total;
};
