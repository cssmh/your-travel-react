// src/routes/UserRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Car from "../pages/Car";
import Signup from "../components/utils/SignUp";
import BlogDetail from "../components/blog/BlogDetail";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Hotel from '../pages/Hotel';
import HotelRoom from '../pages/HotelRoom';
import Tour from '../pages/Tour';
import Career from "../pages/Career";
import Profile from "../pages/Profile";


import TourPKG from "../pages/TourPKG";

import CarPrimary from "../pages/CarPrimary";
import CarDetail from "../pages/CarDetail";
import CarBook from "../pages/CarBook";
const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/car" element={<CarPrimary />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/room" element={<HotelRoom />} />
      <Route path="/career" element={<Career />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/car-pri" element={<Car />} />
      {/* <Route path="/car-pri" element={<CarPrimary />} /> */}
      <Route path="/car-detail" element={<CarDetail />} />
      <Route path="/car-booking" element={<CarBook />} />

      <Route path="/tour-pkg" element={<TourPKG />} />



      </Routes>
  );


};

export default UserRoutes;
