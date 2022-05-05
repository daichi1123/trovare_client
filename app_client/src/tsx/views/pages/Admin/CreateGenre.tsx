import axios from "axios";
import * as React from "react";
import { useState } from "react";
import SubmitButton from "../../components/atoms/button/SubmitButton";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";

const CreateGenre = () => {
  const [genre, setGenre] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setGenre(e.target.value);
    console.log(e);
  };

  const submitNewGenre = (e: any) => {
    e.preventDefault();

    axios
      .post(process.env.REACT_APP_DEV_API_URL + "/v1/genres/create", {
        headers: {
          "Content-Type": "application/json",
        },
        name: genre,
      })
      .then((res) => {
        console.log(res);
        setGenre("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <br />
      <form onSubmit={submitNewGenre}>
        <TextField
          id="outlined-basic"
          // 下記を変数にすることができるとコンポーネント化が可能
          label="Genre"
          variant="outlined"
          value={genre}
          onChange={handleChange}
        />
        <br />
        <SubmitButton />
      </form>
    </>
  );
};

export default CreateGenre;
