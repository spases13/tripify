import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import Colors from '../colors/Colors';
import Fonts from '../fonts/Fonts';

interface CustomInput { 
  icon ?: any ,
  keyboardType ?: KeyboardTypeOptions | undefined,
  placeholder ?: string
}

export default function CustomInput({icon , keyboardType , placeholder , onChangeText} : any) {
  return (
    <View style = {{width :"100%" , flexDirection : 'row' , justifyContent : "center"}}>
    <View style={[styles.searchInputContainer]}>
      {icon ? <Ionicons style = {styles.icon} name={icon} /> : <View style = {{marginLeft : 20}}/>}
      <TextInput
      onChangeText={onChangeText}
        keyboardType={keyboardType ?? 'default'}
        placeholder={placeholder}
        cursorColor={Colors.primary}
        placeholderTextColor={Colors.gray}
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
    maxWidth : 500,
    overflow: "hidden",
    height: 60,
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