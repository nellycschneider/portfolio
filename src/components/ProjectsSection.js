import React from "react";

import { ProjectData } from "../components/data/projects";
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  const data = ProjectData;
  return (
    <div className="projects">
      <label className="section-title projects">Projects</label>
          <div>
              {data.map(project => {
                  return (
                      <ProjectCard project={project}/>
                  )
              })}
      </div>
    </div>
  );
}

export default ProjectsSection;
