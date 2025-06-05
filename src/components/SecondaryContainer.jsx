import React from 'react';
import Movielist from './Movielist';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const allmovies = useSelector((store) => store.movies);
  const allpopularamovies=useSelector((store)=>store.movies?.mostpopularmovies)
  const toprated=useSelector((store)=>store.movies?.topratedmovies)
  const comingmovies=useSelector((store)=>store.movies?.upcomingmovies)

  if (!allmovies.nowplayingmovies) return null;
  if(!allpopularamovies){
    return;
  }
  if(!toprated){
    return;
  }
  console.log(toprated);

  return (
    <div className=" -mt-30 relative z-20 bg-black text-white px-4 py-6 space-y-8">
      <Movielist title="Now Playing" movies={allmovies.nowplayingmovies} />
      <Movielist title="Trending Movies" movies={allpopularamovies} />
      <Movielist title="Top Rated" movies={toprated} />
      <Movielist title="Upcoming Movies" movies={comingmovies} />
    </div>
  );
};

export default SecondaryContainer;
