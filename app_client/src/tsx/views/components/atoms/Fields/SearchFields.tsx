import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const SearchField = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="filled"
        inputProps={{ style: { color: "whtie" } }}
        InputLabelProps={{ style: { color: "white" } }}
      />
    </Box>
  );
};
