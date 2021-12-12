const ccyFormat = (num) => {
  return `${num.toFixed(2)}`;
};

const priceRow = (qty, unit) => {
  return qty * unit;
};

const createRow = (desc, qty, unit) => {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
};

const placeholderItems = [
  createRow('Food Item Name 1', 1, 12.75),
  createRow('Drink Item Name 1', 3, 3.50),
  createRow('Food Item Name 2', 2, 5.00),
];

const subtotal = (items) => {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
};

export {
  placeholderItems,
  ccyFormat,
  subtotal
}
