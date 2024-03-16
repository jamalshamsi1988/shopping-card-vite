import React, { createContext, useReducer } from "react";

const initialState = {};

const CardContext = createContext();

const reducer=()=>{}

const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return <CardContext.Provider value={state}>{children}</CardContext.Provider>;
};

export default CardProvider;
