import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../styles/colors.ts';

const EventsScreen = (props: any) => {
  return (
    <ImageBackground
      source={require('../assets/events.png')}
      style={styles.backgroundImage}
      resizeMode={'stretch'}>
      <SafeAreaView edges={['bottom', 'top']} style={styles.safeArea} />
      <View style={styles.buttonsContainer}>
        <View style={styles.rowContainer}>
          <CustomButton
            onPress={() => props.navigation.navigate('EventGameScreen')}
            title={'Танцевальный Вечер'}
            containerStyle={styles.buttonStyle}
            outline
          />
          <Text style={styles.buttonText}>{'17 января\nв 20:00'}</Text>
        </View>
        <View style={styles.rowContainer}>
          <CustomButton
            onPress={() => props.navigation.navigate('EventMovieScreen')}
            title={'Вечер Мексиканской Кухни'}
            containerStyle={styles.buttonStyle}
            outline
          />
          <Text style={styles.buttonText}>{'24 января\nв 19:00'}</Text>
        </View>
        <View style={styles.rowContainer}>
          <CustomButton
            onPress={() => props.navigation.navigate('EventRugbyScreen')}
            title={'Ночь Баскетбола'}
            containerStyle={styles.buttonStyle}
            outline
          />
          <Text style={styles.buttonText}>{'1 февраля\nв 16:00'} </Text>
        </View>
        <View style={styles.rowContainer}>
          <CustomButton
            onPress={() => props.navigation.navigate('EventCricketScreen')}
            title={'Олимпийский бранч'}
            containerStyle={styles.buttonStyle}
            outline
          />
          <Text style={styles.buttonText}>{'5 февраля\nв 21:00'}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  buttonStyle: {
    marginBottom: 16,
    width: '70%',
  },
  buttonsContainer: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default EventsScreen;
