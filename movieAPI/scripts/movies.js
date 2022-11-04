import { getMovies } from "./api.js";
import { config } from "./config.js";

const main = document.getElementById("main");
const IMG_URL = config.img_url;

export async function showMoviesData(movie) {
    main.innerHTML = "";
    movie?.forEach(movie => {
        const {title, poster_path, overview, release_date, vote_average} = movie;
        const year = release_date.split('-');
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie-description");
        movieElement.innerHTML = `
        <div class="movie-description">
            <img src="${IMG_URL + poster_path}" alt="${title}">
            <div class="movie-title">
                <h3>${title}</h3>
            </div>
            <div class="info-button">
                <div class="overview">
                    ${overview}
                    <div class="additional-info">
                        <div class="release-date">Date: ${year[0]}</div>
                        <div class="vote-average">Rating: ${vote_average}</div>
                    </div
                </div>
                
            </div>
        </div>
        `
        main.appendChild(movieElement);
    })
}