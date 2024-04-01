import React from 'react'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View , TextInput } from 'react-native';
import GlobalStyles from '../global_styles/GlobalStyles';
import Colors from '../colors/Colors';
import Fonts from '../fonts/Fonts';


// import { TextInput } from 'react-native-paper';


const HomeSearchBar = () => {

  return (
    <View style = {{width :"100%" , flexDirection : 'row' , justifyContent : "center"}}>
      <View style={[styles.searchInputContainer, GlobalStyles.container]}>
        <Ionicons style = {styles.icon} name='search-outline' />
        <TextInput
          placeholder='Search Destinations'
          cursorColor={Colors.black}
          placeholderTextColor={Colors.gray}
          activeUnderlineColor={Colors.gray_100}
          underlineColor={Colors.gray_100}
          underlineColorAndroid={Colors.gray_100}
          style={styles.searchInput}
        ></TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchInputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    flex : 1,
    // width : 400,
    maxWidth : 500,
    overflow: "hidden",
    height: 50,
    // alignSelf  : "center",
    backgroundColor: Colors.gray_100,
  },
  icon : {
    fontSize : 24,
    marginHorizontal: 10,
    color : Colors.gray
  },
  searchInput: {
    flex: 1,
    height : "100%",
    backgroundColor: Colors.gray_100,
    fontFamily: Fonts.urbanist_600,
    color : Colors.black
  }
})
export default HomeSearchBar