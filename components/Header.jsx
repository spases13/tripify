import { Text } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import React, { useContext } from "react";
import Fonts from "../fonts/Fonts";
import GlobalStyles from "../global_styles/GlobalStyles";
import GlobalTexts from "../global_texts/GlobasTexts";
import { ThemeContext } from "../theme/ThemeContext";

const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);


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
      color : theme.black,
      fontFamily: Fonts.urbanist_700,
    },
  });

  return (
    <View style={[styles.header, GlobalStyles.container]}>
      <View style={[styles.logo_container]}>
      <Image resizeMode="contain" style={[styles.logo]} source={require("../assets/logo/logo_primary.png")} />
      </View>
      <Text style={styles.text} variant="titleLarge">
        {GlobalTexts.app_name}
      </Text>
      <View style={styles.logo}  />
    </View>
  );
};


export default Header;