import React from "react";
import { Route } from "react-router-dom";
// Google Mapsに使用する
import Map from "../tsx/views/pages/Client/Map";
import { SearchRestaurants } from "../tsx/views/pages/Client/SearchRestaurants";

function ClientRouter() {
  return (
    <>
      {/* Clientのページ */}
      <Route exact path="/map" component={Map} />
      <Route exact path="/search" component={SearchRestaurants} />
    </>
  );
}

export default ClientRouter;
