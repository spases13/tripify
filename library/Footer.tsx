import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../global_styles/GlobalStyles'
import Colors from '../colors/Colors'

export default function Footer({children}) {
  return (
    <View style = {styles.footer}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  footer : {
    maxHeight : 100,
    padding : GlobalStyles.paddingScreen,
    backgroundColor : Colors.white,
    elevation : 2,
    borderTopWidth : 3,
    borderTopColor : Colors.gray_100,
    width : "100%",
    position :"absolute",
    bottom : 0,
    left : 0
  }
})