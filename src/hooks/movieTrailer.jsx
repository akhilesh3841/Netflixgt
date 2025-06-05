import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addtrailer } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const movieTrailer = (movieid) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}/videos`,
        API_OPTIONS
      );
      const data = await response.json();

      const trailers = data.results.filter(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      );

    //   console.log(trailers); // for debugging

      if (trailers.length > 0) {
        dispatch(addtrailer(trailers[0].key)); // dispatch only the video key
      }
    } catch (err) {
      console.error('Failed to fetch trailer:', err);
    }
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default movieTrailer;
