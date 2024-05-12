import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Fonts from '../fonts/Fonts';
import { ThemeContext } from '../theme/ThemeContext';

export default function TravelPreferenceCard(props : any) {
  const { theme, toggleTheme } : any= useContext(ThemeContext);

  const styles = StyleSheet.create({
    card: {
      padding: 15,
      borderRadius: 100,
      flexDirection: 'row',
      borderWidth: 2,
      gap: 10,
      borderColor: theme.gray_300,
      backgroundColor: theme.white,
    },
    card_selected: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
    },
    card_name: {
      fontFamily: Fonts.urbanist_700,
      color: theme.black,
      fontSize: 16,
    },
    card_name_selected: {
      color: theme.white,
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.onPress}
      style={[styles.card, props.selected && styles.card_selected]}
    >
      <Text style={[styles.card_name, props.selected && styles.card_name_selected]}>
        {props.name} {props.emoji}
      </Text>
    </TouchableOpacity>
  );
}