import { Routes, Route } from "react-router-dom";
import "./App.css";


import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"; 



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={ <HomePage /> }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
