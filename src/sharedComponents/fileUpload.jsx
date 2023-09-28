import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

const ImageUpload = ({
  label,
  handleChange,
  name,
  required = true,
  type,
  size,
}) => {
  const onChange = (e) => {
    handleChange(e.target.files, name);
  };

  return (
    <TextField
      type={type}
      onChange={onChange}
      required={required ? required : false}
      label={label}
      size={size}
      inputProps={{
        multiple: true,
      }}
    />
  );
};

export default ImageUpload;
