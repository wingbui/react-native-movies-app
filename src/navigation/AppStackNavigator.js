import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsPlaceholder } from '../screens/detailsPlaceholder/DetailsPlaceholder';
import { Main } from '../screens/main/Main';

const StackNavigator = createStackNavigator();

export const AppStackNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        component={Main}
        name='Movies App'
        options={{
          title: 'Movies App',
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTintColor: '#fff',
        }}
        backgroundColor='#2c3e50'
      />
      <StackNavigator.Screen
        component={DetailsPlaceholder}
        name='DetailsPlaceholder'
      />
    </StackNavigator.Navigator>
  );
};
