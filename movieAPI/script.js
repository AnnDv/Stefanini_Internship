const API_KEY = "8b853ea22b2da094a00861a8d60da1e6";
const POPULAR_MOVIE_URL = "discover/movie?sort_by=popularity.desc&api_key=" + API_KEY;
const API_URL = "https://api.themoviedb.org/3/" + POPULAR_MOVIE_URL;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const main = document.getElementById("main");

function getMovies(url) {
    let response = fetch(url)
    .then(response => response.json())
    .then(data => { 
        console.log(data);
        showMoviesData(data.results);
    });
    return response;
}

getMovies(API_URL);

function showMoviesData(data) {
    main.innerHTML = "";

    data.forEach(movie => {
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