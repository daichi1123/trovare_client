import React from "react";
import { Header } from "../../components/block/Header";
import { GoogleMapsComponent } from "../../components/block/Map/GoogleMapsComponent";

export const Map = () => {
  return (
    <>
      <Header />
      <GoogleMapsComponent />
    </>
  );
};
