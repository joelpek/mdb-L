export const GET_UPCOMING_MOVIES = 'GET_UPCOMING_MOVIES';
export const GET_TOP_MOVIES = 'GET_TOP_MOVIES';
export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';
export const RESET_WATCHLIST = 'RESET_WATCHLIST';
export const POST_WATCHLIST = 'POST_WATCHLIST';
export const GET_WATCHLIST = 'GET_WATCHLIST';

export function getUpcomingMovies() {
  return async function (dispatch) {
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming/?api_key=18187d2ee95e787e812dac2eefc17528');
    const movies = await res.json();
    return dispatch({
      type: 'GET_UPCOMING_MOVIES',
      data: movies.results,
    });
  };
}

export function getTopMovies() {
  return async function (dispatch) {
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated/?api_key=18187d2ee95e787e812dac2eefc17528');
    const movies = await res.json();
    return dispatch({
      type: 'GET_TOP_MOVIES',
      data: movies.results,
    });
  };
}

export function getPopularMovies() {
  return async function (dispatch) {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular/?api_key=18187d2ee95e787e812dac2eefc17528');
    const movies = await res.json();
    return dispatch({
      type: 'GET_POPULAR_MOVIES',
      data: movies.results,
    });
  };
}

export function getMovie(id) {
  return async function (dispatch) {
    const res = await fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=18187d2ee95e787e812dac2eefc17528');
    const movie = await res.json();
    return dispatch({
      type: 'GET_MOVIE',
      data: movie,
    });
  };
}

export function getWatchlist() {
  return async function (dispatch) {
    const res = await fetch('/api/watchlist', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const watchlist = await res.json()
    return dispatch({
      type: 'GET_WATCHLIST',
      data: watchlist
    });
  };
}

export function updateWatchlist(movie) {
  return async function (dispatch) {
    const res = await fetch('/api/watchlist?title='+movie.title+'&id='+movie.id+'&poster_path='+movie.poster_path, { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return dispatch({
      type: 'POST_WATCHLIST',
      message: await res.json(),
      data: movie
    });
  };
}

export function resetWatchlist() {
  return async function (dispatch) {
    await fetch('/api/watchlist', { 
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return dispatch({
      type: 'RESET_WATCHLIST',
    });
  };
}

export function resetMovie() {
  return {
    type: 'RESET_MOVIE',
  };
}