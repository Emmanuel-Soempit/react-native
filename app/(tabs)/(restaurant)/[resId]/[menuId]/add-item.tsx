import {  UiScreenWrap } from "@/components";
import { AddItemForm } from "@/features/menu";

function AddItem() {
  return (
    <UiScreenWrap showHeader={false} containerCustomStyle={{ padding: 0 }}>
      <AddItemForm/>
    </UiScreenWrap>
  );
}

export default AddItem;
