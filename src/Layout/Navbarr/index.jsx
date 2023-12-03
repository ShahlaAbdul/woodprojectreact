import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import {
//   faInstagram,
//   faFacebook,
//   faTwitter,
//   faPinterest,
// } from "@fortawesome/free-brands-svg-icons";
// library.add(fas, faInstagram, faTwitter, faPinterest);

// export { FontAwesomeIcon };

function Navbar() {
  return (
    <div className="navbar">
      <div className="heading">
        <div className="visitUs">
          <p>Visit Us</p>
          <p>Online Support</p>
        </div>
        <div className="Icons">
          {/* <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faPinterest} /> */}
        </div>
      </div>
      <div className="pages">
        <div className="nav_img">
          <img
            src="https://preview.colorlib.com/theme/woodrox/img/logo.png"
            alt=""
          />
        </div>

        <div className="pages_list">
          <ul>
            <li>
              <NavLink to={"/"} ativeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Pages</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="precise_concept"></div>
    </div>
  );
}

export default Navbar;
