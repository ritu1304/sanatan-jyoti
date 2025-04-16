import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import AnushthanPage from "./Anushthan/Anushthan";
import BusinessAnushthan from "./Anushthan/BuisnessAnushthan";
import SaturnChant from "./Anushthan/SaturnChant";

// ...other pages

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anushthan" element={<AnushthanPage />} />
        <Route path="/buisness-anushthan" element={<BusinessAnushthan />} />
        <Route path="/saturn-chant" element={<SaturnChant />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
