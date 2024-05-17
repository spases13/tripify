import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import GlobalStyles from "../global_styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

export default function CustomHeaderNavigation(props: any) {
  const navigation = useNavigation();

  const { theme, toggleTheme } : any = useContext(ThemeContext);

  return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={props.onPressBackArrow ?? (() => navigation.goBack())}
          style={styles.backArrowButton}
        >
          <Icon color={theme.black} size={28} type="octicon" name="arrow-left" />
        </TouchableOpacity>
        {props.children}
        {props.onlyTwo && (
          <View
            style={[[styles.backArrowButton, { paddingLeft: 0, opacity: 0 }]]}
          >
            <Icon
              size={28}
              color={theme.black}
              type="octicon"
              name="arrow-left"
            />
          </View>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: GlobalStyles.paddingScreen,
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  backArrowButton: {
    padding: 10,
    paddingHorizontal: GlobalStyles.paddingScreen,
  },
});