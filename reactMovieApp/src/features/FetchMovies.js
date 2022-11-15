import { getData } from "../api/getData";
import { CONFIG } from "../config";
import MovieCard from "../components/MovieCard";
import  React, { useEffect, useState } from "react";

const API_URL = CONFIG.BASE_URL + CONFIG.POPULAR_MOVIE_URL + CONFIG.API_KEY;

const FetchMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData(API_URL).then((result) => { 
    setMovies(result)
  })
}, [])

  console.log(movies)

  return (
    <div className='container'>
      <MovieCard movies={movies}/>    
    </div>
  );
}

export default FetchMovies;