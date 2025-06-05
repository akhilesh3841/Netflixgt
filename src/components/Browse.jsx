import React from 'react';
import Header from './Header';
import usenowplayingmovies from '../hooks/usenowplayingmovies';
import MainContainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import mostpopular from "../hooks/trendingmovies"
import toprated from "../hooks/toprated"
import upcomingmovies from '../hooks/upcomingmovies';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Browse = () => {


  const navigate=useNavigate();

  const people=useSelector((store)=>store.user);
  console.log(people)
  // Custom hook to fetch now playing movies
  usenowplayingmovies();
  mostpopular();
  toprated();
  upcomingmovies();

  useEffect(()=>{
    if(!people){
     navigate("/login") 
    }
  })
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-sans">
      {/* Header */}
      <Header />

      {/* Main Video Container */}
      <MainContainer />

      {/* Secondary Movie Rows */}
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
