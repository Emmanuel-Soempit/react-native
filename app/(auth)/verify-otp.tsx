import { UiText, UiView, UiButton} from "@/components";
import { VerifyOtpForm } from "@/features/auth";
import { useRouter } from "expo-router";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function ForgotPassword() {
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
            <UiText variant="headlineMedium">Verify Otp</UiText>
            <UiText
              customStyle={{ width: "65%", textAlign: "center" }}
              variant="labelMedium"
            >
              Enter the five (6) Digit code that was sent to your email
            </UiText>

           <VerifyOtpForm/>
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

export default ForgotPassword;
