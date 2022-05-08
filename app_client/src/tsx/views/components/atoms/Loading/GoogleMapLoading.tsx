import { Status } from "@googlemaps/react-wrapper";

// TODO: loadingの間に出る文言 layoutを変えていく必要あり
export const render = (status: Status) => {
  return (
    <>
      <h1>{status}</h1>
    </>
  );
};