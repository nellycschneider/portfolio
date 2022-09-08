import React from "react";
import { SkillsData } from "../components/data/skills";

function SkillsSection() {
  const data = SkillsData;
  return (
    <div className="skills">
      <label className="section-title experience">Experience</label>
      {data.map((skills) => {
        return (
          <>
            <label className="title">{skills.title}</label>
            <div className="skills-row">
              <div className="all-skills">
                {skills.skills.map((tag) => {
                  return <label className="all-skills-2">{tag}</label>;
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default SkillsSection;
