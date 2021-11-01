import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  Chat  from '../../containers/Chat';

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}

export default ChatStack;
