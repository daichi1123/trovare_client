import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { render } from "../../atoms/Loading/GoogleMapLoading";
// import { GoogleMapApiKey } from "../../../../utils/const";

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const initMapProps: MapProps = {
  center: {
    lat: 35.6092,
    lng: 139.7303,
  },
  zoom: 15,
};

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
