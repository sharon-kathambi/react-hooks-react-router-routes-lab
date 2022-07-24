import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsList = directors.map((director) => {
    const moviesList = (director.movies).map((movie) => <li key={movie}>{movie}</li>)
    return (
      <div key={director.name}>
        <h1>{director.name}</h1>
        <ul>{moviesList}</ul>
      </div>
    )
  })
  return (<div>
    <h1>Directors Page</h1>
    {directorsList}
  </div>
  );
}

export default Directors;
