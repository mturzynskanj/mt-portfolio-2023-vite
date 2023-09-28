import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

const CustomInput = ({
  label,
  handleChange,
  name,
  required = true,
  type,
  size
}) => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    if (type === "file") {
      console.log('e.target.file', e.target.files[0])
      debugger
      handleChange(e.target.files[0], name);
      console.log('filename', e.target.files[0].name)
      setValue(e.target.files[0].name)
    } else {
      handleChange(e.target.value, name);
      setValue(e.target.value)
    }
  };

  return (
    <TextField
      type={type}
      onChange={onChange}
      required={required ? required : false}
      label={label}
      size={size}
      value={value}
    />
  );
};

export default CustomInput;
