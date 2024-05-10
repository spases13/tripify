import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../colors/Colors";
import CustomButton from "../../library/CustomButton";
import Fonts from "../../fonts/Fonts";
import GlobalStyles from "../../global_styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {

  const navigation : any  = useNavigation()

  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <ScrollView>
        <View style = {styles.logoContainer}>
            <Image style = {styles.logo} source = {require("../../assets/logo/logo_primary_name.png")} />
        </View>
        <View style = {styles.textContainer}>
          <Text style = {styles.title}>Let's Get Started!</Text>
          <Text style = {styles.subtitle}>Your Passport to Adventure Awaits</Text>
        </View>
        <View style = {styles.buttonsContainer}>
          <CustomButton title = "Continue with Google" variant = "social-media" ioniconsIconName = "logo-google" ioniconsIconColor = "#d50f25"/>
          <CustomButton title = "Continue with Apple" variant = "social-media" ioniconsIconName = "logo-apple" ioniconsIconColor = "#000"/>
          <CustomButton ioniconsIconName = "logo-facebook" ioniconsIconColor = "#3b5998" title = "Continue with Facebook" variant = "social-media"/>
          <CustomButton onPress = {()=>{navigation.navigate("HumanVerification")}} title = "Continue As Guest" variant = "secondary"/>
        </View>
        <View style = {styles.privacyPolicyContainer}>
          <Text style = {styles.privacyPolicyText}>Privacy Policy</Text>
          <Text style = {styles.privacyPolicyText}>Terms Of Service</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    paddingHorizontal  : GlobalStyles.paddingScreen,
    flex : 1 , 
    backgroundColor : Colors.white,
  },

  logoContainer : { 
    alignItems :"center", 
    marginVertical : 50
  },
  logo : {
    width : 100 ,
    height : 100, 
    resizeMode : "contain"
  },
  textContainer : {
    marginBottom : 50
  },
  title : {
    color : Colors.black,
    fontSize : 28,
    textAlign : "center",
    fontFamily : Fonts.urbanist_800 ,
    marginBottom : 15
  },
  subtitle : {
    fontSize : 14,
    textAlign : "center",
    color : Colors.gray_900,
    fontFamily : Fonts.urbanist_500
  },
  buttonsContainer : {
    gap : 20
  },
  privacyPolicyContainer : {
    flexDirection : "row",
    flexWrap : "wrap",
    justifyContent : "center",
    gap  : 30,
    rowGap : 10,
    paddingBottom : 30,
    marginTop : 50,
  },
  privacyPolicyText  : {
    fontFamily : Fonts.urbanist_500,
    fontSize : 12,
    color : Colors.gray_900
  }
});
