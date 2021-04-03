import React from 'react'
import Navbar from './Navbar';
function Header() {
    return (
        <React.Fragment>
        <div className="wrapper row0">
        <div id="topbar" className="hoc clear">
          <div className="fl_left">

            <ul className="nospace">
              <li><i className="fas fa-phone rgtspace-5"></i> +00 (123) 456 7890</li>
              <li><i className="far fa-envelope rgtspace-5"></i> info@domain.com</li>
            </ul>
          </div>
          <div className="fl_right">
            <ul className="nospace">
              <li><a href="index.html"><i className="fas fa-home"></i></a></li>
              <li><a href="#" title="Help Centre"><i className="far fa-life-ring"></i></a></li>
              <li><a href="#" title="Login"><i className="fas fa-sign-in-alt"></i></a></li>
              <li><a href="#" title="Sign Up"><i className="fas fa-edit"></i></a></li>
              <li id="searchform">
                <div>
                  <form action="#" method="post">
                    <fieldset>
                      <legend>Quick Search:</legend>
                      <input type="text" placeholder="Enter search term&hellip;" />
                      <button type="submit"><i className="fas fa-search"></i></button>
                    </fieldset>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
{/* <Navbar /> */}

    </React.Fragment>
    )
}

export default Header
