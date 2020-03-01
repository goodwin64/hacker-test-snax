import React from 'react';
import './App.css';
import { getMovieDuration, getMovieName, MovieForm } from './MovieForm';
import { MoviesTable } from './MoviesTable';
import { MovieSearch } from './MovieSearch';

function getVisibleMovies(movies, search) {
  const filteredMovies = search.length < 2
    ? movies
    : movies.filter((movie) => getMovieName(movie).toLowerCase().includes(search));

  return sortMovies(filteredMovies);
}

function sortMovies(movies) {
  return [...movies]
    .sort((a, b) => getMovieDuration(b) - getMovieDuration(a));
}

function App() {
  const [allMovies, setAllMovies] = React.useState([]);
  const [search, setSearch] = React.useState('');

  const onAddMovie = (movieToAdd) => {
    const existingMovieIndex = allMovies
      .findIndex((movie) => getMovieName(movie) === getMovieName(movieToAdd));

    if (existingMovieIndex === -1) {
      setAllMovies([...allMovies, movieToAdd]);
    } else {
      setAllMovies([
        ...allMovies.slice(0, existingMovieIndex),
        movieToAdd,
        ...allMovies.slice(existingMovieIndex + 1),
      ]);
    }
  };

  const visibleMovies = getVisibleMovies(allMovies, search);

  return (
    <div>
      <MovieForm
        onSubmit={onAddMovie}
      />
      <MovieSearch
        onChange={setSearch}
        value={search}
      />
      <MoviesTable movies={visibleMovies} />
    </div>
  );
}

export default App;
