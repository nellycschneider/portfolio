import React from "react";

import img_profile from "assets/images/nelly_moon.png";

function AboutSection() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h2>Hey,<br />I'm <span className="nelly">Nelly</span></h2>
          <p>
            a junior<span className="web-developer" > web developer</span>, <span className="musician">musician</span>,<br/><span className="artist">artist</span> and all around <span className="creative-person">creative
            person</span>
          </p>
        </div>
        <div className="about-photo">
          <img src={img_profile} alt="creepy digital art profile" />
        </div>
      </div>
          {/* <div className="about-bottom">
              <SocialMediaSection/>
      </div> */}
    </div>
  );
}

export default AboutSection;
