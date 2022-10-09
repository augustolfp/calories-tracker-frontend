import '../assets/styles/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import UserContext from '../contexts/UserContext';
import SignInPage from './SignInPage/SignInPage';
import SignUpPage from './SignUpPage/SignUpPage';
import HomePage from './HomePage/HomePage';
import DayDetailsPage from './DayDetailsPage/DayDetailsPage';

export default function App() {
  // eslint-disable-next-line no-undef
  const API_URL = process.env.REACT_APP_API_URL;
  const [token, setToken] = React.useState({});
  const [userData, setUserData] = React.useState({});
  return (
    <UserContext.Provider value={{ token, setToken, userData, setUserData, API_URL }}>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/day/:id" element={<DayDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
