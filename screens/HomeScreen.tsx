import { ScrollView, StyleSheet, View } from "react-native";
import Colors from "../colors/Colors";
import { SafeAreaProvider, SafeAreaView } 
from "react-native-safe-area-context";
import Header from "../components/Header";
import HomeSearchBar from "../components/HomeSearchBar";
import CardsScroller from "../components/CardsScroller";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

export default function HomeScreen() {

  const { theme, toggleTheme } : any= useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex : 1,
      backgroundColor : theme.white
    },
  });

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

