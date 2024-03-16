import React, { createContext, useContext, useReducer } from "react";

import { sumProducts } from "../helper/helper";

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkOut: false,
};

const CardContext = createContext();

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkOut: false,
      };

    default:
      throw new Error('Invalid Action')
      
  }
};

const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};

const useCard = () => {
  const { state, dispatch } = useContext(CardContext);
  return [state, dispatch];
};
export default CardProvider;
export { useCard };
