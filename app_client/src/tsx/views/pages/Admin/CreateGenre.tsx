import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import SubmitButton from '../../components/atoms/button/SubmitButton';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const CreateGenre: React.FC = () => {
  const [genre, setGenre] = useState([])
  const handleChange = (e: any) => {
    e.preventDefault();
    setGenre(e.target.value)
  }

  const submitData: any = axios.post(process.env.REACT_APP_DEV_API_URL + '/v1/genres/create', {
    headers: {
      "Content-Type": "application/json",
    },
    param:{
      genre: genre,
    },
  })
  return (
    <div>
      <form onSubmit={submitData}>
      <TextField
        id="outlined-basic"
        // 下記を変数にすることができるとコンポーネント化が可能
        label="Genre"
        variant="outlined"
      />
        <label htmlFor="genre_name">
          ジャンルの追加
          <input
            id="genre_name"
            value={genre}
            onChange={handleChange}
          />
        </label>
        <br />
        <SubmitButton />
      </form>
    </div> 
  );
}

export default CreateGenre