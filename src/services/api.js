const API_BASE_URL = "https://movie-monkey-server-1.onrender.com";
const BACKEND_API_KEY = import.meta.env.VITE_BACKEND_API_KEY; // Your backend API key

export const getPopularMovies = async () => {
  const url = `${API_BASE_URL}/movies/popular`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": BACKEND_API_KEY, // Custom backend key
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  const popMovies = await response.json();
  return popMovies.results;
};

export const getMovies = async (searchQuery) => {
  const url = `${API_BASE_URL}/movies/search?query=${encodeURIComponent(searchQuery)}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": BACKEND_API_KEY, // Custom backend key
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const movies = await response.json();
  return movies.results;
};
