import React from 'react';

const DisplayQuotes = ({ character, quote, image }) => {
  return (
    <div className="DisplayQuotes">
      <img src={image} alt={character} />
      <p>{character}</p>
      <p>{quote}</p>
    </div>
  );
};

export default DisplayQuotes;