import React from "react";
import {Button, View} from "react-native";
import { OnboardingFooterStyles as styles } from "./styles/OnboardingFooterStyles";
import Colors from "../../../colors/Colors";
import CustomButton from "../../../library/CustomButton";

const OnboardingFooter: any = (props : any) => {
  const { slides, currentSlideIndex } = props;

  const isCurrentSlide = (index: number): boolean => {
    return currentSlideIndex === index;
  };


  return (
    <View style={styles.container}>
      <View style={styles.indicatorsContainer}>
        {slides.map((_: any, index: number) => (
          <View
            key={index}
            style={[
              styles.indicator,
              { backgroundColor: Colors.gray_500 },
              isCurrentSlide(index) && [
                styles.selectedIndicator,
                { backgroundColor: Colors.primary },
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