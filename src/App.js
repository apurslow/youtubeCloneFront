import React, {useContext} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"; 

import "./App.css";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={ user ? <HomePage /> : <Navigate to="/login" /> }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
