export const getPopularMovies= async ()=>{
  const url = 'https://api.themoviedb.org/3/movie/popular';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${import.meta.env.VITE_BEARER}`
    }
  };
  
  let response = await fetch(url, options);
  let popMovies=await response.json();

  return popMovies.results;
}

export const getMovies= async (searchQuery)=>{
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:`${import.meta.env.VITE_BEARER}`
    }
  };
  
  let response = await fetch(url, options);
  let movies=await response.json();

  return movies.results;
}