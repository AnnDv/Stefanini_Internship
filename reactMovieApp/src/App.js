import './index.css';
import { CONFIG } from './config';
import MovieCard from './components/MovieCard';
import React from 'react';
import { useState, useEffect } from 'react';
import "./App.css"

const API_URL = CONFIG.BASE_URL + CONFIG.POPULAR_MOVIE_URL + CONFIG.API_KEY;

function App() {
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

export default App;
