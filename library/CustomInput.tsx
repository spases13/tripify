import React, { useRef } from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Colors from '../colors/Colors';
import Fonts from '../fonts/Fonts';

interface CustomInputProps {
  icon?: any;
  keyboardType?: any;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  label?: string;
}

export default function CustomInput({ icon, keyboardType, placeholder, onChangeText, label }: CustomInputProps) {
  const inputRef = useRef<TextInput>(null);

  const handleIconPress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View>
      {label && label.length > 0 && <Text style={{ fontFamily: Fonts.urbanist_600, marginBottom: 15, fontSize: 16 }}>{label}</Text>}
      <View style={{ width: "100%", flexDirection: 'row', justifyContent: "center" }}>
        <View style={[styles.searchInputContainer]}>
          {icon ? <Ionicons onPress={handleIconPress} style={styles.icon} name={icon} /> : <View style={{ marginLeft: 20 }} />}
          <TextInput
            ref={inputRef}
            onChangeText={onChangeText}
            keyboardType={keyboardType ?? 'default'}
            placeholder={placeholder}
            selectionColor={"#000"}
            cursorColor={"#000"}
            placeholderTextColor={Colors.gray}
            underlineColorAndroid={Colors.gray_100}
            style={styles.searchInput}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    flex: 1,
    maxWidth: 500,
    overflow: "hidden",
    height: 60,
    backgroundColor: Colors.gray_100,
  },
  icon: {
    fontSize: 24,
    paddingHorizontal: 15,
    color: Colors.gray
  },
  searchInput: {
    flex: 1,
    height: "100%",
    backgroundColor: Colors.gray_100,
    fontFamily: Fonts.urbanist_600,
    fontSize: 16,
    color: Colors.black
  }
});
