import React from "react";
import { movies } from "../data";

function Movies() {

  const listOfMovies = movies.map((movie) => {
    const genreList = (movie.genres).map((genre) => <li key={genre}>{genre}</li>)
    return ( <div key={movie.title}> 
      <h1>{movie.title}</h1>
      <h2> {movie.time} </h2>
    <ul>
      {genreList}
    </ul>
    </div>
    )
  })
  return (
  <div>
    <h1>Movies Page</h1>
      {listOfMovies}
  </div>
  )
}

export default Movies;
