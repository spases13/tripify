import { View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import GlobalStyles from '../global_styles/GlobalStyles'
import { Link } from '@react-navigation/native'
import Fonts from '../fonts/Fonts'
import Colors from '../colors/Colors'
import Data from '../data/Data'
import axios from "axios"
import { MaterialIcons } from "@expo/vector-icons";

const CardsScroller = () => {

  const apiCountries = "https://restcountries.com/v3.1/all"

  const [countriesData, setCountriesData] = useState<any>([]);

  useEffect(() => {
    if (!countriesData) {
      axios.get(apiCountries).then((response) => {
        setCountriesData(response.data)
        // console.log(response.data);
      })
    }
  }, [countriesData])


  const getFlag = (country : any)=>  { 
   return country?.flags?.png
  }

  const getCountryInfos = (countryName : string) => { 
   return countriesData.find((country : any) => country?.name?.common.toLowerCase() === countryName.toLowerCase())
  }
  
  return (
    <View style={[styles.container, GlobalStyles.containerScroller]}>
      <View style={styles.header}>
        <Text variant='titleMedium' style={styles.header_text}>Popular Destinations</Text>
        <Link to={"/"}>
          <View style={styles.header_link}>
            <Text style={styles.header_link_text}>View All</Text>
            <MaterialIcons style = {styles.header_link_icon} name='arrow-forward' />
          </View>
        </Link>
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item : any) => item.id}
        data={Data}
        renderItem={({ item }) =>
        (
          <TouchableOpacity activeOpacity={0.7} style={styles.card}>
            <View style={styles.cardImgContainer}>
              <Image style={styles.img} source={{ uri: item.imgSrc }} />
            </View>
            <View style={styles.card_first_text}>
              <Text style={styles.card_first_text_title} variant='titleMedium'>{item.name}</Text>
            </View>
            <View style={styles.card_second_text}>
              <Image style= {styles.flag} source={{uri : getFlag(getCountryInfos(item.countryName))}} />
              <Text style = {styles.card_second_text_title}>{item.countryName}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
  },
  icon :{
    fontSize : 12,
    transform : [{scale : 2}],
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
  },
  header_text: {
    fontFamily: Fonts.urbanist_700,
  },
  header_link: {
    color: Colors.primary,
    fontFamily: Fonts.urbanist_700,
    marginRight : 10,
    display : "flex",
    flexDirection : "row",
    alignItems : "center"
  },
  header_link_text : {
    color: Colors.primary,
  },
  header_link_icon : {
    color: Colors.primary,
    fontSize : 25,
    marginHorizontal : 5
  },
  card: {
    width: 260,
    marginRight: 20,
    // backgroundColor: Colors.primary,
    // gap: 15,
    },
  cardImgContainer: {
    // backgroundColor: "orange",
    height: 180,
    marginBottom : 15
  },
  card_first_text: {
    marginBottom : 10
  },
  card_first_text_title: { 
    fontFamily: Fonts.urbanist_600
  },
  card_second_text : {
    flexDirection : "row",
    alignItems :"center",
    gap : 10
    // justifyContent : "space-between"
  },
  card_second_text_title: { 
    fontFamily: Fonts.urbanist_500,
    color : Colors.gray_900
  },
  img: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
  },
  flag : { 
    width : 28,
    height : 19.5,
    resizeMode: "stretch",
    borderRadius : 3,
    borderWidth : 1,
    borderColor : Colors.gray_500,
  }
})

export default CardsScroller