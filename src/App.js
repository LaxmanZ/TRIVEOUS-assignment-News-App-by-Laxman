import React from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
