import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";

import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    marginTop: "10px",
  },
}));

export const SecondaryButton = (props: any) => {
  console.log(props)
  const classes = useStyles();
  const { children, icon, type } = props;

  return (
    <Button
      className={classes.buttonStyle}
      variant="contained"
      startIcon={icon}
      type={type}
    >
      {children}
    </Button>
  );
};
