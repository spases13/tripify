import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Icon } from 'react-native-elements'
import Colors from '../colors/Colors'
import { ThemeContext } from '../theme/ThemeContext'

interface IconButton { 
  name : string , 
  type : string ,
  size  ?: number , 
  color ?: string , 
  style ?: any,
  onPress ?: ()=>void
}

export default function IconButton(props :  IconButton) {

  const { theme, toggleTheme } : any= useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.4} style = {[styles.iconButton ,{backgroundColor : theme.white},  props.style]}>
      <Icon name={props.name} type={props.type} color={props.color} size={props.size} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconButton : { 
    height : 44,
    width : 44,
    justifyContent : "center",
    alignItems : "center",
    borderRadius : 40,
    elevation : 2
  },
})