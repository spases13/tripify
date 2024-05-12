import React, { useContext, useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Fonts from '../fonts/Fonts';
import { ThemeContext } from '../theme/ThemeContext';

interface CustomInputProps {
  icon?: any;
  keyboardType?: any;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  label?: string;
}

export default function CustomInput({ icon, keyboardType, placeholder, onChangeText, label }: CustomInputProps) {
  const inputRef = useRef<TextInput>(null);
  const { theme , toggleTheme } : any = useContext(ThemeContext);

  const handleIconPress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const styles = StyleSheet.create({
    searchInputContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      flex: 1,
      width: "100%",
      overflow: "hidden",
      height: 60,
      backgroundColor: theme.gray_300,
    },
    icon: {
      fontSize: 24,
      paddingHorizontal: 15,
      color: theme.gray,
    },
    searchInput: {
      flex: 1,
      height: "100%",
      fontFamily: Fonts.urbanist_600,
      fontSize: 16,
      color: theme.black,
    },
    labelText: {
      color : theme.black,
      fontFamily: Fonts.urbanist_600,
      marginBottom: 15,
      fontSize: 16,
    },
  });

  return (
    <View>
      {label && label.length > 0 && <Text style={styles.labelText}>{label}</Text>}
      <View style={{ width: "100%", flexDirection: 'row', justifyContent: "center" }}>
        <View style={styles.searchInputContainer}>
          {icon ? <Ionicons onPress={handleIconPress} style={styles.icon} name={icon} /> : <View style={{ marginLeft: 20 }} />}
          <TextInput
            ref={inputRef}
            onChangeText={onChangeText}
            keyboardType={keyboardType ?? 'default'}
            placeholder={placeholder}
            selectionColor={theme.black}
            cursorColor={theme.black}
            placeholderTextColor={theme.gray}
            underlineColorAndroid={theme.gray_300}
            style={styles.searchInput}
          />
        </View>
      </View>
    </View>
  );
}