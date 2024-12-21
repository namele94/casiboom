import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import COLORS from '../../styles/colors.ts';
import CustomButton from '../../components/CustomButton.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';

const qrValue =
  'https://www.wondercide.com/cdn/shop/articles/Upside_down_gray_cat.png?v=1685551065&width=1100';

const ConfirmOrderScreen = ({navigation}: any) => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/success.png')}
          style={styles.icon}
        />
      </View>
      <Text style={styles.successText}>{'Ваш заказ успешно\nразмещен'}</Text>

      <View style={styles.qrContainer}>
        <QRCode value={qrValue} size={160} color={COLORS.black} />
      </View>
      <CustomButton
        onPress={() => navigation.navigate('DrawerScreens')}
        title={'НА ГЛАВНУЮ'}
        containerStyle={styles.buttonContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    marginTop: 40,
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 32,
  },
  qrContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#5C0DAC',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    position: 'absolute',
    bottom: 40,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer: {
    ...Platform.select({
      android: {
        marginBottom: 20,
      },
    }),
  },
  icon: {
    width: 240,
    height: 240,
  },
});

export default ConfirmOrderScreen;
