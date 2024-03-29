import React from "react";
import SocialMediaSection from "./SocialMediaSection";

import resume from "../assets/Nelly_Schneider_Frontend_Developer_Resume.pdf";

function ContactSection() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <p>Get in touch with me!</p>
          <div className="contact-bottom">
            <SocialMediaSection />
          </div>
          <a
            className="download"
            download="Nelly_Schneider_Frontend_Developer_Resume"
            href={resume}
          >
            Download resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
