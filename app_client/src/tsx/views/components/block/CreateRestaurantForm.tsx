import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import GenreTags from "../atoms/CustomizedHook";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";

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

const CreateRestaurantForm = () => {
  const zip = "郵便番号";
  const addressTitle = "住所";
  const name = "レストラン名";
  const restaurantExplain = "レストランの説明";

  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [restaurantName, setRestaurantName] = useState("");
  const [description, setDescription] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [address, setAddress] = useState("");

  const handleChangeName = (e: any) => setRestaurantName(e.target.value);
  const handleChangeDescription = (e: any) => setDescription(e.target.value);
  const handleChangeZipCode = (e: any) => setZipCode(e.target.value);
  const handleChangeAddress = (e: any) => setAddress(e.target.value);

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

  return (
    <>
      <Typography variant="h3" align="center" className={classes.typography}>
        {PageTitle}
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={6} md={8}>
          <form onSubmit={handleSubmit(submitRestaurant)}>
            {/* <form onSubmit={submitRestaurant}> */}
            <Grid item md={12}>
              <TextField
                id="restaurantName"
                {...register("restaurantName", {
                  required: true,
                  maxLength: 30,
                })}
                autoFocus
                className={classes.restaurantTextfield}
                label="レストラン名*"
                type="text"
                variant="filled"
                value={restaurantName}
                onChange={handleChangeName}
              />
              <Box>
                {errors.restaurantName &&
                  errors.restaurantName.type === "required" && (
                    <span className="error-message">
                      {name}は必須項目です。
                    </span>
                  )}
                {errors.restaurantName &&
                  errors.restaurantName.type === "maxLength" && (
                    <span className="error-message">
                      {name}は30文字以内です。
                    </span>
                  )}
              </Box>
            </Grid>
            Ï
            <TextField
              id="zipCode"
              label="郵便番号*"
              {...register("zipCode", {
                minLength: 7,
                maxLength: 7,
                required: true,
                pattern: /^[0-9]+$/,
              })}
              variant="filled"
              value={zipCode}
              onChange={handleChangeZipCode}
            />
            <Box>
              {errors.zipCode && errors.zipCode.type === "required" && (
                <span className="error-message">{zip}は必須項目です。</span>
              )}
              {errors.zipCode && errors.zipCode.type === "minLength" && (
                <span className="error-message">{zip}は7文字以内です。</span>
              )}
              {errors.zipCode && errors.zipCode.type === "maxLength" && (
                <span className="error-message">{zip}は7文字以内です。</span>
              )}
              {errors.zipCode && errors.zipCode.type === "pattern" && (
                <span className="error-message">{zip}は半角数字のみです。</span>
              )}
            </Box>
            <TextField
              id="address"
              className={classes.address}
              label="住所"
              type="text"
              {...register("address", {
                required: true,
                maxLength: 30,
              })}
              autoComplete=""
              variant="filled"
              fullWidth
              value={address}
              onChange={handleChangeAddress}
            />
            <Box>
              {errors.address && errors.address.type === "required" && (
                <span className="error-message">
                  {addressTitle}は必須項目です。
                </span>
              )}
              {errors.address && errors.address.type === "maxLength" && (
                <span className="error-message">
                  {addressTitle}は30文字以内です。
                </span>
              )}
            </Box>
            <TextField
              id="explainOfRestaurant"
              className={classes.multiTextfield}
              label="レストランの説明"
              {...register("address", {
                required: true,
                maxLength: 100,
              })}
              multiline
              rows={4}
              variant="filled"
              value={description}
              onChange={handleChangeDescription}
              fullWidth
            />
            <Box>
              {errors.explainOfRestaurant &&
                errors.explainOfRestaurant.type === "required" && (
                  <span className="error-message">
                    {restaurantExplain}は必須項目です。
                  </span>
                )}
              {errors.explainOfRestaurant &&
                errors.explainOfRestaurant.type === "maxLength" && (
                  <span className="error-message">
                    {restaurantExplain}は100文字以内です。
                  </span>
                )}
            </Box>
            <GenreTags />
            <PrimaryButton icon={<AddIcon />} type="submit">
              Submit
            </PrimaryButton>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateRestaurantForm;
