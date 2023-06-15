import { getDiscountedPrice } from "./getDiscountedPrice";

export const getCartTotal = (cart) => {
  const subTotal = cart.reduce(
    (sum, item) =>
      sum +
      item.quantity *
        getDiscountedPrice(item.product.price, item.product.discount),
    0
  );
  return subTotal;
};
