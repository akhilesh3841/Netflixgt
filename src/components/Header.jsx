import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from "../assets/logo.png";

const Header = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => navigate('/login'))
      .catch((error) => {
        console.error('Logout error:', error);
        navigate('/error');
      });
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 bg-gradient-to-b from-black to-transparent absolute w-full z-20">
      <img
        className="w-[120px] sm:w-[140px] h-auto cursor-pointer"
        src={logo}
        alt="Logo"
        onClick={() => navigate("/browse")}
      />
      {
        user && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-2 sm:mt-0 rounded text-sm font-medium shadow"
          >
            Logout
          </button>
        )
      }
    </div>
  );
};

export default Header;
