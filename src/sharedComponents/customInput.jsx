import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

const CustomInput = ({ label, handleChange, name , required , type, size}) => {
  const onChange = e => {
    handleChange(e.target.value, name);
  };

  return <TextField type = {type} onChange={onChange} required={required? required : ''} label={label} size={size} />;
};

export default CustomInput;
