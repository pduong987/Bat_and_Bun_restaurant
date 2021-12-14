import { createContext, useReducer, useEffect } from 'react';
import { cartReducer } from '../reducers/cartReducers';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  
  return (
    <CartContext.Provider value={{cartItems, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};
