// import CONFIG from '../config';

// const API_URL = CONFIG.BASE_URL + CONFIG.POPULAR_MOVIE_URL + CONFIG.API_KEY;

export default async function getData(url) {
  const data = await fetch(url);
  const movies = await data.json();
  console.log(movies.results);
  return movies.results;
}
