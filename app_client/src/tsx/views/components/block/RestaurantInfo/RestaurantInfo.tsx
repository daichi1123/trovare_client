import { RestaurantCard } from "../../atoms/Card/RestaurantCard";
import { RestaurantCount } from "../../atoms/Count/RestaurantCount";

export const RestaurantInfo = () => {
  return (
    <>
      <RestaurantCount />
      <RestaurantCard />
    </>
  );
};
