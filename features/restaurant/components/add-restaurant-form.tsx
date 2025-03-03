import { UiButton, UiImagePicker } from "@/components";
import { UiForm, UiFormInput, UiFormSelect } from "@/components/form";
import { currencies } from "@/utils/dummies";
import { useForm } from "react-hook-form";

function AddRestaurantForm() {
  const { control } = useForm();

  return (
    <>
      <UiImagePicker
        control={control}
        name="image"
      />
      <UiForm customStyle={{ padding: "4%", width: "100%" }}>
        <UiImagePicker
          placeholder="Upload logo "
          control={control}
          name="logo"
          type="logo"
        />
        <UiFormInput name="name" label="Restaurant Name" control={control} />
        <UiFormInput
          name="address"
          label="Restaurant Address"
          control={control}
        />
        <UiFormInput name="contact" label="Contact Number" control={control} />
        <UiFormSelect name="currency" control={control} options={currencies} />
        <UiButton onPress={() => {}}>Add Restaurant</UiButton>
      </UiForm>
    </>
  );
}

export default AddRestaurantForm;
