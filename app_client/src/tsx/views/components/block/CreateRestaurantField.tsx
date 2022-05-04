import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import GenreTags from "../../components/atoms/CustomizedHook";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SubmitButton from "../../components/atoms/button/SubmitButton";

const PageTitle = "レストランの登録";

const useStyles = makeStyles((theme) => ({
  typography: {
    marginTop: "10px",
  },
  grid: {},
  address: {
    marginTop: "10px",
  },
  restaurantTextfield: {
    display: "block",
    marginTop: "10px",
    marginBottom: "10px",
    width: "50%",
  },
  multiTextfield: {
    marginTop: "20px",
  },
}));

const CreateRestaurantField = () => {
  const classes = useStyles();

  const [restaurantName, setRestaurantName] = useState("");
  const [description, setDescription] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [address, setAddress] = useState("");

  const submitRestaurant = (e: any) => {
    e.preventDefault();

    axios
      .post(process.env.REACT_APP_DEV_API_URL + "/v1/restaurants/create", {
        headers: {
          "Content-Type": "application/json",
        },
        name: restaurantName,
        description: description,
        zip_code: Number(zipCode),
        address: address,
      })
      .then((res) => {
        console.log(res);
        setRestaurantName("");
        setDescription("");
        setZipCode(0);
        setAddress("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeName = (e: any) => {
    setRestaurantName(e.target.value);
  };
  const handleChangeDescription = (e: any) => {
    setDescription(e.target.value);
  };
  const handleChangeZipCode = (e: any) => {
    setZipCode(e.target.value);
    console.log(typeof e.target.value);
  };
  const handleChangeAddress = (e: any) => {
    setAddress(e.target.value);
    console.log(typeof e.target.value);
  };

  return (
    <>
      <Typography variant="h3" align="center" className={classes.typography}>
        {PageTitle}
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={6} md={8}>
          <form onSubmit={submitRestaurant}>
            <Grid item md={12}>
              <TextField
                id="filled-password-input"
                className={classes.restaurantTextfield}
                label="レストラン名*"
                type="text"
                autoComplete=""
                variant="filled"
                value={restaurantName}
                onChange={handleChangeName}
              />
            </Grid>

            <TextField
              id="filled-basic"
              label="郵便番号*"
              inputProps={{ type: 'number'}}
              variant="filled"
              value={zipCode}
              onChange={handleChangeZipCode}
            />

            <TextField
              id="filled-password-input"
              className={classes.address}
              label="住所*"
              type="text"
              autoComplete=""
              variant="filled"
              fullWidth
              value={address}
              onChange={handleChangeAddress}
            />

            <TextField
              id="filled-multiline-static"
              className={classes.multiTextfield}
              label="レストランの説明"
              multiline
              rows={4}
              variant="filled"
              value={description}
              onChange={handleChangeDescription}
              fullWidth
            />

            {/* 値をいれれる様にする必要があり */}
            <GenreTags />
            <SubmitButton />
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateRestaurantField;
