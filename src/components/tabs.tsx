/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import UpcomingWeather from '../screens/upcomingWeather';
import City from '../screens/city';
import CurrentWeather from '../screens/currentWeather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator(); // Initializing Tab Object

const Tabs = function () {
  return (
    // <Tab.Navigator>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightblue',
        },
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato',
        },
      }}>
      <Tab.Screen
        name={'Current'}
        component={CurrentWeather}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Upcoming'}
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'City'}
        component={City}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
