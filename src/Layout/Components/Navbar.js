import React from 'react'
import {Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
             <div className="wrapper row1">
      <header id="header" className="hoc clear">
        <div id="logo" className="fl_left">
          <h1><Link to="/home">LIghtingLogistics</Link></h1>
        </div>
        <nav id="mainav" className="fl_right">
          <ul className="clear">
            <li class="active"><Link to="/home">Home</Link></li>


            <li><a href="#">Gallery</a></li>
          </ul>
        </nav>
      </header>
    </div>
        </div>
    )
}

export default Navbar
