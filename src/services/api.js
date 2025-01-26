export const getPopularMovies = async () => {
  const url = "http://localhost:3000/movies/popular"; // Call your backend server
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
  const url = `http://localhost:3000/movies/search?query=${searchQuery}`;
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
