import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
import { SearchField } from "../atoms/Fields/SearchFields";

export const SearchCard = () => {
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ padding: "50px" }}
      >
        <Card
          sx={{ display: "flex" }}
          style={{
            padding: "24px",
            backgroundColor: "rgb(53, 118, 203)",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                近くの人気なお店を探せる
              </Typography>
              <Typography variant="subtitle1" component="div">
                仕事の昼休みにぴったりのお店を探せる
              </Typography>
            </CardContent>
          </Box>
          <SearchField />
        </Card>
      </Grid>
    </>
  );
};
