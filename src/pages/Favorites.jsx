import { useContext } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Favorites.css";
import { MovieContext } from "../store/movie-store";

const Favorites = () => {
  let { favMovies } = useContext(MovieContext);

  return (
    <>
      <div className="movies-grid">
        {favMovies.length != 0 ? (
          favMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))
        ) : (
          <div className="favorites-empty">
            <div className="header">
              <h2>No favorite movies yet!</h2>
            </div>
            <div>
              <p>
                Start adding movies to your favorites and they will appear here!
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;
