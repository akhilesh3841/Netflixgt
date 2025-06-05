import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, name: displayName }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, [dispatch]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Body;
