import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../../global_styles/GlobalStyles";
import Fonts from "../../fonts/Fonts";
import CustomHeaderNavigation from "../../library/CustomHeaderNavigation";
import ProgressionBar from "../../library/ProgressionBar";
import CustomButton from "../../library/CustomButton";
import CustomInput from "../../library/CustomInput";
import Footer from "../../library/Footer";
import { Icon } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../../theme/ThemeContext";

export default function PersonalTouchScreen() {
  const [avatarImage, setAvatarImage] = useState({
    src: require("../../assets/users/avatar.png"),
    type: "asset",
  });
  const { theme , toggleTheme } : any = useContext(ThemeContext);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setAvatarImage({ src: result.assets[0].uri, type: "url" });
      console.log(result.assets[0].uri);
    }
  };

const navigation : any = useNavigation();
  
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    padding: GlobalStyles.paddingScreen,
  },
  title: {
    lineHeight: 40,
    includeFontPadding: false,
    fontSize: 26,
    fontFamily: Fonts.urbanist_700,
    marginBottom: 15,
  },
  description: {
    includeFontPadding: false,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.urbanist_500,
  },
  avatar_container: {
    alignItems: "center",
    marginTop: 30,
  },
  avatar: {
    width: 120,
    height: 120,
  },
  avatar_image: {
    borderRadius: 500,
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  edit_button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: theme.primary,
    marginLeft: "auto",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

  return (
    <>
      <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: theme.white }]}>
        <CustomHeaderNavigation onlyTwo>
          <ProgressionBar progressValue={3 / 3} />
        </CustomHeaderNavigation>
        <ScrollView contentContainerStyle={[styles.container]}>
          <View>
            <Text style={[styles.title, { color: theme.black }]}>Add a personal touch 👤</Text>
            <Text style={[styles.description, { color: theme.gray_900 }]}>
              To enhance your travel journey, we'd love to know more about you.
            </Text>
          </View>
          <View style={styles.avatar_container}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatar_image}
                source={
                  avatarImage.type === "url"
                    ? { uri: avatarImage.src }
                    : avatarImage.src
                }
              />
              <TouchableOpacity style={styles.edit_button} onPress={pickImage}>
                <Icon
                  size={12}
                  color={theme.white}
                  type="font-awesome-5"
                  name="pen"
                />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={{ marginTop: 30, flexDirection: "column", gap: 30, flex: 1 }}
          >
            <CustomInput
              icon="people"
              label="Full Name"
              placeholder="Full Name"
            />
            <CustomInput
              icon="mail"
              label="Email"
              keyboardType="email-address"
              placeholder="Email"
            />
            <CustomInput icon="map" label="Country" placeholder="Country" />
            <CustomInput
              icon="call"
              label="Phone Number"
              keyboardType="phone-pad"
              placeholder="Phone Number"
            />
          </ScrollView>
        </ScrollView>
        <Footer relative>
          <CustomButton onPress={() => navigation.navigate("AllSetScreen")} title="Continue" />
        </Footer>
      </SafeAreaView>
    </>
  );
}
