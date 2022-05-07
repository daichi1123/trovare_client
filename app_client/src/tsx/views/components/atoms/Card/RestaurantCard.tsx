import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import { RstPromotions } from "../../../../../TestText";

export const RestaurantCard = (): JSX.Element => {
  const [value, setValue] = React.useState<number | null>(0);
  console.log(setValue);

  return (
    <>
      <Grid container spacing={3}>
        {RstPromotions.map((RstPromotion) => (
          <Grid item xs={6}>
            <Card sx={{ margin: "16px 0px 32px 0px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={RstPromotion.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {RstPromotion.rstName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {RstPromotion.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Grid item xs={3}>
                  <Button size="small" color="primary">
                    詳細
                  </Button>
                </Grid>
                <Grid item xs={5}></Grid>
                <Grid item xs={4}>
                  <Rating
                    name="read-only"
                    value={RstPromotion.rating}
                    readOnly
                  />
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
