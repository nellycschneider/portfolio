import React, { useState } from "react";
import { Link } from "gatsby";

import WebHeader from "components/WebHeader";
import MobileHeader from "components/MobileHeader";

import img_squiggle from "../assets/images/squiggles.png";
import openMenu from "../assets/images/icons/menu.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={img_squiggle} alt="squiggly line" />
        </Link>
      </div>
      <div className="menu">
        <div className="web-menu">
          <WebHeader />
        </div>
        <div className="mobile-menu">
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <img src={openMenu} alt="squiggly line" />
            {isOpen && <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen}/>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
