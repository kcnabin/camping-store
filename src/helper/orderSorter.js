export const sortByLatest = (orders) => {
  const sortedOrders = [...orders].sort(
    (orderA, orderB) => new Date(orderB.createdAt) - new Date(orderA.createdAt)
  );

  return sortedOrders;
};
