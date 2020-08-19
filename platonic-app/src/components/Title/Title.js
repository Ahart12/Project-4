import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './Title.css';


function Title() {
  return (
    <div className="Title">
  <h1 class="animate__animated animate__swing">P<span classname="red">🔴</span>L<span classname="blue">🔵</span>A<span classname="yellow">🟡</span>T<span classname="red">🔴</span>O<span classname="yellow">🟡</span>N<span classname="blue">🔵</span>I<span classname="red">🔴</span>C</h1>
  <button><Link to="/Login">Enter</Link></button>
    </div>
  );
}

export default Title;