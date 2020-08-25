import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LocationsScreen from './screens/Locations'
import MainScreen from './screens/Main'
import StoreScreen from './screens/Store'

const Tab = createMaterialTopTabNavigator();

export default function NavigationTop() {
  return (
    <Tab.Navigator
      initialRouteName="Locations"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: '#92929c',
        labelStyle: {
          fontSize: 12
        },
        style: {
          backgroundColor: '#FFF',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
      }}
    >
      <Tab.Screen
        name="Locations"
        component={LocationsScreen}
        options={{
          title: 'Início'
        }}
      />
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Início'
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          title: 'Início'
        }}
      />
    </Tab.Navigator>
  );
}