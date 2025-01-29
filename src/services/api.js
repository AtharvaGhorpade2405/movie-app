const API_BASE_URL = "https://movie-monkey-server-1.onrender.com";
const BACKEND_API_KEY = import.meta.env.VITE_BACKEND_API_KEY; // Ensure this is defined correctly

export const getPopularMovies = async () => {
  const url = `${API_BASE_URL}/movies/popular`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": BACKEND_API_KEY,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch popular movies:", error);
    throw error;
  }
};
