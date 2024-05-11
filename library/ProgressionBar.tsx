import { StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../colors/Colors'

export default function ProgressionBar(props : any) {

  const progress = props.progressValue

  const convertDoubleToPercentage : any = (progress : number)=>{
    return `${(progress*100).toString()}%`
  }

  return (
    <View style = {[styles.progressBarContainer]}>
      <View style = {[styles.progressBar , {width : convertDoubleToPercentage(progress)}]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  progressBarContainer : {
    flex : 1,
    height : 10,
    borderRadius : 10,
    overflow : "hidden",
    backgroundColor : Colors.gray_300
  },
  progressBar : {
    height : "100%" , 
    borderRadius : 10,
    backgroundColor : Colors.primary
  }
})