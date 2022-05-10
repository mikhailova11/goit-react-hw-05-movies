import axios from 'axios';


const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '43826aff38e7e981731c2a4c4f74555d';

async function fetchWithErrorHandling(url) {
    try {
        const response = await axios.get(url);
        const movies = await response.data;
        return movies;
      } catch (error) {
        alert(`${error}`);
        return Promise.reject(error);
      }
}

export function fetchPopularFilms() {
    return fetchWithErrorHandling(`${BASE_URL}trending/all/day?api_key=${KEY}`)
}

export function fetchSearchMovies(query) {
    return fetchWithErrorHandling(`${BASE_URL}search/movie?api_key=${KEY}&page=1&include_adult=false&query=${query}`)  
}

export function fetchGetMovieDetails(movieId) {
    const id = movieId;
    return fetchWithErrorHandling(`${BASE_URL}movie/${id}?api_key=${KEY}`) 
}

export function fetchGetMovieCredits(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}movie/${movieId}/credits?api_key=${KEY}`) 
}

export function fetchGetMovieReviews(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&page=1`) 
}

