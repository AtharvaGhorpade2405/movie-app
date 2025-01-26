import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavMovies(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favMovies));
  }, [favMovies]);

  const addToFav = (movie) => {
    if (!favMovies.some((fav) => fav.id === movie.id)) {
      setFavMovies([...favMovies, movie]);
    }
  };

  function isFav(movieId) {
    return favMovies.some((movie) => movie.id === movieId);
  }

  const removeFromFav = (movieId) => {
    setFavMovies(favMovies.filter((movie) => movie.id !== movieId));
  };

  return (
    <>
      <MovieContext.Provider
        value={{ favMovies, setFavMovies, addToFav, isFav, removeFromFav }}
      >
        {children}
      </MovieContext.Provider>
    </>
  );
};
