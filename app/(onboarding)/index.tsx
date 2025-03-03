import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Woman from "@/assets/images/woman-with-phone.png";
import { onboarding_texts } from "@/constants/onboarding";
import {UiText, UiView, UiButton} from "@/components";
import { useState } from "react";
import { Color } from "@/constants/Colors";
import { useRouter } from "expo-router";

function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(onboarding_texts[0]);
  const router = useRouter()

  const handleOnClick = () => {
    if (currentStep.id !== 3) {
      if (currentStep.id === 1) {
        setCurrentStep(onboarding_texts[1]);
      }
      
      if (currentStep.id === 2) {
        setCurrentStep(onboarding_texts[2]);
      }

    } else{
      router.push('/(onboarding)/sign-up-options')
    }
  };

  return (
    <SafeAreaView>
      <UiView variant="secondary" customStyle={style.main}>
        <Image style={style.image} source={Woman} />

        <UiView customStyle={style.container}>
          <UiText variant="headlineLarge">{currentStep.title}</UiText>
          <UiText>{currentStep.prompt}</UiText>
        </UiView>

        <UiView customStyle={style.bottomContainer}>
          <UiView style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            {onboarding_texts.map((current) => (
              <TouchableOpacity
                 onPress={() => setCurrentStep({...current})}
                style={
                  current.id === currentStep.id
                    ? style.activeDot
                    : style.inactiveDot
                }
                key={current.id}
              />
            ))}
          </UiView>
          <UiButton customStyle={{ width: "30%" }} onPress={handleOnClick}>
            <UiText>Next</UiText>
          </UiButton>
        </UiView>
      </UiView>
    </SafeAreaView>
  );
}

const { height, width } = Dimensions.get("window");
const style = StyleSheet.create({
  main: {
    height,
    width,
    flexDirection: "column",
    display: "flex",
  },
  image: {
    height: "55%",
    width: "100%",
    // borderBottomRightRadius: 20,
    // borderBottomLeftRadius: 20,
  },
  container: {
    width: "90%",
    paddingLeft: "5%",
    paddingTop: "5%",
    display: "flex",
    gap: 20,
    flexDirection: "column",
  },

  bottomContainer: {
    marginTop: "20%",
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "5%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },

  inactiveDot: {
    height: 10,
    width: 20,
    backgroundColor: "white",
    borderRadius: 30,
  },

  activeDot: {
    height: 10,
    width: 40,
    backgroundColor: Color.light.buttonPrimary,
    borderRadius: 30,
  },
});

export default OnboardingScreen;
