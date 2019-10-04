import React, { Component } from "react";
import axios from "axios";
class Playground extends Component {
  state={
    genres:[],
    discoverClicked:false,
    movies:[]
  }
  componentDidMount() {
  
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=d47029c7808cbdf81f0828c30d4bbe1e&language=en-US"
      )
      .then(response => {
       
        this.setState({genres:response.data.genres});
        console.log("response",response.data.genres);
      })
      .catch(error => {
        console.log("error", error);
      });
  }
  onGenreClick=(name)=>{
    console.log(name)
  }
  onMovieDiscoverHandler=()=>{
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d47029c7808cbdf81f0828c30d4bbe1e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false')
    .then(response=>{
      console.log('discover',response.data.results);
      this.setState({discoverClicked:!this.state.discoverClicked,movies:response.data.results})
    }).catch(error => {
        console.log("error", error);
      });
  }
  render() {
    let movieTitle=null;
    if(this.state.discoverClicked){
     movieTitle= this.state.movies.map(movie=>(
        <li key={movie.id}>{movie.title}</li>
      ))
    }
    return (
      <div>
        <h1>In Playground</h1>
        <button onClick={this.onMovieDiscoverHandler}>Discover Movie</button>
    {movieTitle}
       <div>{this.state.genres.map(genre=>(
        <p key={genre.id} onClick={this.onGenreClick.bind(this,`${genre.name}`)}>{genre.name}</p>
       ))}</div>
      </div>
    );
  }
}

export default Playground;
