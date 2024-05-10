import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Fonts from "../fonts/Fonts";

export default function MyTripsScreen() {
    return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={{fontFamily : Fonts.urbanist_700}}>My Trips!</Text>
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