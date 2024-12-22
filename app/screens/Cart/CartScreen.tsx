import React from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../stores/StoreContext';
import COLORS from '../../styles/colors';
import CustomButton from '../../components/CustomButton.tsx';
import CartItemView from '../../components/CartItemView.tsx';
import HeaderText from '../../components/HeaderText.tsx';

const CartScreen = ({navigation}: any) => {
  const {productStore} = useStore();
  const {cart, cartTotal, clearCart} = productStore;

  const navigateToConfirmScreen = () => {
    navigation.navigate('ConfirmOrder');
    clearCart();
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.container}>
        <HeaderText title={'Корзина'} />
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CartItemView item={item} />}
          contentContainerStyle={{paddingBottom: 100}}
          ListEmptyComponent={<EmptyCartView />}
        />

        {cartTotal > 0 && (
          <View style={styles.bottomContainer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Всего</Text>
              <Text style={styles.totalText}>${cartTotal}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                onPress={navigateToConfirmScreen}
                title={'Перейти к оплате'}
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const EmptyCartView = () => {
  return (
    <View style={styles.emptyCartContainer}>
      <Text style={styles.emptyCartText}>Корзина пустая</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBG,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'right',
  },
  removeText: {
    color: COLORS.error,
    textAlign: 'right',
  },
  emptyCartContainer: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 10,
  },
  emptyCartIcon: {
    width: 100,
    height: 100,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.white,
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
  emptyCartText: {
    fontSize: 24,
    color: COLORS.transparentWhite,
    fontWeight: '900',
  },
});

export default observer(CartScreen);
