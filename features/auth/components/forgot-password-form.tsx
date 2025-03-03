import { UiButton} from "@/components";
import { UiForm, UiFormInput } from "@/components/form";
import { successToast } from "@/utils/toasts";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { MenufyTheme, useTheme } from "react-native-paper";


function ForgotPasswordForm() {
  const { control } = useForm();
  const router = useRouter()

  const handleOnSubmit = () => {
    successToast("Congrats", "Otp sent to your email");
    router.push('/(auth)/verify-otp')
  };

  return (
    <UiForm>
      <UiFormInput control={control} name="email" label="Enter Email" />
      <UiButton onPress={handleOnSubmit}>Continue</UiButton>
    </UiForm>
  );
}

export default ForgotPasswordForm;
