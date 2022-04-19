import React from "react";
import { Link } from "react-router-dom";
// icon
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';

// Component
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Header from "../../components/block/Header";


import styles from "../../../style/pages/Client/Index.module.css";
import RestaurantCard from "../../components/block/RestaurantCard";
import { Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Index() {
  // styles.liをどこかに定義できるようにする
  return (
    <>
      <Header/>
      <div>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Item>
            <Link to="/map">
              <RoomIcon/>
              <span className={styles.map}>map</span>
            </Link>
          </Item>
          <Item>
            <Link to="/search">
              <SearchIcon/>
              <span>Search</span>
            </Link>
          </Item>
          <Item>
            <Link to="/owner">
              <StoreIcon/>
              <span>Owner</span>
            </Link>
          </Item>
          <Item>
            <Link to="/Superadmin">
              <PersonIcon/>
              <span>SuperAdmin</span>
            </Link>
          </Item>
        </Stack>

        <Grid container gap={2}>
          <Grid container gap={2} justifyContent={"center"}>
            <RestaurantCard/>
            <RestaurantCard/>
          </Grid>
          <Grid container gap={2} justifyContent={"center"}>
            <RestaurantCard/>
            <RestaurantCard/>
          </Grid>
          <Grid container gap={2} justifyContent={"center"}>
            <RestaurantCard/>
            <RestaurantCard/>
          </Grid>
        </Grid>

      </div>
    </>
  );
}


export default Index