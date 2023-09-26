import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CustomInput from "../sharedComponents/customInput";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [formData, setFormData] = useState("");

  const handleChange = (value, name) => {
    setFormData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      debugger;
      await sendPasswordResetEmail(auth, formData.email);
      toast.success("Email was sent ");
    } catch (e) {
      toast.error("Could not sent reset email");
    }
  };

  return (
    <section className="page">
      <h2>Forgot Password</h2>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xl={12}>
            <CustomInput
              label="Email"
              size="medium"
              name="email"
              handleChange={handleChange}
              required={true}
            />
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <button>Send Reset Link</button>
          </Grid>
        </Grid>
        <p className='alignRight'>
            <Link to="/signIn">Sign In</Link>
          </p>
      </form>
    </section>
  );
};

export default ForgotPassword;
