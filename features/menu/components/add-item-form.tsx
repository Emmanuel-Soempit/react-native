import { UiButton, UiImagePicker } from "@/components";
import { UiForm, UiFormInput, UiFormSelect } from "@/components/form";
import { categories } from "@/utils/dummies";
import { useForm } from "react-hook-form";

function AddItemForm() {
  const { control } = useForm();

  return (
    <>
      <UiImagePicker
        control={control}
        name="image"
      />
      <UiForm customStyle={{ padding: "4%", width: "100%" }}>
        <UiFormInput name="name" label="Item Name" control={control} />

        <UiFormInput
          name="description"
          label="Item Description"
          control={control}
          customTextStyle={{ padding: "4%", width: "100%" }}
        />

        <UiFormInput name="price" label="Item Price" control={control} />

        <UiFormSelect placeholder="select category" name="currency" control={control} options={categories} />
        <UiButton customStyle={{marginTop: '10%'}} onPress={() => {}}>Add Item</UiButton>
      </UiForm>
    </>
  );
}

export default AddItemForm;
