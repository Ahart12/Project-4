import React from "react";
import "./MobileNav.css";
import { Link } from "react-router-dom";

const MobileNav = ({ handleClick, open }) => {
  return open ? (
    <div className="mobile-nav">
      <h3 onClick={handleClick} className="exit">
        X
      </h3>
      <Link to="/Home" onClick={handleClick}>
        Home
      </Link>
      <Link to="/FriendsList" onClick={handleClick}>
        Friends
      </Link>
      <Link to="/Profile" onClick={handleClick}>
        Profiles
      </Link>
      <Link to="/Favorites" onClick={handleClick}>
        Favorites
      </Link>
      <Link to="/Messages" onClick={handleClick}>
        
      </Link>
    </div>
  ) : (
    <div className="hamburger" onClick={handleClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MobileNav;