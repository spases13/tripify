import React, { useContext } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { OnboardingSlideStyles as styles } from "./styles/OnboardingSlideStyles";
import Colors from "../../../colors/Colors";
import GlobalStyles from "../../../global_styles/GlobalStyles";
import { ClipPath, Ellipse, Svg } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "../../../library/IconButton";
import { ThemeContext } from "../../../theme/ThemeContext";

const OnboardingSlide = ({ item }: any) => {
  const { height, width } = Dimensions.get("window");
  const { theme, toggleTheme } : any= useContext(ThemeContext);

  return (
    <View style={styles.container}>
    <IconButton
    onPress={()=> toggleTheme()}
    color={theme.black} style={{position : "absolute" , zIndex : 1 , right : 20 ,top : 10}} type = "ionicon" name = "sunny-outline"/>
    <LinearGradient
      style={styles.imageContainer}
      colors={[theme.primary , theme.primary_alt]}
    >
      <View>
        <Image style={styles.image} source={item?.image} />
      </View>
    </LinearGradient>
      <View style={{ paddingVertical: 30, flex: 1 }}>
        <Text style={[styles.title, { color: theme.black }]}>
          {item?.title}
        </Text>
        <Text style={[styles.subtitle, { color: theme.gray_900 }]}>
          {item?.subtitle}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingSlide;
