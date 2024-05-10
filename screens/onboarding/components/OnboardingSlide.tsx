import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { OnboardingSlideStyles as styles } from "./styles/OnboardingSlideStyles";
import Colors from "../../../colors/Colors";
import GlobalStyles from "../../../global_styles/GlobalStyles";
import { ClipPath, Ellipse, Svg } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

const OnboardingSlide = ({ item }: any) => {
  const { height, width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
    <LinearGradient
      style={styles.imageContainer}
      colors={[Colors.primary , Colors.primary_alt]}
    >
      <View>
        <Image style={styles.image} source={item?.image} />
      </View>
    </LinearGradient>
      <View style={{ paddingVertical: 30, flex: 1 }}>
        <Text style={[styles.title, { color: Colors.black }]}>
          {item?.title}
        </Text>
        <Text style={[styles.subtitle, { color: Colors.gray_900 }]}>
          {item?.subtitle}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingSlide;
