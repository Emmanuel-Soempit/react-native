import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Woman from '@/assets/images/woman-with-phone.png'

function OnboardingScreen() {
  return (
    <SafeAreaView>
      <View style={style.main}>
        <Image style={style.image} source={Woman}/>
        <Text>tttbgvgvhj</Text>
      </View>
    </SafeAreaView>
  );
}

const {height, width} = Dimensions.get('window')
const style = StyleSheet.create({
  main: {
    height,
    width
  },
  image: {
    height: '50%',
    width: '100%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  }
})

export default OnboardingScreen;
