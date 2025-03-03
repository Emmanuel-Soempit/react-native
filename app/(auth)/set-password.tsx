import { UiText, UiView, UiButton } from "@/components";
import { SetPasswordForm } from "@/features/auth";
import { useRouter } from "expo-router";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function SetPassword() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <UiView variant="primary" customStyle={style.main}>
          <UiButton
            onPress={() => router.back()}
            icon={"arrow-left"}
            customStyle={{ width: "30%" }}
            variant="outline"
          >
            Back
          </UiButton>

          <UiView style={style.container}>
            <UiText variant="headlineMedium">Create New Password</UiText>
            <UiText
              customStyle={{ width: "65%", textAlign: "center" }}
              variant="labelMedium"
            >
              Set a new password you wont easily forget
            </UiText>

            <SetPasswordForm />
          </UiView>
        </UiView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const { height, width } = Dimensions.get("window");
const style = StyleSheet.create({
  main: {
    height,
    width,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    justifyContent: "space-between",
  },
  container: {
    height: "85%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2%",
  },
});

export default SetPassword;
