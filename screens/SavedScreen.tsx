import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Fonts from "../fonts/Fonts";

export default function SavedScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily : Fonts.urbanist_700}} variant="headlineMedium">Saved!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : "#fff"
  },
});