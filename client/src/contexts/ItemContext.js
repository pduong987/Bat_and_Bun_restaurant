import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import {
  ITEMS_SUCCESS,
  ITEMS_FAIL
} from '../reducers/constants';
import { itemReducer } from '../reducers/itemReducer';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [allItems, dispatch] = useReducer(itemReducer, []);

  const getAllItems = async () => {
    try {
      const { data } = await axios.get("/items");
      dispatch({ type: ITEMS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: ITEMS_FAIL, payload: err.message });
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
    getAllItems();
  }, []);

  return (
    <ItemContext.Provider value={{allItems, dispatch}}>
      {children}
    </ItemContext.Provider>
  );
};
