import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import Colors from '../colors/Colors'

interface IconButton { 
  name : string , 
  type : string ,
  size  ?: number , 
  color ?: string , 
  style ?: any,
  onPress ?: ()=>void
}

export default function IconButton(props :  IconButton) {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.4} style = {[styles.iconButton , props.style]}>
      <Icon {...props} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconButton : { 
    backgroundColor : Colors.white,
    height : 44,
    width : 44,
    justifyContent : "center",
    alignItems : "center",
    borderRadius : 40,
    elevation : 2
  },
})