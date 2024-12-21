import React from 'react';
import {Dimensions, Image, Pressable, StyleSheet, View} from 'react-native';
import COLORS from '../styles/colors.ts';

interface HeaderLogoProps {
  navToCart?: () => void;
}
const HeaderLogo = ({navToCart}: HeaderLogoProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')} // Замените на свой логотип
        style={styles.logo}
        resizeMode="contain"
      />
      {navToCart && (
        <Pressable onPress={navToCart} style={styles.cartContainer}>
          <Image
            source={require('../assets/cart.png')} // Замените на свой логотип
            style={styles.cart}
            resizeMode="contain"
          />
        </Pressable>
      )}
    </View>
  );
};
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapContainer: {},
  container: {
    width: width * 0.79,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: width * 0.15,
  },
  logo: {
    width: 120,
    height: 40,
  },
  cart: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  cartContainer: {
    paddingLeft: width * 0.23,
  },
});

export default HeaderLogo;
