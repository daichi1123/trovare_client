import React from "react";
import { Link } from "react-router-dom";

function RegisterRestrant() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Index Page</Link>
        </li>
        <li>
          <Link to="/owner">Owner</Link>
        </li>
        <li>
          <Link to="/regist/restrant">Register Restrant</Link>
        </li>
      </ul>
    </div> 
  );
}

export default RegisterRestrant;