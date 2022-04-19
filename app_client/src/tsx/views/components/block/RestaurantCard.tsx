import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

import Rating from '@mui/material/Rating';

import Steak from "../../../../img/steak.jpeg"

export default function RestaurantCard() {
  const [value, setValue] = React.useState<number | null>(2);
  console.log(setValue)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Steak}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ステーキ
          </Typography>
          <Typography variant="body2" color="text.secondary">
            テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキスト
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container>
          <Grid item xs={3}>
            <Button size="small" color="primary">
              詳細
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={5}>
            <Rating name="read-only" value={value} readOnly />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
