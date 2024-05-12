import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { StatusBar } from 'react-native'
import IconButton from '../../library/IconButton'
import GlobalStyles from '../../global_styles/GlobalStyles'
import Fonts from '../../fonts/Fonts'
import { useNavigation } from '@react-navigation/native'
import { ThemeContext } from '../../theme/ThemeContext'

export default function DestinationDetails({ route }: any) {
  const { data, flag } = route.params;
  const { width, height } = Dimensions.get("screen");
  const navigation = useNavigation();
  const { theme }: any = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: theme.white
    },
    imageContainer: {
      height: Dimensions.get("screen").height * 0.5,
      width: "100%",
    },
    iconContainer: {
      position: "absolute",
      top: 50,
      zIndex: 1,
      paddingHorizontal: 20,
      gap : 10,
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    bookmarkIcon: {
      marginLeft: "auto",
    },
    image: {
      height: "100%",
      width: "100%",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      resizeMode: "cover",
    },
    contentContainer: {
      padding: GlobalStyles.paddingScreen,
    },
    title: {
      fontFamily: Fonts.urbanist_700,
      marginBottom: 20,
      fontSize: 26,
      color: theme.black,
    },
    detailsContainer: {
      flexDirection: "row",
      gap: 10,
      marginBottom: 20,
      alignItems: "center",
    },
    flag: {
      width: 28,
      height: 19.5,
      resizeMode: "stretch",
      borderRadius: 3,
      borderWidth: 1,
      borderColor : theme.gray
    },
    countryName: {
      fontFamily: Fonts.urbanist_500,
      fontSize: 14,
      color: theme.gray_900,
    },
    description: {
      fontFamily: Fonts.urbanist_500,
      lineHeight: 28,
      fontSize: 14,
      color: theme.gray_900,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.name === "lightTheme" ?  'light-content' : "dark-content"} backgroundColor={"transparent"} translucent />
      <View style={styles.imageContainer}>
        <View style={styles.iconContainer}>
          <IconButton onPress={() => navigation.goBack()} color={theme.black} size={24} type="octicon" name="arrow-left" />
          <IconButton style={styles.bookmarkIcon} color={theme.black} size={24} type="octicon" name="bookmark" />
          <IconButton color={theme.black} size={20} type="octicon" name="share-android" />
        </View>
        <Image source={{ uri: data.imgSrc }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.detailsContainer}>
          <Image style={styles.flag} source={{ uri: flag }} />
          <Text style={styles.countryName}>{data.countryName}</Text>
        </View>
        <Text style={styles.description}>{data.description}</Text>
      </View>
    </ScrollView>
  )
}