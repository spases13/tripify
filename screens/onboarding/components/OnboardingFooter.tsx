import React, { useContext } from "react";
import {Button, View} from "react-native";
import { OnboardingFooterStyles as styles } from "./styles/OnboardingFooterStyles";
import Colors from "../../../colors/Colors";
import CustomButton from "../../../library/CustomButton";
import { ThemeContext } from "../../../theme/ThemeContext";

const OnboardingFooter: any = (props : any) => {
  const { slides, currentSlideIndex } = props;

  const isCurrentSlide = (index: number): boolean => {
    return currentSlideIndex === index;
  };

  const { theme, toggleTheme } : any= useContext(ThemeContext);


  return (
    <View style={[styles.container , {backgroundColor : theme.white}]}>
      <View style={styles.indicatorsContainer}>
        {slides.map((_: any, index: number) => (
          <View
            key={index}
            style={[
              styles.indicator,
              { backgroundColor: theme.gray_500 },
              isCurrentSlide(index) && [
                styles.selectedIndicator,
                { backgroundColor: theme.primary },
              ],
            ]}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {currentSlideIndex === slides.length - 1 ? (
          <View>
            <CustomButton title="Done" onPress = {()=>{props.navigation.navigate("Signup")}}/>
          </View>
        ) : (
          <View style={styles.buttonRow}>
            <CustomButton title="Skip" variant = "secondary" onPress = {()=>{props.navigation.navigate("Signup")}}/>
            <CustomButton title="Next" onPress={props.goToNextSlide}/>
          </View>
        )}
      </View>
    </View>
  );
};

export default OnboardingFooter;