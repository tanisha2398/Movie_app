import React from "react";
import NavBar from "./components/navBar";
import Playground from "./containers/playground";
import MovieList from "./containers/MovieList";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <MovieList />
    </div>
  );
}

export default App;
