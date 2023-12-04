import React from 'react';
import './style.css'

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="aboutme">
          <h2> ABOUT ME</h2>

          <div className="aboutmetext">
            <p>
              Do you want to be even more successful? Learn to love learning and
              growth. The more effort you put into improving your skills,
            </p>
          </div>
          <p>
            Copyright ©2023 All rights reserved | This template is made with by{" "}
            <br />
            <span>
              {" "}
              <a href="https://colorlib.com/">Colorlib</a>
            </span>
          </p>
        </div>
        <div className="aboutme">
          <h2>NEWSLETTER</h2>
          <p>Stay updated with our latest trends</p>
          <div className="form">
            <input type="text" placeholder="enter email adress" />
            <button className="submit">
              <i class="fa-solid fa-right-long"></i>
            </button>
          </div>
        </div>
        <div className=" aboutme">
          <h2>FOLLOW ME</h2>
          <p>let us be social</p>
          <div className="followMeIcons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
