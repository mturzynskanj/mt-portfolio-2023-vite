import React from "react";
import { NavLink } from "react-router-dom";
// import {auth} from 'firebase/auth'

const LandingPage = () => {
  return (
    <section className="page">
      <div className="flex-container">
        <h2>Better, Faster, Cleaner Code </h2>
      </div>
      <section className="spinning-nav">
        <div className="spinner-block">
          <div className="icon-wrap">
            <NavLink className="effect-opacity " to="/aboutThisSite">
              <div className="effect-spin">
                <i className="fa fa-thumb-tack"></i>
              </div>
              <div className="md-txt">
                {" "}
                About this site <i className="fa fa-caret-right"></i>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="spinner-block">
          <div className="icon-wrap">
            <NavLink className="effect-opacity" to="/aboutMe">
              <a className="effect-opacity effect-spin" href="aboutMe">
                <i className="fa fa-user"></i>
              </a>
              <div className="md-txt">
                About Me <i className="fa fa-caret-right"></i>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="spinner-block">
          <div className="icon-wrap">
            <NavLink className="effect-opacity" to="/resume">
              <a className="effect-opacity effect-spin" href="myResume">
                <i className="fa fa-thumbs-o-up"></i>
              </a>
              <div className="md-txt">
                {" "}
                My Resume <i className="fa fa-caret-right"></i>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="spinner-block">
          <div className="icon-wrap">
            <NavLink className="effect-opacity" to="/portfolio">
              <a className="effect-opacity effect-spin" href="portfolio">
                <i className="fa fa-gears"></i>
              </a>
              <div className="md-txt">
                {" "}
                My Portfolio <i className="fa fa-caret-right"></i>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
