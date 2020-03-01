import React from 'react';

export function parseDuration(inputValue) {
  const isInMinutesFormat = inputValue.toLowerCase().includes('m');
  const amount = parseFloat(inputValue);
  const amountInMinutes = isInMinutesFormat ? amount : amount * 60;
  return amountInMinutes;
}

export function getMovieName(movie) {
  return movie.name;
}

export function getMovieRating(movie) {
  return movie.ratings;
}

export function getMovieDuration(movie) {
  return movie.duration;
}

export function MovieForm(props) {
  const { onSubmit } = props;

  const [name, setName] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [duration, setDuration] = React.useState('');

  const isFormInvalid = (
    !name || !rating || !duration || !isFinite(Number(rating)) || !isFinite(parseFloat(duration))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormInvalid) {
      return;
    }
    onSubmit({
      name,
      ratings: rating,
      duration: parseDuration(duration),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">
        <p>Movie name</p>
        <input
          type="text"
          id="name-input"
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label htmlFor="ratings-input">
        <p>Ratings</p>
        <input
          type="text"
          id="ratings-input"
          onChange={(e) => setRating(e.target.value)}
        />
      </label>

      <label htmlFor="duration-input">
        <p>Duration</p>
        <input
          type="text"
          id="duration-input"
          onChange={(e) => setDuration(e.target.value)}
        />
      </label>

      <button
        onClick={handleSubmit}
        id="submit-button"
        disabled={isFormInvalid}
      >
        Submit
      </button>
    </form>
  );
}
