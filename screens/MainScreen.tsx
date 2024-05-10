import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconHomeSolid from '../assets/icons/solid/IconHomeSolid';
import IconHomeOutlined from '../assets/icons/outlined/IconHomeOutlined';
import IconHeartSolid from '../assets/icons/solid/IconHeartSolid';
import IconHeartOutlined from '../assets/icons/outlined/IconHeartOutlined';
import IconLocationSolid from '../assets/icons/solid/IconLocationSolid';
import IconLocationOutlined from '../assets/icons/outlined/IconLocationOutlined';
import IconSettingSolid from '../assets/icons/solid/IconSettingSolid';
import IconSettingOutlined from '../assets/icons/outlined/IconSettingOutlined';
import Fonts from '../fonts/Fonts';
import Colors from '../colors/Colors';
import HomeScreen from './HomeScreen';
import MyTripsScreen from './MyTripsScreen';
import SavedScreen from './SavedScreen';
import SettingsScreen from './SettingsScreen';


const MainScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
    <StatusBar backgroundColor={Colors.white} barStyle='dark-content'/> 
    <NavigationContainer independent>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown : false,
        tabBarIcon: ({ color, focused }) => {
          let icon : any;
          if (route.name === "Home") {
            icon = focused ? <IconHomeSolid fill = {color} /> : <IconHomeOutlined fill = {color} />;
          }
          else if (route.name === "My Trips") {
            icon = focused ? <IconLocationSolid fill = {color} /> : <IconLocationOutlined fill = {color} />;
          }
          else if (route.name === "Saved") {
            icon = focused ? <IconHeartSolid fill = {color} /> : <IconHeartOutlined fill = {color} />;
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
  </>

  )
}

export default MainScreen