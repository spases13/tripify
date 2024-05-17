import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import CustomHeaderNavigation from "../../library/CustomHeaderNavigation";
import { Icon } from "react-native-elements";
import Fonts from "../../fonts/Fonts";
import Data from "../../data/Data";
import GlobalStyles from "../../global_styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import CustomInput from "../../library/CustomInput";
import { Keyboard } from "react-native";


export default function AllDestinations() {
  const { theme, toggleTheme }: any = useContext(ThemeContext);

  const navigation: any = useNavigation();

  const apiCountries = "https://restcountries.com/v3.1/all";

  const [countriesData, setCountriesData] = useState<any>([]);

  useEffect(() => {
    if (countriesData.length === 0) {
      axios.get(apiCountries).then((response) => {
        setCountriesData(response.data);
      });
    }
  }, [countriesData]);

  const getFlag = (country: any) => {
    return country?.flags?.png;
  };

  const getCountryInfos = (countryName: string) => {
    return countriesData.find(
      (country: any) =>
        country?.name?.common.toLowerCase() === countryName.toLowerCase()
    );
  };

  const styles = StyleSheet.create({
    container: {
      marginVertical: 25,
    },
    icon: {
      fontSize: 12,
      transform: [{ scale: 2 }],
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    },
    header_text: {
      color: theme.black,
      fontFamily: Fonts.urbanist_700,
    },
    header_link: {
      color: theme.primary,
      fontFamily: Fonts.urbanist_700,
      marginRight: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    header_link_text: {
      color: theme.primary,
    },
    header_link_icon: {
      color: theme.primary,
      fontSize: 25,
      marginHorizontal: 5,
    },
    card: {
      flex: 1,
      borderRadius: 15,
      marginHorizontal: GlobalStyles.paddingScreen,
    },
    cardImgContainer: {
      height: 240,
      marginBottom: 15,
    },
    card_first_text: {
      marginBottom: 10,
      color: theme.black,
    },
    card_first_text_title: {
      fontFamily: Fonts.urbanist_600,
      color: theme.black,
    },
    card_second_text: {
      color: theme.black,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    card_second_text_title: {
      fontFamily: Fonts.urbanist_500,
      color: theme.gray_900,
    },
    img: {
      borderRadius: 15,
      width: "100%",
      height: "100%",
    },
    flag: {
      width: 28,
      height: 19.5,
      resizeMode: "stretch",
      borderRadius: 3,
      borderWidth: 1,
      borderColor: theme.gray_500,
    },
  });

  const [isSearchOpened, setIsSearchOpened] = useState(false);

  const [searchInputValue, setSearchInputValue] = useState("");

  const handleOnPressBackArrow = () => {
    if (isSearchOpened) {
      setIsSearchOpened(false);
    } else {
      navigation.goBack();
    }
  };

  //TODO : TouchableWithoutFeedback is a good approach with Keyboard.dismiss() to avoid dismissing keyboard on input icons
 
  return (
    <TouchableWithoutFeedback  onPress={()=> Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: theme.white }}>
        <StatusBar
          barStyle={
            theme.name === "lightTheme" ? "dark-content" : "light-content"
          }
          backgroundColor={theme.white}
        />
        <CustomHeaderNavigation onPressBackArrow={handleOnPressBackArrow}>
          {!isSearchOpened && (
            <Text
              style={{
                fontFamily: Fonts.urbanist_700,
                fontSize: 22,
                color: theme.black,
              }}
            >
              Popular Destinations
            </Text>
          )}
          {isSearchOpened && (
            <View style = {{flex : 1 }}>
              <CustomInput
                returnKeyType={"search"}
                autoComplete={"address-line1"}
                onSubmitEditing = {()=>{console.log("ON SUBMIT EDITING TRIGGERED")}}
                autoFocus
                placeholder="Search Destinations"
                value={searchInputValue}
                onChangeText={setSearchInputValue}
              />
            </View>
          )}
          {!isSearchOpened && (
            <TouchableOpacity
              onPress={() => {
                setIsSearchOpened(true);
              }}
              style={{ padding: 7, marginRight: -7 }}
            >
              <Icon color={theme.black} size={30} type="ionicons" name="search" />
            </TouchableOpacity>
          )}
        </CustomHeaderNavigation>
        {!isSearchOpened && (
          <FlatList
            style={{ marginTop: 15 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any) => item.id}
            data={Data}
            ItemSeparatorComponent={() => (
              <View style={{ marginBottom: 30 }}></View>
            )}
            renderItem={({ item }) => (
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor={theme.gray_300}
                onPress={() =>
                  navigation.navigate("DestinationDetails", {
                    data: item,
                    flag: getFlag(getCountryInfos(item.countryName)),
                  })
                }
                style={styles.card}
              >
                <>
                  <View style={styles.cardImgContainer}>
                    <Image style={styles.img} source={{ uri: item.imgSrc }} />
                  </View>
                  <View style={styles.card_first_text}>
                    <Text style={styles.card_first_text_title}>{item.name}</Text>
                  </View>
                  <View style={styles.card_second_text}>
                    <Image
                      style={styles.flag}
                      source={{ uri: getFlag(getCountryInfos(item.countryName)) }}
                    />
                    <Text style={styles.card_second_text_title}>
                      {item.countryName}
                    </Text>
                  </View>
                </>
              </TouchableHighlight>
            )}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
