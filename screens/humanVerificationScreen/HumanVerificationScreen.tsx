import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../../global_styles/GlobalStyles";
import Colors from "../../colors/Colors";
import Fonts from "../../fonts/Fonts";
import CustomHeaderNavigation from "../../library/CustomHeaderNavigation";
import ProgressionBar from "../../library/ProgressionBar";
import CustomButton from "../../library/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../library/Footer";
import { ThemeContext } from "../../theme/ThemeContext";

export default function HumanVerificationScreen() {
  
  const navigation :any = useNavigation()
  const { theme, toggleTheme } : any= useContext(ThemeContext);


  return (
    <SafeAreaView style = {[styles.safeAreaContainer , {backgroundColor : theme.white}]}>
      <CustomHeaderNavigation onlyTwo>
        <ProgressionBar progressValue={1/3}/>
      </CustomHeaderNavigation>
      <View style={styles.container}>
        <View>
          <Text style={[styles.title , {color : theme.black}]}>Verifiy you're human 🤖</Text>
          <Text style={[styles.description , {color : theme.gray_900}]}>
            Please solve this captcha so we know you are a person.
          </Text>
        </View>
        <View style = {{marginTop : 50}}>
        <CustomButton onPress = {()=>{navigation.navigate("TravelPreferencesScreen")}} variant = "secondary" title = "Bypass Verification"/>
        </View>
      </View>
      <Footer>
        <CustomButton onPress = {()=> navigation.navigate("TravelPreferencesScreen")} title="Continue" />
      </Footer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer : { 
    flex : 1
  },
  container: {
    padding: GlobalStyles.paddingScreen,
    paddingBottom: GlobalStyles.footer,
  },
  title: {
    includeFontPadding  : false,
    fontSize: 24,
    fontFamily: Fonts.urbanist_700,
    marginBottom: 15,
  },
  description: {
    includeFontPadding  : false,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: Fonts.urbanist_500,
  },
});
