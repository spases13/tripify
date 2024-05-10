import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import GlobalStyles from "../global_styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Colors from "../colors/Colors";

export default function CustomHeaderNavigation(props: any) {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.backArrowButton}>
        <Icon size={28} type="octicon" name="arrow-left" />
      </TouchableOpacity>
      {props.children}
      {props.onlyTwo && (
        <View style={[[styles.backArrowButton , {paddingLeft : 0 , opacity : 0}]]}>
          <Icon size={28} color={Colors.black} type="octicon" name="arrow-left" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor  : "orange",
    paddingRight: GlobalStyles.paddingScreen,
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  backArrowButton: {
    padding: 10,
    // backgroundColor : "cyan",
    paddingHorizontal: GlobalStyles.paddingScreen,
  },
});
