import React, { createContext, useState } from 'react';
import { Items } from '../data/Items';

export const Context = createContext(null);

export const ContextProvider = (props) => {
  const [favorites, setFavorites] = useState();

  const favoriteItemsDefaultValue = () => {
    let favoriteItems = {};
    for (let i = 0; i < Items.length; i++) {
      favoriteItems[i] = false;
    }
    return favoriteItems;
  };

  const addToFavorites = (itemIndex) => {
    console.log(itemIndex);
  };

  const ContextValue = { addToFavorites };
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};
