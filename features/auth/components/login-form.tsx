import { UiButton, UiLink } from "@/components";
import { UiForm, UiFormInput } from "@/components/form";
import { successToast } from "@/utils/toasts";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MenufyTheme, TextInput, useTheme } from "react-native-paper";


function LoginForm() {
  const { control } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const { colors } = useTheme<MenufyTheme>();

  const toogleShowPassword = () => setShowPassword(!showPassword);

  const handleOnSubmit = () => {
    successToast("Congrats", "Login successful");
    router.replace('/(tabs)')
  };

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

  return (
    <UiForm>
      <UiFormInput control={control} name="email" label="Enter Email" />

      <UiFormInput
        secureTextEntry={!showPassword}
        right={passwordIcon}
        control={control}
        name="email"
        label="Password"
      />

      <UiLink
        onPress={() => router.push('/(auth)/forgot-password')}
        customStyle={{
          alignSelf: "flex-end",
          paddingRight: 10,
          marginTop: -15,
        }}
      >
        Forgot Password?
      </UiLink>

      <UiButton onPress={handleOnSubmit}>Login</UiButton>
    </UiForm>
  );
}

export default LoginForm;
