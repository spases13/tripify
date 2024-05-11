import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import Colors from "../colors/Colors";
import Fonts from "../fonts/Fonts";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CustomButton({ ...props }) {
  const variant = props.variant;

  let colors: any;
  let titleStyle : any;
  let buttonStyle : any;

  if (variant === "secondary") {
    colors = [Colors.gray_300, Colors.gray_300];
    titleStyle = styles.titleStyleV2;
    buttonStyle = styles.buttonStyleV2;
  } else if (variant === "social-media") {
    colors = [Colors.white, Colors.white];
    titleStyle = styles.titleStyleSocialMedia;
    buttonStyle = styles.buttonStyleSocialMedia;
  } else {
    titleStyle = styles.titleStyle;
    buttonStyle = styles.buttonStyle;
    colors = [Colors.primary, Colors.primary_alt];
  }

  return (
    <LinearGradient
      style={styles.buttonStyleContainer}
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style = {{position : "relative" , justifyContent : "center"}}>
      <Ionicons name={props.ioniconsIconName} color={props.ioniconsIconColor} style ={{position : "absolute" , left : 20 , fontSize : 18}}/>
      <Button
        {...props}
        titleStyle={
          titleStyle
        }
        buttonStyle={
          buttonStyle
        }
        />
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "transparent",
    borderRadius: 100,
    padding: 15,
    minWidth: 100,
    overflow: "hidden",
  },
  buttonStyleSocialMedia: {
    backgroundColor: "transparent",
    borderRadius: 100,
    padding: 15,
    minWidth: 100,
    overflow: "hidden",
    borderWidth : 2,
    borderColor : Colors.gray_300
  },
  buttonStyleContainer: {
    borderRadius: 100,
    overflow: "hidden",
  },
  titleStyle: {
    includeFontPadding : false,
    fontFamily: Fonts.urbanist_700,
  },
  buttonStyleV2: {
    backgroundColor: "transparent",
    borderRadius: 100,
    padding: 15,
    minWidth: 100,
    overflow: "hidden",
  },
  buttonStyleContainerV2: {
    borderRadius: 100,
    overflow: "hidden",
  },
  titleStyleV2: {
    color: "#1D976C",
    fontFamily: Fonts.urbanist_700,
  },
  titleStyleSocialMedia: {
    color: Colors.black,
    fontFamily: Fonts.urbanist_700,
  },
});
