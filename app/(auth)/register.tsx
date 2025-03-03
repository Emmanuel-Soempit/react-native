import { UiText, UiView, UiButton, UiDivider, UiLink } from "@/components";
import { OAuthMethods, RegisterForm } from "@/features/auth";
import { useRouter } from "expo-router";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function Register() {
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
            <UiText variant="headlineSmall">New Here?</UiText>
            <UiText
              customStyle={{ width: "65%", textAlign: "center" }}
              variant="labelMedium"
            >
              Sign up and unlock powerful tools for your restaurant's success!
            </UiText>

            <RegisterForm />

            <UiDivider text="Or" />

            <OAuthMethods/>

            <UiView customStyle={{flexDirection: 'row', alignItems: 'center', gap: 0}}>
              <UiText>Do not have an account?</UiText>
              <UiLink onPress={() => router.replace('/(auth)')}>Login Now</UiLink>
            </UiView>
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
    height: "92%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1%",
  },
});

export default Register;
