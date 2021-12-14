import {
  CART_ADD,
  CART_REMOVE
} from './constants.js';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ADD:
      const additionalItem = action.payload;
      const alreadyInCart = state.find(itemInCart => itemInCart.name === additionalItem.name);
      
      if (alreadyInCart) {
        return state.map(itemInCart => itemInCart.name === additionalItem.name ? ({...additionalItem, qty: additionalItem.qty + itemInCart.qty}) : itemInCart);
      } else {
        return [
          ...state,
          {
            name: action.payload.name,
            qty: action.payload.qty
          }
        ];
      }
    case CART_REMOVE:
      return state.filter(item => item.name !== action.payload.name);
    default:
      return state;
  }
};
