import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import GlobalStyles from '../global_styles/GlobalStyles'
import Colors from '../colors/Colors'
import { ThemeContext } from '../theme/ThemeContext';

export default function Footer({children , relative  = false}) {

  const { theme, toggleTheme } : any= useContext(ThemeContext);

  return (
    <View style = {[styles.footer ,
      {backgroundColor : theme.white,
      borderTopColor : theme.gray_100,}
    , relative && {position : "relative"}]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  footer : {
    maxHeight : 100,
    padding : GlobalStyles.paddingScreen,
    elevation : 2,
    borderTopWidth : 1,
    width : "100%",
    position :"absolute",
    bottom : 0,
    right : 0,
    left : 0,
  }
})