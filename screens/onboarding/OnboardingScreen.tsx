import React, { useContext, useRef, useState } from 'react';
import {
  FlatList,
  StatusBar,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Text
} from 'react-native';

import Colors from '../../colors/Colors';
import OnboardingSlide from './components/OnboardingSlide';
import OnboardingFooter from './components/OnboardingFooter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../theme/ThemeContext';
const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation } : any) => {

  const slides: any = [
    {
      id: '1',
      image  : require("../../assets/mockup/mockup-1.png"),
      title: "Discover Your Next Adventure",
      subtitle: "Tripify curates travel gems just for you. Get personalized destination recommendations and start building your dream journey.",
    },
    {
      id: '2',
      image  : require("../../assets/mockup/mockup-2.png"),
      title: "Save And Plan Your Adventures",
      subtitle: "Found your dream destination? Add it to your saved list for later. Tripify keeps your travel dreams organized and within reach.",
    },
    {
      id: '3',
      image  : require("../../assets/mockup/mockup-3.png"),
      title: "Intelligent Trip Planning with Tripify AI",
      subtitle: "Let our Al plan a detailed trip tailored to your preferences. Easy planning for your unforgettable experience.",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const ref = useRef<any>(null);
  
  const updateCurrentSlideIndex = (e:  NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const { theme, toggleTheme } : any= useContext(ThemeContext);


  return (
    
    <SafeAreaView style={{flex : 1 , backgroundColor : theme.white}}>
      <StatusBar backgroundColor={theme.primary} barStyle={theme.name === 'lightTheme' ? "light-content" : "dark-content"} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OnboardingSlide item={item} />}
      />
      <OnboardingFooter
        slides={slides}
        navigation={navigation}
        goToNextSlide={goToNextSlide}
        currentSlideIndex={currentSlideIndex}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;