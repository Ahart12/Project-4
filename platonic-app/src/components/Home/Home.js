import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './Home.css';


function Home() {
  return (
    <div className="Home">
  <h1>Welcome to Platonic</h1>
  <img src="https://res.cloudinary.com/dz449ufvx/image/upload/c_scale,w_981/v1597739913/Platonic/duy-pham-Cecb0_8Hx-o-unsplash_llum1a.jpg"className="home-friends" alt="home-img"></img>
  <audio src="file:///Users/CheetahGuy/Downloads/What%20About%20Your%20Friends.mp3" controls>
      <p>Your Browser doesn't support this </p>
  </audio>
    </div>
  );
}

export default Home;