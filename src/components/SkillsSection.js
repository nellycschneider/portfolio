import React from "react";
import { SkillsData } from "../components/data/skills";

function SkillsSection() {
  const data = SkillsData;
  return (
      <div className="skills">
      <label className="section-title">Experience</label>
      {data.map((skills) => {
        return (
          <>
            <label className="title">{skills.title}</label>
            <div className="all-skills">
              {skills.skills.map((tag) => {
                return <label className="all-skills-2">{tag}</label>;
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default SkillsSection;
