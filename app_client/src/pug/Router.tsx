import React from "react";
// react router domは、5系で使用するべき
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Owner from "../tsx/views/pages/Owner/Owner";

import CreateGenre from "../tsx/views/pages/Admin/CreateGenre";
import Dashboard from "../tsx/views/pages/Admin/Dashboard";
import AdminSignIn from "../tsx/views/pages/Admin/AdminSignin";

// Google Mapsに使用する
import Map from "../tsx/views/pages/Client/Map";
import { SearchRestaurants } from "../tsx/views/pages/Client/SearchRestaurants";

import Coupon from "../tsx/views/pages/Owner/Coupon";
import AuthGoogleByFirebase from "../tsx/views/pages/Owner/OwnerSignin";
import CreateRestaurant from "../tsx/views/pages/Owner/CreateRestaurant";
import { NotFound } from "../tsx/views/pages/errors/NotFound";
import { Top } from "../tsx/views/pages/Client/Top";
import { RequestRegistration } from "../tsx/views/pages/Owner/RequestRegistration";
import { SaveRestaurants } from "../tsx/views/pages/Client/SaveRestaurants";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Client */}
        <Route exact path="/" component={Top} />
        <Route exact path="/restaurants/map" component={Map} />
        <Route exact path="/restaurants/save" component={SaveRestaurants} />
        <Route exact path="/restaurants/search" component={SearchRestaurants} />

        {/* Owner */}
        <Route exact path="/owner/signin" component={AuthGoogleByFirebase} />
        <Route exact path="/owner/coupons/create" component={Coupon} />
        <Route
          exact
          path="/owner/registrations/request"
          component={RequestRegistration}
        />
        <Route
          exact
          path="/owner/restaurants/create"
          component={CreateRestaurant}
        />

        {/* Admin */}
        <Route exact path="/admin/signin" component={AdminSignIn} />
        <Route exact path="/admin/genres/create" component={CreateGenre} />
        <Route exact path="/admin/dashboard" component={Dashboard} />

        {/* Test */}
        <Route exact path="/owner" component={Owner} />

        {/* 404 page */}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
