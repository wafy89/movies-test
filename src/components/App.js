import React from "react";
import { Router } from "@reach/router";
import Header from "./layouts/Header";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Movie from "./screens/movie/Movie";
import { GlobalStyle } from "../styles/GlobalStyle";

const App = () => {
  return (
    <>
      <Header />
      <Router basepath="/movies-test">
        <Home path="/" />
        <Movie path=":movieId" />
        <NotFound default />
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
