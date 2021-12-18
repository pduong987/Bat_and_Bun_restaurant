const ccyFormat = (num) => {
  return `${num.toFixed(2)}`;
};

const subtotal = (cartItems) => {
  return cartItems.map(({ qty, price }) => qty * price).reduce((sum, i) => sum + i, 0);
};

export {
  ccyFormat,
  subtotal
}
