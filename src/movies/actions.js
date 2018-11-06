export const GET_UPCOMING_MOVIES = 'GET_UPCOMING_MOVIES';
export const GET_TOP_MOVIES = 'GET_TOP_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

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
    const res = await fetch('https://api.themoviedb.org/3/movie/popular/?api_key=18187d2ee95e787e812dac2eefc17528');
    const movies = await res.json();
    return dispatch({
      type: 'GET_TOP_MOVIES',
      data: movies.results,
    });
  };
}

export function getMovie(id) {
  return async function (dispatch) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=18187d2ee95e787e812dac2eefc17528`);
    const movie = await res.json();
    return dispatch({
      type: 'GET_MOVIE',
      data: movie,
    });
  };
}

export function resetMovie() {
  return {
    type: 'RESET_MOVIE',
  };
}