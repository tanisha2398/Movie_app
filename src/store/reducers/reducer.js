import * as actionTypes from "../actions/actionTypes";
const initialState = {
  movies: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.movies
      };
    case actionTypes.FETCH_MOVIE_FAIL:
      return {
        ...state,
        loading: false
      };
  }
  return state;
};
export default reducer;
