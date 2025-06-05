import React from 'react';
import { IMAGE_URL } from '../utils/constants';

const Moviecard = ({ posterpath }) => {
  if (!posterpath) return null;

  return (
    <div className="w-32 md:w-44 flex-shrink-0 p-2 hover:scale-105 transition-transform duration-300">
      <img
        src={IMAGE_URL + posterpath}
        alt="Movie Poster"
        className="w-full h-auto rounded-lg shadow-md object-cover"
      />
    </div>
  );
};

export default Moviecard;
