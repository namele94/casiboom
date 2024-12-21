import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BORDER_RADIUS} from '../styles/constants.ts';
import FastImage from 'react-native-fast-image';
import CounterButton from '../components/CounterButton.tsx';
import {useNavigation} from '@react-navigation/native';
import HeaderText from '../components/HeaderText.tsx';

const DetailScreen = () => {
  const {productStore} = useStore();
  const {selectedItem, handlePlus, handleMinus, cartTotal} = productStore;
  const quantity = productStore.getItemQuantity(selectedItem.id);
  const {navigate} = useNavigation();

  const handleAddToCart = () => {
    handlePlus(selectedItem);
  };

  const navigateToConfirmScreen = () => {
    // @ts-ignore
    navigate('Cart');
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.mainContainer}>
      <View style={styles.container}>
        <HeaderText title={'Корзина'} />

        <View style={styles.imageContainer}>
          <FastImage source={{uri: selectedItem?.image}} style={styles.image} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{selectedItem.name}</Text>
          <Text style={styles.label}>Общая цена</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${selectedItem.price}</Text>
            {quantity > 0 ? (
              <CounterButton
                value={quantity}
                plus={() => handlePlus(selectedItem)}
                minus={() => handleMinus(selectedItem.id)}
              />
            ) : (
              <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
                <Text style={styles.buttonText}>ЗАКАЗАТЬ</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      {cartTotal && (
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={navigateToConfirmScreen}
              style={styles.cartButton}>
              <Text style={styles.cartButtonText}>Купить сейчас</Text>
              <Image
                source={require('../assets/cart2.png')}
                style={styles.cartIcon}
                tintColor={COLORS.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.mainBG,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBG,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: COLORS.white,
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS,
    borderColor: COLORS.primary,
    textAlign: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: BORDER_RADIUS,
    marginLeft: 8,
  },
  buttonText: {
    fontSize: 13,
    color: COLORS.secondary,
    lineHeight: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
  imageContainer: {
    marginHorizontal: 16,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginTop: 40,
  },
  label: {
    marginTop: 10,
    fontSize: 20,
    color: COLORS.white,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  contentContainer: {
    paddingLeft: 10,
    paddingTop: 20,
    marginHorizontal: 10,
  },
  bottomContainer: {
    ...Platform.select({
      android: {
        paddingBottom: 20,
      },
    }),
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
  cartButton: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  cartButtonText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '500',
  },
  cartIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default observer(DetailScreen);
