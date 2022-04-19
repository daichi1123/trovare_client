import React from "react";
import { Link } from "react-router-dom";
import OwnerHeader from "../../components/block/OwnerHeader";

function Owner() {
  return (
    <>
      <OwnerHeader/>
      <ul>
        <li>
          <Link to="/">Index Page</Link>
        </li>
        <li>
          <Link to="/regist/restrant">Register Restrant</Link>
        </li>
        <li>
          <Link to="/coupon">coupon</Link>
        </li>
      </ul>
    </> 
  );
}

export default Owner;