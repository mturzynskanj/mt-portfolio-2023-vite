import React, { useEffect, useState } from "react"
import { getAuth } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress"
import Button from '@mui/material/Button'
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "../firebase/firebaseConfiguration"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

const Profile = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const navigate = useNavigate();
  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

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
        console.log('what are projects ======> ', projects)
        setLoading(false);
      } catch (e) {
        console.log("error is", e);
      }
    };
    fetchListings();
  }, []);
  return (
    <section
      className="page"
      style={{maxWidth: '500px'}}
    >
      <h2 className="flexContainerSb">
        Profile !!!
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      </h2>
      <section>
        
        <p className="flexContainer" style={{marginTop: '100px'}}>
          <div className='outlineBtn'>
            <Link to="/editExistingProject">Edit Exising Projects</Link>
          </div>
          <div className='outlineBtn'>
            <Link to="/addNewProject">Add New Project</Link>
          </div>
        </p>
      </section>
    </section>
  );
};

export default Profile;
