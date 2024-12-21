import {Dimensions, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EventMovieScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/masterclass.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    />
  );
};

export default EventMovieScreen;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  stickerImg: {
    width: 350,
    height: 250,
  },
  text1: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    position: 'absolute',
    bottom: height * 0.22,
    left: width * 0.12,
    width: '80%',
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    position: 'absolute',
    bottom: height * 0.12,
    left: width * 0.15,
    width: '70%',
  },
});
