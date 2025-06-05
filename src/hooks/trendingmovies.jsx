import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addpopularmovies } from '../utils/movieSlice';

const TrendingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    mostPopular();
  }, []);

  const mostPopular = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", API_OPTIONS);
      const json = await response.json();
      // console.log(json.results); // Just for debugging

      dispatch(addpopularmovies(json.results)); // Dispatch only the list of movies
    } catch (error) {
      console.error("Failed to fetch popular movies:", error);
    }
  };

  return null; // This component is only used to fetch data, nothing to render
};

export default TrendingMovies;
