import { ScrollView, StyleSheet, View } from "react-native";
import Colors from "../colors/Colors";
import { SafeAreaProvider, SafeAreaView } 
from "react-native-safe-area-context";
import Header from "../components/Header";
import HomeSearchBar from "../components/HomeSearchBar";
import CardsScroller from "../components/CardsScroller";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header/>
          <HomeSearchBar/>
          <CardsScroller/>
          <CardsScroller/>
          <CardsScroller/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : Colors.white
  },
});