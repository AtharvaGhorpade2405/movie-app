const API_BASE_URL = "https://movie-monkey-server-1.onrender.com";

export const getPopularMovies = async () => {
  const url = `${API_BASE_URL}/movies/popular`; // Call your backend server
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(url, options);
  const popMovies = await response.json();
  return popMovies.results;
};


export const getMovies = async (searchQuery) => {
  const url = `${API_BASE_URL}/movies/search?query=${searchQuery}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(url, options);
  const movies = await response.json();
  return movies.results;
};
