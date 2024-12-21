import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../styles/colors.ts';

interface HeaderLogoProps {
  title: string;
}
const HeaderText = ({title}: HeaderLogoProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingVertical: 16,
  },
  text: {
    fontSize: 26,
    color: COLORS.white,
    fontWeight: '900',
  },
});

export default HeaderText;
