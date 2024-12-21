import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import COLORS from '../styles/colors.ts';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  secondTitle?: string;
  containerStyle?: ViewStyle;
  outline?: boolean;
}

const CustomButton = ({
  onPress,
  title,
  secondTitle,
  containerStyle,
  outline,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, outline && styles.outline, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.buttonText, outline && styles.outlineText]}>
        {title}
      </Text>
      {secondTitle && (
        <Text style={[styles.buttonText, outline && styles.outlineText]}>
          {secondTitle}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 25,
    width: '90%',
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  outline: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  outlineText: {
    color: COLORS.black,
    fontWeight: '500',
  },
});
