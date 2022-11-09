import './index.css';
import { config } from './config';
import MovieCard from './components/MovieCard';
import React from 'react';
import { useState, useEffect } from 'react';

const API_URL = config.base_url + config.popular_movie_url + config.api_key;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => { 
        console.log(data);
        setMovies(data.results);
      });
  }, [])

  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} {...movie}/>
        )
      })}
    </div>
    
  );
}

export default App;
