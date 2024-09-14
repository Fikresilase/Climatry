import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          {/*<img src="./logo2.png" alt="" width={120} /> */}
          <h1>climatery</h1>
          <span className="secondaryText">
            for a better world.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="secondaryText">1000 Addis Ababa, Ethiopia</span>
          <div className="flexCenter f-menu">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
