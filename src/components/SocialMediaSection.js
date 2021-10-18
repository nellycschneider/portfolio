import React from "react";
import { SocialData } from "../components/data/social";

function SocialMediaSection() {
  const data = SocialData;
  return (
    <div className="social">
      {data.map((item) => {
        return (
          <a href={item.link} target="_blank">
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon"/>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialMediaSection;
