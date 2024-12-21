import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../styles/colors.ts';

const EventRugbyScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/branch.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    />
  );
};

export default EventRugbyScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)', // Полупрозрачный фон
  },
  buttonStyle: {
    marginBottom: 16,
  },
  container: {
    height: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  text: {
    paddingTop: 20,
    fontSize: 20,
    color: COLORS.white,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    color: COLORS.secondary,
    fontWeight: '600',
  },
  titleContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
});
