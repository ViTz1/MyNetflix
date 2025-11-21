import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

/**
 * FavoritesProvider component.
 * @param {object} props
 */
export function FavoritesProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    try {
      const raw = localStorage.getItem("favourites");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  function isFavourite(id) {
    return favourites.some(item => item.id === id);
  }

  function addFavourite(item) {
    if (!isFavourite(item.id)) setFavourites(prev => [item, ...prev]);
  }

  function removeFavourite(id) {
    setFavourites(prev => prev.filter(i => i.id !== id));
  }

  return (
    <FavoritesContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

/**
 * useFavorites hook.
 */
export function useFavorites() {
  return useContext(FavoritesContext);
}
