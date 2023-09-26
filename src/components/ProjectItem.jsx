import React, { useState, useEffect } from "react";
import HiddenContent from "./HiddenContent";
import FR_NY from '../images/FR_NY.png'
import blink from '../images/blink.png'
import celina from '../images/celina.jpg'
import hertz from '../images/hertz.png'
import LAarchitect from '../images/LAarchitect.png'
import iinLogo from '../images/iinLogo.png'
import eqportfolio from '../images/eqportfolio.png'
import equinox from '../images/equinox.png'
import qblog from '../images/qblog.png'
import RoyalBankOfCanada from '../images/RoyalBankOfCanada.png'
import WebmdTvindex from '../images/webmdTvindex.png'
import webmdQuiz from '../images/webmdQuiz.png'
import WebMDRR from '../images/WebMDRR.png'
import shareIIN from '../images/shareIIN.png'
import rc_portfolio from '../images/rc_portfolio.png'

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
          <img src={LAarchitect}  />
        </li>
      </ul>
    </li>
  );
};

export default ProjectItem;
