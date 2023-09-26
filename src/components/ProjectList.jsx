import React, { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebaseConfiguration";
import CircularProgress from "@mui/material/CircularProgress";
import ProjectItem from "./ProjectItem.jsx";
import _ from "lodash";

const ProjectList = () => {
  const [projects, setProjects] = useState(null);
  const [activeProject, setActiveProject] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, "projects");
        // set query
        const q = query(listingsRef, orderBy("id", "asc"));
        // execute query
        const querySnap = await getDocs(q);
        let projects = [];
        querySnap.forEach((doc) => {
          return projects.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setProjects(projects);
        setLoading(false);
      } catch (e) {
        console.log("error is", e);
      }
    };
    fetchListings();
  }, []);

  if (loading) {
    return (
      <div className="flexContainer">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div id="projects">
      <ul id="project_list">
        {_.map(projects, ({ data, id }) => {
          return (
            <ProjectItem
              key={id}
              {...data}
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
