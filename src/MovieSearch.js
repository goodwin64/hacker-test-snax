import React from 'react';

export function MovieSearch(props) {
  return (
    <label htmlFor="search-input">
      <p>Search</p>
      <input
        type="text"
        id="search-input"
        onChange={e => props.onChange(e.target.value)}
        value={props.value}
      />
    </label>
  );
}
