import React, { useState, useEffect } from "react";
import useImage from "../customHooks/useImage";
import HiddenContent from "./HiddenContent";

const ProjectItem = ({
  setActiveProject,
  activeProject,
  information,
  id,
  name,
  url,
  banner,
}) => {
  const [isChildVisible, setIsChildVisible] = useState(false);
  const handleClick = (event) => {
    event.stopPropagation();
    setIsChildVisible((isChildVisible) => !isChildVisible);
  };

  return (
    <li className="item">
      <ul
        className={"collapsed " + (activeProject === id ? " in" : "")}
        onClick={() => setActiveProject(id)}
      >
        <li className="title effect-opacity">{name}</li>
        <li className="body">
          <HiddenContent isChildVisible={isChildVisible}>
            <div className="details">
              <p>
                <span>Website:</span>
                <a href={url} target="_blank">
                  {url}
                </a>
              </p>
              <p>
                <span>My Role:</span>
                {information}
              </p>
            </div>
          </HiddenContent>
          <div className="controls control_off">
            {/* <a href="javascript:void(0)" onClick={handleClick}>
              {isChildVisible ? "Hide Details" : "Show Details"}
            </a> */}
            <button onClick={handleClick}>
              {" "}
              {isChildVisible ? "Hide Details" : "Show Details"}
            </button>
          </div>
          <img src={`../src/images/${banner}`}  />
        </li>
      </ul>
    </li>
  );
};

export default ProjectItem;
