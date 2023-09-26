import React, { useState, useEffect } from "react";
import {toast} from 'react-toastify'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase/firebaseConfiguration";
import {setDoc, doc, serverTimestamp} from 'firebase/firestore'
import Grid from "@mui/material/Grid";
import CustomInput from "../sharedComponents/customInput";
import { createAccount } from "../firebase/firebaseAuth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [state, setState] = useState({ email: "", password: "", name: "" });
  const navigate = useNavigate();

  const handleChange = (value, name) => {
    setState((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );
      const user = userCredential.user
      console.log('inside OnSubmit  user =======>', user)
      updateProfile(auth.currentUser, {
        displayName: state.name,
      });

      const formData = {...state}
      delete formData.password
      formData.timestamp = serverTimestamp()
      await setDoc(doc(db, 'users', user.uid), formData)
    } catch (error) {
      console.log("error is", error);
      toast.error('Something went wrong with registration')
      
    }


    navigate("/");
  };

  return (
    <section className="page">
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xl={12}>
            <CustomInput
              label="Name"
              name="name"
              handleChange={handleChange}
              required={true}
            />
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <CustomInput
              label="Email"
              name="email"
              handleChange={handleChange}
              required={true}
            />
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <CustomInput
              label="Password"
              name="password"
              handleChange={handleChange}
              required={true}
              type="password"
            />
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <button>Sign Up</button>
          </Grid>
        </Grid>
        <Link to="/signIn"> Sign In instead</Link>
      </form>
    </section>
  );
};

export default SignUp;
