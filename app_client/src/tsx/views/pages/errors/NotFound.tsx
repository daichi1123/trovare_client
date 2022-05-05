import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export const NotFound = () => {
  return (
    <>
      <Grid container spacing={4} direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h1" fontWeight={900} color="primary">
            404 Not Found
          </Typography>
        </Grid>

        <Grid item xs={6} sm={6}>
          <Button variant="contained" color="success">
            Top
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button variant="contained" color="inherit">
            戻る
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
