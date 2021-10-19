import React from "react";
import { Link } from "gatsby";

function WebHeader() {
  return (
    <div className="web">
      {/* <div className="web-options">
        <Link to="#projects">Projects</Link>
      </div> */}
      <div className="web-options">
        <Link to="#skills">Experience</Link>{" "}
      </div>
      {/* <div className="web-options">
        <Link href="#work">Work</Link>
      </div> */}
      <div className="web-options">
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
}

export default WebHeader;
