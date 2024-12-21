import React from 'react';
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import FastImage from 'react-native-fast-image';
import {useStore} from '../stores/StoreContext.tsx';
import CounterButton from './CounterButton.tsx';
import {observer} from 'mobx-react';
import {BORDER_RADIUS} from '../styles/constants.ts';
import {useNavigation} from '@react-navigation/native';

interface ItemViewProps {
  item: Product;
}

const ItemView: React.FC<ItemViewProps> = ({item}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus, setSelectedItem} = productStore;
  const quantity = productStore.getItemQuantity(item.id);
  const {navigate} = useNavigation();

  const handleAddToCart = () => {
    productStore.handlePlus(item);
  };

  function onPressItem() {
    setSelectedItem(item);
    // @ts-ignore
    navigate('DetailScreen');
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressItem} style={styles.imgContainer}>
        <FastImage
          source={{uri: item.image}}
          style={styles.pizzaImage}
          resizeMode="cover"
        />
      </Pressable>
      <View style={styles.contentContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
          {quantity > 0 ? (
            <CounterButton
              value={quantity}
              plus={() => handlePlus(item)}
              minus={() => handleMinus(item.id)}
            />
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
              <Text style={styles.buttonText}>ЗАКАЗАТЬ</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  pizzaImage: {
    width: 140,
    height: 110,
    alignSelf: 'center',
    zIndex: 99999,
    borderRadius: 20,
  },
  container: {
    width: width * 0.45,
    height: width * 0.55,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
    marginBottom: 16,
  },
  contentContainer: {
    height: '40%',
    justifyContent: 'flex-end',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  flagIcon: {
    width: 20,
    height: 14,
    marginRight: 6,
  },
  name: {
    marginTop: 4,
    marginLeft: 2,
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.secondary,
    width: '90%',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.secondary,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS,
    borderColor: COLORS.primary,
    textAlign: 'center',
    padding: 2,
    paddingHorizontal: 4,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 22,
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
  imgContainer: {
    height: '60%',
    justifyContent: 'flex-start',
  },
});

export default observer(ItemView);
