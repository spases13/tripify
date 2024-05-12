import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Fonts from "../fonts/Fonts";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

export default function SettingsScreen() {

  const { theme, toggleTheme } : any = useContext(ThemeContext);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : theme.white
    },
  });

  return (
    <View style={styles.container}>
      <Text style={{fontFamily : Fonts.urbanist_700 , color : theme.black}} variant="headlineMedium">Settings!</Text>
    </View>
  );
}