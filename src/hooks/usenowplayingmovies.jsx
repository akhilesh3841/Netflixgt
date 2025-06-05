import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addmovies } from '../utils/movieSlice';
const usenowplayingmovies = () => {

    const dispatch=useDispatch();
      useEffect(() => {
        // Search a default movie on load for demonstration
        searchMovieTMDB("Avengers");
      }, []);
    
      const searchMovieTMDB = async (movie) => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3`,
            API_OPTIONS
          );
          const json = await response.json();
          // console.log(json.results); // Handle or display this data as needed
          dispatch(addmovies(json.results));
        } catch (err) {
          console.error("Failed to fetch movies:", err);
        }
      };

}

export default usenowplayingmovies