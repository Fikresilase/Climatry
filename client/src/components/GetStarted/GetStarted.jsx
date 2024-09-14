import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Collaborate on Climatery</span>
          <span className="secondaryText">
            feel free to contribute on this impactful
            <br />
            and exciting project.
          </span>
          <button className="button" href>
            <a href="mailto:fikresilase.wondmeneh@aastustudent.edu.et">Contact me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
