import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submitButton: {
    marginTop: "10px"
  }
}));

const SubmitButton = () => {
  const classes = useStyles();

  return (
    <Button
      className={classes.submitButton}
      variant="contained"
      startIcon={<AddIcon />}
      type="submit"
    >
      Submit
    </Button> 
  );
}

export default SubmitButton;