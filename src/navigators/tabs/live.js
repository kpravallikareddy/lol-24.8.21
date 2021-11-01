import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  Live  from '../../containers/Live';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Live" component={Live} />
    </Stack.Navigator>
  );
}

export default HomeStack;