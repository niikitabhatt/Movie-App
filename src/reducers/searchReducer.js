import {
  INPUT_MOVIE,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE,
} from '../constants/actionConstants';
import initialMovieSearchStates from './initialMovieSearchStates';
export default function (state = initialMovieSearchStates.movieInfo, action) {
  switch (action.type) {
    case INPUT_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: '',
        
      };
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload,
        
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload
      }
    default:
      return state;
  }
}
