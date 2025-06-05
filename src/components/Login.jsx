import React, { useState, useRef } from 'react';
import Header from './Header';
import netflx from '../assets/netflx.png';
import { checkvalidation } from '../utils/Validation';
import { auth } from './Firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [signup, setSignup] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignin = () => {
    setSignup(!signup);
    setError('');
    setName('');  // Reset name when toggling
    if (email.current) email.current.value = '';
    if (password.current) password.current.value = '';
  };

  const validateform = () => {
    const emailVal = email.current.value.trim();
    const passwordVal = password.current.value.trim();

    const message = checkvalidation(emailVal, passwordVal);
    setError(message);
    if (message) return;

    if (signup) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          const user = userCredential.user;
          // Update profile with displayName, then dispatch and navigate
          return updateProfile(user, {
            displayName: name,
            photoURL: 'https://example.com/jane-q-user/profile.jpg'
          }).then(() => {
            dispatch(addUser({ name, email: emailVal}));
            navigate('/browse');
          });
        })
        .catch((error) => {
          setError(error.code + ' ' + error.message);
        });

    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          const user = userCredential.user;
          // Fallback if displayName is missing:
        
          navigate('/browse');
        })
        .catch((error) => {
          setError(error.code + ' ' + error.message);
        });
    }
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate('/browse');
      })
      .catch((error) => {
        setError(error.code + ' ' + error.message);
      });
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="absolute inset-0">
        <img src={netflx} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 text-white p-10 rounded-lg flex flex-col gap-6 z-10 w-96"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-4xl font-bold text-center">
          {signup ? 'Sign Up' : 'Sign In'}
        </h1>

        {signup && (
          <input
            type="text"
            placeholder="Enter your name"
            className="p-3 bg-gray-700 rounded focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="text"
          placeholder="Email"
          className="p-3 bg-gray-700 rounded focus:outline-none"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 bg-gray-700 rounded focus:outline-none"
          ref={password}
        />

        <p className="text-red-600 text-sm text-center">{error}</p>

        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold"
          onClick={validateform}
        >
          {signup ? 'Sign Up' : 'Sign In'}
        </button>

        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
          onClick={handleGoogleSignIn}
        >
          Continue with Google
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
