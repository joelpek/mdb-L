import { GET_UPCOMING_MOVIES, GET_TOP_MOVIES, GET_POPULAR_MOVIES, GET_MOVIE, RESET_MOVIE } from './actions';

const initialState = {
  uMovies: [],
  tMovies: [],
  pMovies: [],
  moviesLoaded: false,
  moviesLoaded1: false,
  movie: {},
  movieLoaded: false,
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        uMovies: data,
        moviesLoaded: true
      };
    case GET_TOP_MOVIES:
      return {
        ...state,
        tMovies: data,
        moviesLoaded1: true
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        pMovies: data,
        moviesLoaded1: true
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: data,
        movieLoaded: true,
      };
    case RESET_MOVIE:
      return {
        ...state,
        movie: {},
        movieLoaded: false,
      };
    default:
      return state;
  }
}
