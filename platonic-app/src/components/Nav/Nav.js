import React, { useState } from "react";
import "./Nav.css";
import MobileNav from "../MobileNav/MobileNav";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, isOpen] = useState(false);
  const handleClick = () => {
    isOpen(!open);
    console.log(open);
  };

  return (
    <div className="nav">
        
        {/* {(matches) => { */}
        
            <div className="desktop-nav">
         
            <Link to="/Home">Home</Link>
            <Link to="/About" >About</Link>
              <Link to="/FriendsList">Friends</Link>
              <Link to="/Profile">Profile</Link>
              <Link to="/Messages">Messages</Link>
            </div>
         
            <MobileNav handleClick={handleClick} open={open} />
        
        {/* }} */}
     
    </div>
  );
};

export default Nav;