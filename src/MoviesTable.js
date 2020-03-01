import React from 'react';
import { getMovieDuration, getMovieName, getMovieRating } from './MovieForm';

export function formatDuration(duration) {
  if (duration >= 60) {
    const restMinutes = duration % 60;
    return `${Math.floor(duration / 60)}h ${restMinutes ? restMinutes + 'min' : ''}`;
  } else {
    return `${duration} min`;
  }
}

export function MoviesTable(props) {
  const { movies } = props;
  return (
    <table id={'directory-table'}>
      <thead>
      <tr>
        <th>Name</th>
        <th>Ratings</th>
        <th>Duration</th>
      </tr>
      </thead>
      <tbody>
      {
        movies.length
          ? movies.map(movie => (
            <tr key={getMovieName(movie)}>
              <td>{getMovieName(movie)}</td>
              <td>{getMovieRating(movie)}</td>
              <td>{formatDuration(getMovieDuration(movie))}</td>
            </tr>
          ))
          : (
            <tr id={'no-result'}>
              <td colSpan={3}>No Results Found</td>
            </tr>
          )
      }
      </tbody>
    </table>
  );
}
