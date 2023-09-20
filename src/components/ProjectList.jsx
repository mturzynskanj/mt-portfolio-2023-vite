import React, { useState } from "react";
import ProjectItem from "./ProjectItem.jsx";
import projects from "../data/portfolio.js";

import _ from "lodash";

const ProjectList = () => {
  const [activeProject, setActiveProject] = useState(0);
  return (
    <div id="projects">
      <ul id="project_list">
        {_.map(projects, (project, index) => {
          return (
            <ProjectItem
              key={project.name}
              {...project}
              setActiveProject={setActiveProject}
              activeProject={activeProject}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
