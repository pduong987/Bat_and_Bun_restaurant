import {
  CART_ADD,
  CART_REMOVE
} from './constants.js';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ADD:
      const additionalItem = action.payload;
      const alreadyInCart = state.find(itemInCart => itemInCart.id === additionalItem.id);
      
      if (alreadyInCart) {
        return state.map(itemInCart => itemInCart.id === additionalItem.id ? ({...additionalItem, qty: additionalItem.qty + itemInCart.qty}) : itemInCart);
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            qty: action.payload.qty,
            price: action.payload.price
          }
        ];
      }
    case CART_REMOVE:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};
