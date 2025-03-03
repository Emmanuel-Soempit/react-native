import { UiText, UiView, UiButton, UiDivider, UiLink } from "@/components";
import { LoginForm, OAuthMethods } from "@/features/auth";
import { useRouter } from "expo-router";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function Login() {
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
            <UiText variant="headlineMedium">Welcome back</UiText>
            <UiText
              customStyle={{ width: "65%", textAlign: "center" }}
              variant="labelMedium"
            >
              Hey, Enter your details below to login to your account
            </UiText>

            <LoginForm />

            <UiDivider text="Or" />

            <OAuthMethods />

            <UiView customStyle={{flexDirection: 'row', alignItems: 'center', gap: 0}}>
              <UiText>Do not have an account?</UiText>
              <UiLink onPress={() => router.replace('/(auth)/register')}>Sign Up Now</UiLink>
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
    height: "85%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2%",
  },
});

export default Login;
