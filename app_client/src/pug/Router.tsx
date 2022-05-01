import React from "react";
// react router domは、5系で使用するべき
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Owner from "../tsx/views/pages/Owner/Owner";

import CreateGenre from "../tsx/views/pages/Admin/CreateGenre";
import Dashboard from "../tsx/views/pages/Admin/Dashboard";
import AdminSignIn from "../tsx/views/pages/Admin/AdminSignin";

import Index from "../tsx/views/pages/Client/Index";
// Google Mapsに使用する
import Map from "../tsx/views/pages/Client/Map";
import SearchRestrant from "../tsx/views/pages/Client/SearchRestrant";

import Coupon from "../tsx/views/pages/Owner/Coupon";
import RegisterRestrant from "../tsx/views/pages/Owner/RegistRestrant";
import AuthGoogleByFirebase from "../tsx/views/pages/Owner/OwnerSignin";


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Client */}
        <Route exact path="/" component={Index} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/search" component={SearchRestrant} />

        {/* Owner */}
        <Route exact path="/owner/signin" component={AuthGoogleByFirebase} />
        <Route exact path="/owner/coupons/create" component={Coupon} />
        <Route exact path="/owner/restaurants/register" component={RegisterRestrant} />

        {/* Admin */}
        <Route exact path="/admin/signin" component={AdminSignIn} />
        <Route exact path="/admin/genres/create" component={CreateGenre} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        
        {/* Test */}
        <Route exact path="/owner" component={Owner} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;