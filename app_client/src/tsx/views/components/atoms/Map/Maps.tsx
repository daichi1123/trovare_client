import { useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
import {ApiURL, GoogleMapApiKey} from "../../../../utils/const";
import {initMapProps, placeMarkerProps} from "../../../../../ts/type/GoogleMap/GoogleMapTypes"
import axios from "axios";

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
  const [isAvailable, setAvailable] = useState(false);
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  // useEffectが実行されているかどうかを判定するために用意しています
  const isFirstRef = useRef(true);


  useEffect(() => {
    isFirstRef.current = false;
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({ lat: latitude, lng: longitude });
      setAvailable(true);
    });

    // Thenの処理でお店の住所を受け取るaxiosを叩く
    if (isAvailable == true) {
      axios.post(`${ApiURL}/v1/locations/post/current`, {
        lat: position.lat,
        lng: position.lng,
      }).then(r => console.log(r))
        .catch(err => console.log(err));
    }
  }, [isAvailable]);

  const infoWindowOptions = {
    pixelOffset: size,
  };
  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };

  return (
    <LoadScript googleMapsApiKey={GoogleMapApiKey} onLoad={() => createOffsetSize()}>
      <GoogleMap mapContainerStyle={containerStyle} center={ !isAvailable ? initMapProps.center : position } zoom={initMapProps.zoom}>
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
