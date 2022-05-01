import React from "react";
// react router domは、5系で使用するべき
import { Route } from "react-router-dom";
import Coupon from "../tsx/views/pages/Owner/Coupon";
import RegisterRestrant from "../tsx/views/pages/Owner/RegistRestrant";
import AuthGoogleByFirebase from "../tsx/views/pages/Owner/OwnerSignin";


function OwnerRoutes() {
  return (
    <>
      <Route exact path="/owner/signin" component={AuthGoogleByFirebase} />
      <Route exact path="/owner/coupon" component={Coupon} />
      <Route exact path="/owner/regist/restaurant" component={RegisterRestrant} />
    </>
  );
}

export default OwnerRoutes;