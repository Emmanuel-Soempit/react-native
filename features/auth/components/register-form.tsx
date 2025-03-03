import { UiButton} from "@/components";
import { UiForm, UiFormInput } from "@/components/form";
import { successToast } from "@/utils/toasts";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MenufyTheme, TextInput, useTheme } from "react-native-paper";

function RegisterForm() {
  const { control } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordReEnter, setShowPasswordReEnter] = useState(false);
  const { colors } = useTheme<MenufyTheme>();
  const router = useRouter();

  const toogleShowPassword = () => setShowPassword(!showPassword);
  const toogleShowPasswordReEnter = () =>
    setShowPasswordReEnter(!showPasswordReEnter);

  const passwordIcon = (
    <TextInput.Icon
      icon={() => (
        <Entypo
          name={showPassword ? "eye-with-line" : "eye"}
          size={20}
          color={colors.textPrimary}
          onPress={toogleShowPassword}
        />
      )}
    />
  );

  const passwordReEnterIcon = (
    <TextInput.Icon
      icon={() => (
        <Entypo
          name={showPassword ? "eye-with-line" : "eye"}
          size={20}
          color={colors.textPrimary}
          onPress={toogleShowPasswordReEnter}
        />
      )}
    />
  );

  const handleOnSubmit = () => {
    successToast("Congrats", "Registration successful");
    router.replace("/(tabs)");
  };

  return (
    <UiForm>
      <UiFormInput control={control} name="first_name" label="First Name" />
      <UiFormInput control={control} name="last_name" label="Last Name" />
      <UiFormInput control={control} name="email" label="Email" />

      <UiFormInput
        secureTextEntry={!showPassword}
        right={passwordIcon}
        control={control}
        name="email"
        label="Password"
      />
      <UiFormInput
        secureTextEntry={!showPasswordReEnter}
        right={passwordReEnterIcon}
        control={control}
        name="re_enter_password"
        label="Re-enter Password"
      />

      <UiButton onPress={handleOnSubmit}>Get Started</UiButton>
    </UiForm>
  );
}

export default RegisterForm;
