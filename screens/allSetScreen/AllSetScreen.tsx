import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../../global_styles/GlobalStyles";
import Colors from "../../colors/Colors";
import Fonts from "../../fonts/Fonts";
import CustomButton from "../../library/CustomButton";
import Footer from "../../library/Footer";
import { useNavigation } from "@react-navigation/native";

export default function AllSetScreen() {
  const [avatarImage, setAvatarImage] = useState({
    src: require("../../assets/users/avatar_primary.png"),
    type: "asset",
  });

  const navigation : any = useNavigation()

  return (
    <>
      <SafeAreaView style={styles.safeAreaContainer}>
        <ScrollView contentContainerStyle={[styles.container]}>
          <View style={styles.avatar_container}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatar_image}
                source={
                  avatarImage.type === "url"
                    ? { uri: avatarImage.src }
                    : avatarImage.src
                }
              />
            </View>
          </View>
          <View>
            <Text style={styles.title}>You're all set!</Text>
            <Text style={styles.description}>
            Congratulations! You're now part of the Tripify community. Your personalized travel experiences await.</Text>
          </View>
        </ScrollView>
        <Footer relative>
          <CustomButton onPress = {()=>navigation.navigate("Main")} title="Explore Destinations" />
        </Footer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent : "center" , 
    alignItems : "center" , 
    alignContent : "center",
    padding: GlobalStyles.paddingScreen,
  },
  title: {
    textAlign : "center",
    lineHeight: 40,
    includeFontPadding: false,
    fontSize: 26,
    fontFamily: Fonts.urbanist_700,
    color: Colors.black,
    marginVertical: 25,
  },
  description: {
    textAlign : "center",
    includeFontPadding: false,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.urbanist_500,
    color: Colors.gray_900,
  },
  avatar_container: {
    alignItems: "center",
    marginTop: 30,
  },
  avatar: {
    width: 125,
    height: 125,
  },
  avatar_image: {
    borderRadius: 500,
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
