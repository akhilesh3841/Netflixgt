import React from 'react';
import Moviecard from './Moviecard';

const Movielist = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="p-4 md:p-6 bg-black text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-3">{title}</h1>
      
      <div className="flex overflow-x-auto space-x-4 scroll-smooth no-scrollbar">
  {movies.map((movie, index) => (
    <Moviecard key={index} posterpath={movie.poster_path} />
  ))}
</div>

    </div>
  );
};

export default Movielist;
