import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchMovieStart = () => {
  return {
    type: actionTypes.FETCH_MOVIE_START
  };
};
export const fetchMovieSuccess = movies => {
  return {
    type: actionTypes.FETCH_MOVIE_SUCCESS,
    movies: movies
  };
};
export const fetchMovieFail = () => {
  return {
    type: actionTypes.FETCH_MOVIE_FAIL
  };
};

export const fetchMovie = () => {
  return dispatch => {
    dispatch(fetchMovieStart());
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=d47029c7808cbdf81f0828c30d4bbe1e"
      )
      .then(res => {
        const fetchMovie = [];
        for (let key in res.data.results) {
          fetchMovie.push({
            ...res.data.results[key],
            id: res.data.results[key].id,
            image: res.data.results[key].poster_path
          });
        }
        console.log(res.data);
        dispatch(fetchMovieSuccess(fetchMovie));
      })
      .catch(e => {
        dispatch(fetchMovieFail());
      });
  };
};
