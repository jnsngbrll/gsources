import React, { createContext, useState } from 'react';

export const Context = createContext(null);

export const ContextProvider = (props) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const addToFavorites = (itemIndex) => {
    console.log(itemIndex);
  };

  const ContextValue = { setIsMenuActive, isMenuActive, addToFavorites };
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};
