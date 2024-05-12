import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import Colors from '../colors/Colors'
import { ThemeContext } from '../theme/ThemeContext'

export default function ProgressionBar(props : any) {

  const progress = props.progressValue

  const convertDoubleToPercentage : any = (progress : number)=>{
    return `${(progress*100).toString()}%`
  }

  const { theme, toggleTheme } : any= useContext(ThemeContext);


  return (
    <View style = {[styles.progressBarContainer , {backgroundColor : theme.gray_300}]}>
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
  },
  progressBar : {
    height : "100%" , 
    borderRadius : 10,
    backgroundColor : Colors.primary
  }
})