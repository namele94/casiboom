import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ReservationScreen from '../screens/ReservationScreen';
import EventsScreen from '../screens/EventsScreen';
import CustomDrawer from '../components/CustomDrawer';
import COLORS from '../styles/colors.ts';
import ContactScreen from '../screens/ContactScreen.tsx';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: COLORS.mainBG},
        headerTintColor: COLORS.white,
        headerShadowVisible: false,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={styles.cartIconContainer}>
            <Image
              source={require('../assets/cart.png')}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ),
      })}>
      <Drawer.Screen
        options={{
          headerTitleAlign: 'center',
          title: 'Какую еду вы хотите?',
        }}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          headerTitle: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        name="Event"
        component={EventsScreen}
      />
      <Drawer.Screen
        options={{headerTitle: ''}}
        name="Reservation"
        component={ReservationScreen}
      />
      <Drawer.Screen
        options={{headerTitle: ''}}
        name="Contact"
        component={ContactScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  cartIconContainer: {
    paddingRight: 12,
  },
  leftIconContainer: {
    marginLeft: 12,
  },
});
