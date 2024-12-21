import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../styles/colors';
import {BORDER_RADIUS} from '../styles/constants.ts';

interface HorizontalCounterProps {
  value: number;
  plus: () => void;
  minus: () => void;
}

const CounterButton: React.FC<HorizontalCounterProps> = ({
  value = 0,
  plus,
  minus,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.buttonLeft]}
        onPress={minus}>
        <Text style={[styles.buttonText, styles.leftBtnText]}>-</Text>
      </TouchableOpacity>

      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{value}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={plus}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 17,
    fontWeight: '700',
    color: COLORS.white,
  },
  valueContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  valueText: {
    fontSize: 17,
    color: COLORS.white,
    fontWeight: '700',
  },
  buttonLeft: {},
  leftBtnText: {},
});

export default CounterButton;
