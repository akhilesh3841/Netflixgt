import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addupcomingmovies } from '../utils/movieSlice';

const UpcomingMovies = () => {
  const dispatch = useDispatch();

  const newMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc",
        API_OPTIONS
      );
      const json = await response.json();
      console.log(json.results); // Just for debugging
      dispatch(addupcomingmovies(json.results));
    } catch (error) {
      console.log("Error fetching upcoming movies:", error);
    }
  };

  useEffect(() => {
    newMovies();
  }, []);

  return null; // Or return a JSX block to render the movies later
};

export default UpcomingMovies;
