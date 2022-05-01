import React from "react";
import { Route } from "react-router-dom";
import CreateGenre from "../tsx/views/pages/Admin/CreateGenre";
import Dashboard from "../tsx/views/pages/Admin/Dashboard";
import AdminSignIn from "../tsx/views/pages/Admin/AdminSignin";


function AdminRoutes() {
  return (
    <>
      {/* Adminのページ */}
      <Route exact path="/admin/signin" component={AdminSignIn} />
      <Route exact path="/admin/genre/create" component={CreateGenre} />
      <Route exact path="/admin/dashboard" component={Dashboard} />
    </>
  );
}

export default AdminRoutes;