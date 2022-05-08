export interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

export const initMapProps: MapProps = {
  center: {
    lat: 35.6092,
    lng: 139.7303,
  },
  zoom: 15,
};