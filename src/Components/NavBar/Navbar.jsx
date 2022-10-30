import React from "react";
// import {useNavigate} from 'react-router-dom'

let Navbar = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <header>
          <div className="menu">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="logo">
            <p>
              Movies <span>Land</span>
            </p>
          </div>

          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Country</a>
              </li>
              <li>
                <a href="/">Movies</a>
              </li>
              <li>
                <a href="/">Tv Shows</a>
              </li>
              <li>
                <a href="/">Top IMDB</a>
              </li>
            </ul>
          </nav>

          <div className="login">
            <a href="#">
              <i className="fa-regular fa-user"></i>Login
            </a>
          </div>
        </header>
        <div className="hero">
          <p>Find Movies, TV Shows and more</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
