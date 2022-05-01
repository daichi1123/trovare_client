import React from "react";
import { Link } from "react-router-dom";
import MapHeader from "../../components/block/MapHeader";

const Map = () => {
  return (
    <>
      <MapHeader/>
      <div>restaunt zip-address</div>
      <Link to="/">リンクテキスト</Link>
    </> 
  );
}


export default Map;