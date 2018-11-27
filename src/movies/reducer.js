import { GET_UPCOMING_MOVIES, GET_TOP_MOVIES, GET_POPULAR_MOVIES, GET_MOVIE, RESET_MOVIE, GET_WATCHLIST, POST_WATCHLIST, RESET_WATCHLIST } from './actions';

const initialState = {
  uMovies: [],
  tMovies: [],
  pMovies: [],
  moviesLoaded: false,
  movie: {},
  movieLoaded: false,
  watchlist: [],
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        uMovies: data,
      };
    case GET_TOP_MOVIES:
      return {
        ...state,
        tMovies: data,
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        pMovies: data,
        moviesLoaded: true
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
    case GET_WATCHLIST:
      return {
        ...state,
        watchlist: data,
      };
    case POST_WATCHLIST:
      return {
        ...state,
      };
    case RESET_WATCHLIST:
      return {
        ...state,
        watchlist: [],
      };
    default:
      return state;
  }
}
