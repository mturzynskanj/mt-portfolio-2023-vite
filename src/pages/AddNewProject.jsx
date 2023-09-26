import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CircularProgress from "@mui/material/CircularProgress";


const AddNewProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    visible: true,
    url: "",
    banner: "",
    information: "",
  });
  const [loading, setLoading] = useState(true)

  let auth = getAuth();
  let navigate = useNavigate();
  let isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
        onAuthStateChanged(auth, user => {
            if(user) {
                setFormData({...formData, userRef: user.uid})
            } else {
                navigate('/signIn')
            }
        })
    }
    return () => {
      isMounted = false;
    };
  }, [isMounted]);

  if(loading) {
    return <div className="flexContainer"><CircularProgress /></div>
  }

  return (
    <section className="page">
      <h2>Add New Project</h2>
    </section>
  );
};

export default AddNewProject;
