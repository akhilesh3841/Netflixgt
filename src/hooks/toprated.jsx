import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addtopratedmovies } from '../utils/movieSlice';

const TopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  const fetchTopRatedMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200?page=1", API_OPTIONS);
      const json = await response.json();

      // console.log(json.results); // Optional: Debugging
      dispatch(addtopratedmovies(json.results));
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
    }
  };

  return null; // This component fetches data only
};

export default TopRated;
