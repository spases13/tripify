import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { Text } from "react-native-paper";
import React, { useContext, useEffect, useState } from "react";
import GlobalStyles from "../global_styles/GlobalStyles";
import { Link, useNavigation } from "@react-navigation/native";
import Fonts from "../fonts/Fonts";
import Colors from "../colors/Colors";
import Data from "../data/Data";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "../theme/ThemeContext";

const CardsScroller = () => {
  const navigation: any = useNavigation();

  const { theme, toggleTheme } : any= useContext(ThemeContext);

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
      color : theme.black,
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
      width: 260,
      borderRadius: 15,
      marginHorizontal: GlobalStyles.paddingScreen,
    },
    cardImgContainer: {
      height: 180,
      marginBottom: 15,
    },
    card_first_text: {
      marginBottom: 10,
      color : theme.black,
    },
    card_first_text_title: {
      fontFamily: Fonts.urbanist_600,
      color : theme.black,
    },
    card_second_text: {
      color : theme.black,
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

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          { paddingHorizontal: GlobalStyles.paddingScreen }
        ]}
      >
        <Text variant="titleMedium" style={styles.header_text}>
          Popular Destinations
        </Text>
        <Link to={"/AllDestinations"}>
          <View style={styles.header_link}>
            <Text style={styles.header_link_text}>View All</Text>
            <MaterialIcons
              style={styles.header_link_icon}
              name="arrow-forward"
            />
          </View>
        </Link>
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item: any) => item.id}
        data={Data}
        ItemSeparatorComponent={() => (
          <View
            style={{ marginHorizontal: (GlobalStyles.paddingScreen * -1) / 2 }}
          ></View>
        )}
        renderItem={({ item }) => (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={theme.gray_300}
            onPress={() =>
              navigation.navigate("DestinationDetails", { data : item , flag : getFlag(getCountryInfos(item.countryName)) })
            }
            style={styles.card}
          >
            <>
            <View style={styles.cardImgContainer}>
              <Image style={styles.img} source={{ uri: item.imgSrc }} />
            </View>
            <View style={styles.card_first_text}>
              <Text style={styles.card_first_text_title} variant="titleMedium">
                {item.name}
              </Text>
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
    </View>
  );
};

export default CardsScroller;