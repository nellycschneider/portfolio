import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {/* only renders if there's a demo/gh link */}
          {project.demo && (
            <a
              className="project-link"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="link-button">Website</div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github} target="_blank">
              <div className="link-button">Github </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-links">
          {project.button && (
              <a className="link-button"href={project.button} target="_blank">
                Digital art
              </a>
          )}
          {project.shopLink && (
              <a className="link-button" href={project.shopLink} target="_blank">
                Redbubble shop
              </a>
          )}
        </div>
        {project.tags && (
          <div className="project-tags">
            {project.tags.map((tag) => {
              return <label className="tag">{tag}</label>;
            })}
          </div>
        )}
      </div>
      {project.image && <img src={project.image} className="project-image" />}
    </div>
  );
}

export default ProjectCard;
