import { CONFIG } from "../config";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_URL = CONFIG.BASE_URL + CONFIG.POPULAR_MOVIE_URL + CONFIG.API_KEY;

export const FetchMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => { 
      console.log(data.results);
      setMovies(data.results);
    });
  }, [])
  
  return (
    <div className='container'>
      <MovieCard movies={movies}/>    
    </div>
      
  );
}

export default FetchMovies;