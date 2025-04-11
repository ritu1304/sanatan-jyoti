import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">SanatanJyoti</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/anushthan">Anushthan</Link>
        <Link to="/buisness-anushthan">Buisnesss Anushthan</Link>
        <Link to="/kundli">Kundli</Link>
      </nav>
    </header>
  );
};

export default Header;
