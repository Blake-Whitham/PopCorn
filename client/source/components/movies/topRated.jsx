/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TopRated({ user }) {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get('/topRated')
      .then((res) => { setMovies(res.data.results); });
  }, []);

  // eslint-disable-next-line consistent-return
  function showMovie(movie) {
    if (movie) {
      return (
        <div>
          <img alt={movie.title} height="70%" src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
          <div>{movie.title}</div>
          <div>{movie.overview}</div>
        </div>
      );
    }
  }
  function addMovie() {
    axios
      .post('/addMovie', { movie: movies[count], user })
      .then(() => { setCount(count + 1); })
      .catch((err) => { console.log(err); });
  }
  return (
    <div>
      {showMovie(movies[count])}
      <button type="button" onClick={() => { setCount(count + 1); }}>Next</button>
      <button type="button" onClick={addMovie}>Like</button>
    </div>
  );
}
