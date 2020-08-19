import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
const Footer = ()=> {

    return (
        <footer>
            <p>© 2020 PLATONIC  | <Link to='/about'>About </Link> | <Link to="/Friends">Friends List</Link> | <Link to="/Profile">Profile</Link> | <Link to="/Messages">Messages</Link>  |  <audio src="https://res.cloudinary.com/dz449ufvx/video/upload/v1597855033/Platonic/What_About_Your_Friends_nq9oxf.mp3" controls>
      <p>Your Browser doesn't support this </p>
  </audio></p>
            
        </footer>
    )
}
export default Footer;