import React from "react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

import img_profile from "assets/images/nelly_moon.png";

function AboutSection() {
  function stringSplitter(string) {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  }
  const typewriter = ["junior web developer", "musician", "artist", "creative person :)"];
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h2>
            Hey,
            <br />
            I'm <span className="nelly">Nelly</span>
          </h2>
                  {/* <p>
                      
            </p> */}
                           <Typewriter
            //   css={typewriter}
            options={{
              strings: typewriter,
              autoStart: true,
              loop: true,
              delay: 55,
              stringSplitter,
            }}
          />
                      {/* junior<span className="web-developer"> web developer</span>,{" "}
            <span className="musician">musician</span>,<br />
            <span className="artist">artist</span> and all around{" "}
            <span className="creative-person">creative person</span> */}
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
