import { config } from "./config.js";
import { showMoviesData } from "./movies.js";

const API_URL = config.base_url + config.popular_movie_url + config.api_key;

export async function getMovies(url) {
    let data = [];
    try{
        let response = fetch(url)
        .then(response => response.json())
        .then(data => { 
            console.log(data.results);
            showMoviesData(data.results);
        });
        data = response;
    } catch {}
    
    return data;
    
}

getMovies(API_URL);
