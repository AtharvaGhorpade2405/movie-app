import { FaHeart } from "react-icons/fa";
import "../css/MovieCard.css";
import { useContext, useState } from "react";
import { MovieContext } from "../store/movie-store";

const MovieCard = ({ movie }) => {
  let { favMovies, addToFav, isFav, removeFromFav } = useContext(MovieContext);
  const favorite = isFav(movie.id);

  function handleFavClick(event) {
    event.preventDefault();
    if (favorite) removeFromFav(movie.id);
    else addToFav(movie);
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Image not found!"
          ></img>
          <button
            className={`favorite-btn ${favorite ? "active" : ""}
            `}
            onClick={() => handleFavClick(event)}
          >
            <FaHeart />
          </button>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date.split("-")[0]}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
