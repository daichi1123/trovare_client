import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { render } from "../../atoms/Loading/GoogleMapLoading";
import {
  MapProps,
  initMapProps,
} from "../../../../../ts/type/GoogleMap/GoogleMapTypes";
// import { GoogleMapApiKey } from "../../../../utils/const";

export const GoogleMaps = (): JSX.Element => {
  const [mapProps, setMapProps] = useState<MapProps>(initMapProps);

  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <Wrapper apiKey="" render={render}>
          <GoogleMapReact
            // Prod: use {{ key: GoogleMapApiKey! }}
            bootstrapURLKeys={{ key: "" }}
            center={mapProps.center}
            defaultZoom={mapProps.zoom}
          ></GoogleMapReact>
        </Wrapper>
      </div>
    </>
  );
};
