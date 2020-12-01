import React from 'react'



function Navbar() {
  return (
    <div className="navbar">
    <div className="navbar__left">
        
        <div className="navbar__logo__text">selection</div>
    </div> 
        <div className="navbar__right">
        
            <div className="navbar__right__item navbar__border">
                Features
            </div>
            <div className="navbar__right__item navbar__border">
               Why Selection
            </div>
            <div className="navbar__right__item navbar__border">
              Pricing
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
