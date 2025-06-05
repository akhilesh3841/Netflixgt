import React from 'react';
import { useSelector } from 'react-redux';
import Videotitle from './Videotitle';
import Videobg from './Videobg';

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowplayingmovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <Videotitle title={original_title} overview={overview} />
      <Videobg movieid={id} />
    </section>
  );
};

export default Maincontainer;
