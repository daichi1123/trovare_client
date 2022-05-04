import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    marginTop: "10px",
  },
}));

export const PrimaryButton = (props: any) => {
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
