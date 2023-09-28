import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

const CustomTextArea = ({ label, handleChange, name , required , type, size}) => {
  const onChange = e => {
    handleChange(e.target.value, name);
  };

  return <TextField type = {type} onChange={onChange} required={required? required : false} label={label} size={size}  multiline={true} maxRows='10' />;
};

export default CustomTextArea;