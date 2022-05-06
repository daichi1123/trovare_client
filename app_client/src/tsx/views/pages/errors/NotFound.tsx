import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Header } from "../../components/block/Header";

export const NotFound = () => {
  return (
    <>
      <Header />
      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        style={{ margin: "20px" }}
      >
        <Grid item xs={12}>
          <Typography variant="h1" fontWeight={900} color="primary">
            404 Not Found
          </Typography>
        </Grid>

        <Grid item xs={6} sm={6}>
          <Button variant="contained" color="success">
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Top
            </a>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
