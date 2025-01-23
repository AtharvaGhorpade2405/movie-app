import { useEffect, useState } from "react";
import { getPopularMovies, getMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

const Home = () => {
  let [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    let loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (!searchQuery.trim());
    if (loading) return;
    setLoading(true);
    const loadMovies = async () => {
      try {
        movies = await getMovies(searchQuery);
        setMovies(movies);
        setSearchQuery("");
        setError(null);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
    setLoading(false);
  }

  function handleOnChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <>
      <div className="home">
        <div>
          <form action="" onSubmit={handleSubmit} className="search-form">
            <div>
              <input
                type="text"
                className="search-input"
                placeholder="Search for movies..."
                onChange={handleOnChange}
                value={searchQuery}
              />
            </div>
            <div>
              <button type="submit" className="search-btn">
                Search
              </button>
            </div>
          </form>
        </div>
        {error && <div className="error">{error}</div>}
        {loading ? (
          <div className="loading">Loading....</div>
        ) : (
          <div className="movies-grid">
            {movies.map(
              (movie) =>
                movie.title.toLowerCase().includes(searchQuery) && (
                  <MovieCard movie={movie} key={movie.id}></MovieCard>
                )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
