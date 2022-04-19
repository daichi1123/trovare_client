import React from "react";
// react router domは、5系で使用するべき
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Index from "../tsx/views/pages/Client/Index";
import Map from "../tsx/views/pages/Client/Map";
import Owner from "../tsx/views/pages/Owner/Owner";
import Coupon from "../tsx/views/pages/Owner/Coupon";
import RegisterRestrant from "../tsx/views/pages/Owner/RegistRestrant";
import SearchRestrant from "../tsx/views/pages/Client/SearchRestrant";
import SuperAdmin from "../tsx/views/pages/Admin/SuperAdmin";


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        {/* GoogleMap APIを使用して作成していく */}
        <Route exact path="/map" component={Map} />
        <Route exact path="/search" component={SearchRestrant} />
        <Route exact path="/owner" component={Owner} />
        <Route exact path="/SuperAdmin" component={SuperAdmin} />
        {/* Ownerのページ */}
        <Route exact path="/coupon" component={Coupon} />
        <Route exact path="/regist/restrant" component={RegisterRestrant} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;