import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/movieTrailer';

const Videobg = ({ movieid }) => {
  const trailerId = useSelector((store) => store.movies?.trailervideo);

  useMovieTrailer(movieid);

  return (
    <div className="w-full  bg-black">
      {trailerId && (
        <iframe
          className="w-full h-full aspect-video"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0`}
          title="YouTube trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Videobg;
