import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as actions from "../store/actions/index";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes";
import thunk from "redux-thunk";

class MovieList extends Component {
  componentDidMount() {
    this.props.onMovieListShow();
  }
  render() {
    let movieList = <h1>Loading...</h1>;
    if (!this.props.loading) {
      movieList = this.props.movies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.original_title}</h3>
          <img src={movie.image}></img>
        </div>
      ));
    }
    return <div>{movieList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMovieListShow: () => dispatch(actions.fetchMovie())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
