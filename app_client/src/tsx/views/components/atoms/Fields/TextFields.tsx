import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const BaseTextFeild = (props: any) => {
  const { id, handler, value, labelName, autoComplete, type } = props;

  return (
    <>
      <TextField
        id={id}
        label={labelName}
        type={type}
        autoComplete={autoComplete}
        variant="filled"
        value={value}
        onChange={handler}
      />
    </>
  );
};
