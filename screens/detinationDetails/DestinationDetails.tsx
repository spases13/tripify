import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../colors/Colors'
import { StatusBar } from 'react-native'
import IconButton from '../../library/IconButton'
import GlobalStyles from '../../global_styles/GlobalStyles'
import Fonts from '../../fonts/Fonts'
import { useNavigation } from '@react-navigation/native'

export default function DestinationDetails({route} : any) {
  const {data , flag} = route.params

  const {width , height} = Dimensions.get("screen")
  const navigation = useNavigation()

  return (
    <ScrollView style = {{flex : 1 , backgroundColor : Colors.white}}>
      {/* <Text>ID = {data.id ?? "Null"}</Text> */}
      <StatusBar barStyle='light-content' backgroundColor={"transparent"} translucent/>
      <View style = {{height : height * 0.5 ,width : "100%"}}>
      <View style = {{position : "absolute" , top  : 50 , zIndex : 1 , paddingHorizontal : 20 , gap : 20 , flexDirection :"row" , justifyContent  :"space-between" , width  : "100%"}}>
        <IconButton onPress={()=> navigation.goBack()} color={Colors.black} size={24} type="octicon" name="arrow-left"/>
        <IconButton style={{marginLeft : "auto"}} color={Colors.black} size={24} type="octicon" name="bookmark"/>
        <IconButton color={Colors.black} size={20} type="octicon" name="share-android"/>
      </View>
      <Image source = {{uri : data.imgSrc}} style= {{height : "100%" , width : "100%" , borderBottomLeftRadius : 0 , borderBottomRightRadius : 0  , resizeMode : "cover"}} />
      </View>
      <View style = {{padding : GlobalStyles.paddingScreen}}>
        <Text style = {{fontFamily : Fonts.urbanist_700 , marginBottom : 20, fontSize : 26 , includeFontPadding : false}}>{data.name}</Text>
        <View style = {{flexDirection  : "row" , gap  : 10  , marginBottom : 20 , alignItems : "center"}}>
          <Image style = {styles.flag} source={{ uri: flag }} />
          <Text style = {{fontFamily : Fonts.urbanist_500 ,  fontSize  : 14 , includeFontPadding : false, color : Colors.gray_900}}>{data.countryName}</Text>
      </View>
      <Text style = {{fontFamily : Fonts.urbanist_500 , lineHeight : 28, fontSize  : 14 , includeFontPadding : false, color : Colors.gray_900}}>{data.description}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  flag: {
    width: 28,
    height: 19.5,
    resizeMode: "stretch",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Colors.gray_500,
  },
})