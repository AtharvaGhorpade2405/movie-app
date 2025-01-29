const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "https://movie-monkey-server-1.onrender.com"; // Use .env for backend URL

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/movies/popular`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) throw new Error("Failed to fetch popular movies");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovies = async (searchQuery) => {
  try {
    const response = await fetch(`${API_BASE_URL}/movies/search?query=${encodeURIComponent(searchQuery)}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) throw new Error("Failed to fetch search results");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
