import React from "react";
import { Route } from "react-router-dom";
import Index from "../tsx/views/pages/Client/Index";
// Google Mapsに使用する
import Map from "../tsx/views/pages/Client/Map";
import SearchRestrant from "../tsx/views/pages/Client/SearchRestrant";


function ClientRouter() {
  return (
    <>
      {/* Clientのページ */}
      <Route exact path="/" component={Index} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/search" component={SearchRestrant} />
    </>
  );
}

export default ClientRouter;