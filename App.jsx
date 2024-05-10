import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./screens/MainScreen";
import { View } from "react-native";
import { Urbanist_400Regular, Urbanist_500Medium, Urbanist_600SemiBold, Urbanist_700Bold, Urbanist_800ExtraBold, useFonts } from '@expo-google-fonts/urbanist';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from "./screens/onboarding/OnboardingScreen";
import SignupScreen from "./screens/signup/SignupScreen";
import DestinationDetails from "./screens/detinationDetails/DestinationDetails";
import HumanVerificationScreen from "./screens/humanVerificationScreen/HumanVerificationScreen";
import TravelPreferencesScreen from "./screens/travelPreferences/TravelPreferencesScreen";
import PersonalTouchScreen from "./screens/personalTouchScreen/PersonalTouchScreen";


export default function App() {

  const Stack = createStackNavigator();

  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
    Urbanist_800ExtraBold
  });

  if (!fontsLoaded) {
    return <View></View>;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen options={{headerShown : false}} name="Main" component={MainScreen} />
          <Stack.Screen options={{headerShown : false}} name="Onboarding" component={OnboardingScreen}/>
          <Stack.Screen options={{headerShown : false}} name="Signup" component={SignupScreen}/>
          <Stack.Screen options={{headerShown : false}} name="DestinationDetails" component={DestinationDetails}/>
          <Stack.Screen options={{headerShown : false}} name="HumanVerification" component={HumanVerificationScreen}/>
          <Stack.Screen options={{headerShown : false}} name="TravelPreferencesScreen" component={TravelPreferencesScreen}/>
          <Stack.Screen options={{headerShown : false}} name="PersonalTouchScreen" component={PersonalTouchScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}