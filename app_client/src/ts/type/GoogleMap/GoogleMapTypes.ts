
export interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

export const initMapProps: MapProps = {
  center: {
    lat: 35.6809591,
    lng: 139.7673068,
  },
  zoom: 17,
};

type placeMarkerType = {
  coordinate : {
    lat: number,
    lng: number,
  }
  shop: string
}[]

export const placeMarkerProps: placeMarkerType = [
  {
    coordinate : {
      lat: 35.644839,
      lng: 139.698895,
    },
    shop: "あわよくばー"
  },
  {
    coordinate : {
      lat: 35.625386,
      lng: 139.722984,
    },
    shop: "焼肉問屋 じゅう兵衛 本店"
  }
]
