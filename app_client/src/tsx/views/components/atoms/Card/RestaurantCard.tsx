import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { ApiURL } from "../../../../utils/const";
import { Loading } from "../Loading/Loading";
import { RstListType } from "../../../../../ts/type/api/restaurant";

export const RestaurantCard = (): JSX.Element => {
  const [rsts, setRst] = useState<RstListType>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(true);

  useEffect(() => {
    const getRst = async () => {
      const result = await axios(`${ApiURL}/v1/restaurants/get/list`)
        .then((res) => {
          setRst(res.data);
        })
        .then(() => {
          setIsLoaded(false);
        })
        .catch((err) => console.log(err));
    };
    getRst();
  }, []);

  if (isLoaded === true) {
    return <Loading />;
  } else {
    return (
      <>
        <Grid container spacing={3}>
          {rsts.map((rst) => (
            <Grid key={rst.id} item>
              <Card sx={{ margin: "16px 0px 32px 0px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={rst.image_url}
                    alt="food imgs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {rst.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {rst.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      詳細
                    </Button>
                    <Rating name="read-only" value={rst.rating} readOnly />
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
};
