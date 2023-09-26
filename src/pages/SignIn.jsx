import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {toast} from 'react-toastify'
import CustomInput from "../sharedComponents/customInput";
import {
  getAuth,
 
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [state, setState] = useState({ email: "", password: "" });
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );

      if (userCredential.user) {
        navigate("/profile");
      }
    } catch (e) {
      console.log("error when sign in ", e);
      toast.error('Error while trying to sign in')
    }
  };

  return (
    <section className="page">
      <h2>Sign In</h2>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xl={12}>
            <CustomInput
              label="Email"
              size='medium'
              name="email"
              handleChange={handleChange}
              required={true}
            />
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <CustomInput
              label="Password"
              size='medium'
              name="password"
              handleChange={handleChange}
              required={true}
              type="password"
            />
            <p className="helperTxt alignRight"><Link to='/forgotPassword'>Forgot Password</Link></p>
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <button>Sign In</button>
          </Grid>
        </Grid>
        <span className="helperTxt alignRight">You need to Sign In to view Profile page</span>
      </form>
    </section>
  );
};

export default SignIn;
