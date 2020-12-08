import React from 'react'



function Navbar() {
  return (
    <div className="navbar">
    <div className="navbar__left">
        

          <h1 className="frame__title">Ishan Sengupta</h1>
          <p className="frame__tagline">Front-end experimentation</p>

    </div> 
        <div className="navbar__right">
        <a className="navbar__right__item navbar__border"
        
        href="https://www.dropbox.com/s/wchtpctilaxujfv/ISHAN_UPDATED_RESUME.pdf?dl=0">
            Resume
          </a>
          
            <div className="navbar__right__item navbar__border">
              Random
            </div>
            <div className="navbar__right__item navbar__border">
             Help
            </div>
            <div className="navbar__right__item">
             Blog
            </div>
            <button className="navbar__button"> Sign up</button>
        </div> 
    </div>
  );
}

export default Navbar;
