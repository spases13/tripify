import {
  FlatList,
  KeyboardAvoidingView,
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
import CustomHeaderNavigation from "../../library/CustomHeaderNavigation";
import ProgressionBar from "../../library/ProgressionBar";
import CustomButton from "../../library/CustomButton";
import CustomInput from "../../library/CustomInput";
import TravelPreferenceCard from "../../library/TravelPreferenceCard";
import Footer from "../../library/Footer";
import { useNavigation } from "@react-navigation/native";

export default function TravelPreferencesScreen() {
  const [selectedTravelPreferences, setSelectedTravelPreferences] =
    useState<any>([]);

  const [searchInputValue, setSearchInputValue] = useState("");

  const data: any = [
    {
      id: "1",
      travel_preference_name: "Beach",
      travel_preference_emoji: "🏖️",
    },
    {
      id: "2",
      travel_preference_name: "Mountain",
      travel_preference_emoji: "⛰️",
    },
    {
      id: "3",
      travel_preference_name: "City",
      travel_preference_emoji: "🏙️",
    },
    {
      id: "4",
      travel_preference_name: "Countryside",
      travel_preference_emoji: "🌳",
    },
    {
      id: "5",
      travel_preference_name: "Desert",
      travel_preference_emoji: "🏜️",
    },
    {
      id: "6",
      travel_preference_name: "Historical",
      travel_preference_emoji: "🏛️",
    },
    {
      id: "7",
      travel_preference_name: "Adventure",
      travel_preference_emoji: "🌄",
    },
    {
      id: "8",
      travel_preference_name: "Safari",
      travel_preference_emoji: "🦁",
    },
    {
      id: "9",
      travel_preference_name: "Winter Sports",
      travel_preference_emoji: "⛷️",
    },
    {
      id: "10",
      travel_preference_name: "Theme Park",
      travel_preference_emoji: "🎢",
    },
    {
      id: "11",
      travel_preference_name: "Cruise",
      travel_preference_emoji: "🚢",
    },
  ];

  const toggleTravelPreferenceSelection = (id: any) => {
    if (selectedTravelPreferences.includes(id)) {
      setSelectedTravelPreferences((prevState: any) => {
        const newState = [...prevState];
        newState.splice(newState.indexOf(id), 1);
        return newState;
      });
    } else {
      setSelectedTravelPreferences((prevState: any) => [...prevState, id]);
    }
  };

  const navigation : any = useNavigation()

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <CustomHeaderNavigation onlyTwo>
        <ProgressionBar progressValue={2/3} />
      </CustomHeaderNavigation>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View>
            <Text style={styles.title}>Travel Preferences ✈️</Text>
            <Text style={styles.description}>
              Tell us your travel preferences, and we'll tailor recommendations
              to your style. Don't worry. you can always change it later in the
              settings.
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <CustomInput
              onChangeText={setSearchInputValue}
              icon="search-outline"
              placeholder="Search travel preferences"
            />
          </View>
          <ScrollView contentContainerStyle={styles.travelPreferencesList}>
            {data
              .filter((item: any) =>
                item.travel_preference_name
                  .toLowerCase()
                  .includes(searchInputValue.toLowerCase())
              )
              .map((item: any, index: number) => (
                <TravelPreferenceCard
                  onPress={() => toggleTravelPreferenceSelection(item.id)}
                  key={index}
                  selected={selectedTravelPreferences.includes(item.id)}
                  name={item.travel_preference_name}
                  emoji={item.travel_preference_emoji}
                />
              ))}
          </ScrollView>
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer>
        <CustomButton onPress = {()=> navigation.navigate("PersonalTouchScreen")} title="Continue" />
      </Footer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  container: {
    padding: GlobalStyles.paddingScreen,
    paddingBottom: GlobalStyles.footer,
  },
  title: {
    includeFontPadding: false,
    fontSize: 26,
    fontFamily: Fonts.urbanist_700,
    color: Colors.black,
    marginBottom: 15,
  },
  description: {
    includeFontPadding: false,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.urbanist_500,
    color: Colors.gray_900,
  },
  travelPreferencesList: {
    marginTop: 30,
    gap: 12,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
