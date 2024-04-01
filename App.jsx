import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import IconHomeOutlined from './assets/icons/outlined/IconHomeOutlined.jsx';
import IconHomeSolid from './assets/icons/solid/IconHomeSolid.jsx';
import IconSettingOutlined from './assets/icons/outlined/IconSettingOutlined.jsx';
import IconSettingSolid from './assets/icons/solid/IconSettingSolid.jsx';
import MyTripsScreen from "./screens/MyTripsScreen";
import SavedScreen from "./screens/SavedScreen";
import IconLocationSolid from "./assets/icons/solid/IconLocationSolid";
import IconLocationOutlined from "./assets/icons/outlined/IconLocationOutlined";
import IconHeartSolid from "./assets/icons/solid/IconHeartSolid";
import IconHeartOutlined from "./assets/icons/outlined/IconHeartOutlined";
import { View } from "react-native";
import { Urbanist_400Regular, Urbanist_500Medium , Urbanist_600SemiBold , Urbanist_700Bold , Urbanist_800ExtraBold, useFonts } from '@expo-google-fonts/urbanist';
import Colors from "./colors/Colors";
import Fonts from "./fonts/Fonts";

export default function App() {
  const Tab = createBottomTabNavigator();

  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium ,
    Urbanist_600SemiBold ,
    Urbanist_700Bold,
    Urbanist_800ExtraBold
  });

  if (!fontsLoaded) {
    return <View></View>;
  } else {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown : false,
          tabBarIcon: ({ color, focused }) => {
            let icon;
            if (route.name === "Home") {
              icon = focused ? <IconHomeSolid fill = {color} /> : <IconHomeOutlined fill = {color} />;
            } 
            else if (route.name === "Saved") {
              icon = focused ? <IconHeartSolid fill = {color} /> : <IconHeartOutlined fill = {color} />;
            }
            else if (route.name === "My Trips") {
              icon = focused ? <IconLocationSolid fill = {color} /> : <IconLocationOutlined fill = {color} />;
            }
            else if (route.name === "Settings") {
              icon = focused ? <IconSettingSolid fill = {color} /> : <IconSettingOutlined fill = {color} />;
            }
            return icon;
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily : Fonts.urbanist_700
          },
          tabBarStyle : {height  : 56 , paddingBottom : 10 , elevation : 0 , backgroundColor : Colors.white , borderColor  : Colors.white},
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.gray,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Trips" component={MyTripsScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
}