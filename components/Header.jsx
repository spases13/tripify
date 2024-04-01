import { Text } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import React from "react";
import Fonts from "../fonts/Fonts";
import GlobalStyles from "../global_styles/GlobalStyles";
import GlobalTexts from "../global_texts/GlobasTexts";

const Header = () => {
  return (
    <View style={[styles.header, GlobalStyles.container]}>
      <View style={[styles.logo_container]}>
      <Image resizeMode="contain" style={[styles.logo]} source={{ uri: "https://tripify.ge/uploads/logo/logo_64fb980e494d10-38879216-60008141.png", }} />
      </View>
      <Text style={styles.text} variant="titleLarge">
        {GlobalTexts.app_name}
      </Text>
      <Image style={[styles.logo,GlobalStyles.hidden]} source={{ uri: "https://tripify.ge/uploads/logo/logo_64fb980e494d10-38879216-60008141.png", }} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical : 20,
  },
  logo: {
    width: 42,
    height: 42,
    objectFit: "contain",
  },
  text: {
    fontFamily: Fonts.urbanist_700,
  },
});

export default Header;
