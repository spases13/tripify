import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Fonts from '../fonts/Fonts'
import Colors from '../colors/Colors'
import { TouchableOpacity } from 'react-native'

export default function TravelPreferenceCard(props : any) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={props.onPress} style = {[styles.card , props.selected && styles.card_selected]}>
      <Text style={[styles.card_name , props.selected && styles.card_name_selected]}>{props.name} {props.emoji}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card : {
    padding : 15,
    backgroundColor : Colors.white,
    borderRadius : 100,
    flexDirection : "row",
    borderWidth : 1,
    borderColor : Colors.gray_500,
    gap : 10
  },
  card_selected : {
    backgroundColor : Colors.primary,
    color : Colors.white
  },
  card_name : {
    fontFamily : Fonts.urbanist_700,
    color : Colors.black,
    fontSize : 16,
  },
  card_name_selected : {
    color : Colors.white,
  },
})