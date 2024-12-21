import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CartStack from './stacks/CartStack.tsx';
import DrawerNavigator from './DrawerNavigator.tsx';
import ReservationSuccessScreen from '../screens/ReservationSuccessScreen.tsx';
import COLORS from '../styles/colors.ts';
import EventGameScreen from '../screens/Events/EventGameScreen.tsx';
import EventMovieScreen from '../screens/Events/EventMovieScreen.tsx';
import EventRugbyScreen from '../screens/Events/EventRugbyScreen.tsx';
import EventCricketScreen from '../screens/Events/EventCricketScreen.tsx';
import DetailScreen from '../screens/DetailScreen.tsx';

const Stack = createStackNavigator();

const DEFAULT_HEADER = {
  headerBackTitle: '',
  headerStyle: {backgroundColor: COLORS.mainBG},
  headerTintColor: COLORS.white,
  headerTitle: '',
  headerShadowVisible: false,
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerScreens"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartStack}
          options={{
            headerShown: false,
            headerBackTitle: '',
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="ReservationSuccessScreen"
          component={ReservationSuccessScreen}
          options={{...DEFAULT_HEADER}}
        />
        <Stack.Screen
          name="EventGameScreen"
          component={EventGameScreen}
          options={{
            ...DEFAULT_HEADER,
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="EventMovieScreen"
          component={EventMovieScreen}
          options={{
            ...DEFAULT_HEADER,
            headerTintColor: COLORS.white,
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="EventRugbyScreen"
          component={EventRugbyScreen}
          options={{
            ...DEFAULT_HEADER,
            headerTintColor: COLORS.white,
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="EventCricketScreen"
          component={EventCricketScreen}
          options={{
            ...DEFAULT_HEADER,
            headerTintColor: COLORS.white,
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            ...DEFAULT_HEADER,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
