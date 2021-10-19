import React from "react";
import { Link } from "gatsby";

import closeMenu from "../assets/images/icons/close.png";


function MobileHeader({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <img src={closeMenu} alt="close menu" />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <Link to="#projects">Projects</Link>
        </div>
        {/* <div className="mobile-option">
          <Link href="#work">Work</Link>
        </div> */}
        <div className="mobile-option">
          <Link to="#skills">Experience</Link>{" "}
        </div>
        <div className="mobile-option">
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
