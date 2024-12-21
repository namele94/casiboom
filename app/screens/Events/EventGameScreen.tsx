import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../styles/colors.ts';

const EventGameScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/pizza.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.text}>
            Приглашаем вас на захватывающий Танцевальный Вечер 17 января в
            19:00!
          </Text>
        </View>
      </SafeAreaView>
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>
          Ожидайте вечер полный ритма, энергии и веселья, который оставит
          незабываемые впечатления!
        </Text>
      </View>
    </ImageBackground>
  );
};

export default EventGameScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontWeight: '900',
    color: COLORS.white,
    fontSize: 20,
  },
  topContainer: {
    top: 60,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 25,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    marginHorizontal: 10,
  },
  bottomContainer: {
    paddingBottom: 140,
  },
});
