import {UiText, UiView, UiButton} from "@/components";
import { Dimensions, Image, ImageBackground, StyleSheet } from "react-native";
import Waiters from "@/assets/images/waiters.png";
import MainLogo from "@/assets/images/main-logo.png";
import { useRouter } from "expo-router";

function SignUpOptions() {
  const router = useRouter();
  return (
    <ImageBackground source={Waiters} style={style.image}>
      <UiView style={style.overlay} />
      <UiView style={style.main}>
        <Image style={style.logo} source={MainLogo} />
        <UiView style={style.buttonsWarp}>
          <UiText
            variant="titleLarge"
            customStyle={{
              textAlign: "center",
              paddingHorizontal: 10,
              marginBottom: 10,
              color: 'white'
            }}
          >
            Unlock powerful tools for your restaurant's success!
          </UiText>
          <UiButton onPress={() => router.push('/(auth)/register')}>Create an Account</UiButton>
          <UiButton variant="outline-light" onPress={() => router.push('/(auth)')}>
            Login
          </UiButton>
        </UiView>
      </UiView>
    </ImageBackground>
  );
}

const { height, width } = Dimensions.get("window");

const style = StyleSheet.create({
  main: {
    height,
    width,
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "30%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire image
    backgroundColor: "rgba(0, 0, 0, 0.5)", // White with 50% opacity
  },
  image: {
    height: "100%",
    width: "100%",
    overlayColor: "white",

    // borderBottomRightRadius: 20,
    // borderBottomLeftRadius: 20,
  },
  logo: {
    width: "35%",
    objectFit: "contain",
  },

  buttonsWarp: {
    width: "100%",
    paddingHorizontal: "10%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});

export default SignUpOptions;
