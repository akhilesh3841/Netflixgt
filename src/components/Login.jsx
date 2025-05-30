import React, { useState } from 'react';
import Header from './Header';
import netflx from '../assets/netflx.png';

const Login = () => {
  const [signup, setSignup] = useState(false);

  // Correct toggle function
  const toggleSignin = () => {
    setSignup(!signup);
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={netflx}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Form */}
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-85 text-white p-10 rounded-lg flex flex-col gap-6 z-10 w-96">
        <h1 className="text-4xl font-bold text-center">
          {signup ? 'Sign Up' : 'Sign In'}
        </h1>

        {/* Name input only in sign-up mode */}
        {signup && (
          <input
            type="text"
            placeholder="Enter your name"
            className="p-3 bg-gray-700 rounded focus:outline-none"
          />
        )}

        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-3 bg-gray-700 rounded focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 bg-gray-700 rounded focus:outline-none"
        />
        <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold">
          {signup ? 'Sign Up' : 'Sign In'}
        </button>

        <p
          className="py-5 text-center cursor-pointer hover:underline"
          onClick={toggleSignin}
        >
          {signup ? 'Already have an account? Sign In' : 'New to Netflix? Sign Up'}
        </p>
      </form>
    </div>
  );
};

export default Login;
