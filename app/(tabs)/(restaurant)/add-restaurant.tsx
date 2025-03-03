import {  UiScreenWrap } from "@/components";
import { AddRestaurantForm } from "@/features/restaurant";

function AddRestaurant() {
  return (
    <UiScreenWrap showHeader={false} containerCustomStyle={{ padding: 0 }}>
      <AddRestaurantForm />
    </UiScreenWrap>
  );
}

export default AddRestaurant;
