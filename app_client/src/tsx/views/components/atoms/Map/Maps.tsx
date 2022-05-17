import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
import {GoogleMapApiKey} from "../../../../utils/const";
import {initMapProps, placeMarkerProps} from "../../../../../ts/type/GoogleMap/GoogleMapTypes"

const containerStyle = {
  height: "100vh",
  width: "100%",
};

const divStyle = {
  background: "white",
  fontSize: 7.5,
};

export const Maps = () => {
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const infoWindowOptions = {
    pixelOffset: size,
  };
  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };

  return (
    <LoadScript googleMapsApiKey={GoogleMapApiKey} onLoad={() => createOffsetSize()}>
      <GoogleMap mapContainerStyle={containerStyle} center={initMapProps.center} zoom={initMapProps.zoom}>
        {placeMarkerProps.map((placeMarkerProp) => (
          <>
            <Marker position={placeMarkerProp.coordinate}/>
            <InfoWindow position={placeMarkerProp.coordinate} options={infoWindowOptions}>
              <div style={divStyle}>
                <h1>{placeMarkerProp.shop}</h1>
              </div>
            </InfoWindow>
          </>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};
