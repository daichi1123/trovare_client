import * as React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@material-ui/core/styles";
import { PrimaryButton } from "./PrimaryButton";

const useStyles = makeStyles((theme) => ({
  submitButton: {
    marginTop: "10px",
  },
}));

const SubmitButton = () => {
  const classes = useStyles();
  console.log(<AddIcon />)

  return (
    <>
    <PrimaryButton
      icon={<AddIcon />}
      type="submit"
    >
      Submit
    </PrimaryButton>
    </>
  );
};

export default SubmitButton;
