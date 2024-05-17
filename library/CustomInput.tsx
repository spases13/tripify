import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Fonts from '../fonts/Fonts';
import { ThemeContext } from '../theme/ThemeContext';
import { Icon } from 'react-native-elements';

interface CustomInputProps {
  icon?: any;
  keyboardType?: any;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value : string,
  label?: string;
  autoFocus ?:  boolean
  autoComplete ?:  any,
  returnKeyType ?: any ,
  onSubmitEditing ?: any
}

export default function CustomInput(props: CustomInputProps) {
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

  const clearInput = () => {
    props.onChangeText("")
  }

  return (
    <View>
      {props.label && props.label.length > 0 && <Text style={styles.labelText}>{props.label}</Text>}
      <View style={{ width: "100%", flexDirection: 'row', justifyContent: "center" }}>
        <View style={styles.searchInputContainer}>
          {props.icon ? <Ionicons onPress={handleIconPress} style={styles.icon} name={props.icon} /> : <View style={{ marginLeft: 20 }} />}
          <TextInput
            ref={inputRef}
            onChangeText={(text)=> props.onChangeText(text)}
            value={props.value}
            autoComplete={props.autoComplete}
            placeholder={props.placeholder}
            onSubmitEditing={props.onSubmitEditing}
            autoFocus = {props.autoFocus}
            returnKeyType={props.returnKeyType}
            keyboardType={props.keyboardType ?? 'default'}
            selectionColor={theme.black}
            cursorColor={theme.primary}
            placeholderTextColor={theme.gray}
            underlineColorAndroid={theme.gray_300}
            style={styles.searchInput}
          />
         {
          props.value && props.value?.length > 0 && <TouchableOpacity onPress={() => clearInput()} style = {{height : "100%" , alignItems : "center" , justifyContent : "center" , aspectRatio : 1 , backgroundColor : "transparent" , zIndex : 1 , position : "absolute" , right : 0}}>
            <Icon color={theme.gray_700} type='ionicons' name='close' />
          </TouchableOpacity>
         }
        </View>
      </View>
    </View>
  );
}