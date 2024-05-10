import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import FONTS from "../../../../fonts/Fonts";
import GlobalStyles from "../../../../global_styles/GlobalStyles";
import Colors from "../../../../colors/Colors";

const {width , height} = Dimensions.get("window")

export const OnboardingSlideStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width,
    paddingHorizontal : GlobalStyles.paddingScreen
  },
  imageContainer: {
    height : height*0.45,
    width : width,
    backgroundColor : Colors.primary,
    overflow : "hidden",
    justifyContent : "center" , 
    alignItems : "center",
    borderBottomEndRadius  : 30,
    borderBottomStartRadius  : 30
  },
  image : {
    width : 230,
    top : 70,
    resizeMode : "contain"
  },
  title: {
    includeFontPadding  : false,
    textAlign: 'center',
    fontSize: 26,
    fontFamily: FONTS.urbanist_700,
    marginBottom: 25,
    lineHeight : 38,
    paddingHorizontal : GlobalStyles.paddingScreen,
    width : width
  },
  subtitle: {
    includeFontPadding  : false,
    fontFamily: FONTS.urbanist_500,
    paddingHorizontal : GlobalStyles.paddingScreen,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 25,
    marginBottom : 10
  },
});