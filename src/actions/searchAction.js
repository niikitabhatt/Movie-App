import {
  INPUT_MOVIE,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE
} from '../constants/actionConstants';
import axios from 'axios';
import {API_KEY} from '../constants/apiKeyConstants';
// action creator for input a movie name
export const inputMovie = (inputText) => {
  // action
  return {
    type: INPUT_MOVIE,
    payload: inputText,
  };
};
// action Creator for serching a movie
// 1. API fetch request
export const fetchMovieRequest = () => {
  return {
    type: FETCH_MOVIE_REQUEST,
  };
};
// 2. API movie fetch  success
export const fetchMovieSuccess = (movies) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: movies,
  };
};
// 3. API movie fetch failure
export const fetchMovieError = (errorMsg) => {
  return {
    type: FETCH_MOVIE_ERROR,
    payload: errorMsg,
  };
};
// fetch  movie action
export const fetchMovies = (inputText) => {
  return (dispatch) => {
      dispatch(fetchMovieRequest);
      axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputText}`)
      .then(response => {
        if(response.data.Response === "True"){
        const movies =  response.data.Search;
        dispatch(fetchMovieSuccess(movies));
        }
        else{
        const errorMsg = response.data.Error;
        dispatch(fetchMovieError(errorMsg));
        }
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchMovieError(errorMsg));
      })     
  }
}
export const fetchMovie = (id) => {
  return (dispatch) => {
    axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then(response => {
    dispatch({
      type: FETCH_MOVIE,
      payload: response.data,
    })
  })
  .catch(e => console.log(e));
  }
}