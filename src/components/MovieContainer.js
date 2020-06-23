import React from 'react';
import CardPage from './CardPage';
const MovieContainer = (props) => {
  const movies = props.movieInfo.movies;
  const error = props.movieInfo.error;

  return (
    <React.Fragment>
      <div className="row justify-content-start">
        {movies.length > 0 ? (
          movies.map((movie) => <CardPage movie={movie} key={movie.imdbID} />)
        ) : error === '' ? null : (
          <div class="col-md-12 text-center">
            {' '}
            <h1 className="mt-3 bg-light  "> {props.movieInfo.error}</h1>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default MovieContainer;
