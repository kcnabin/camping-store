export const deleteItemFromCart = (cart, productId) => {
  const newCart = cart.filter(
    (item) => item.product._id.toString() !== productId.toString()
  );

  return newCart;
};
