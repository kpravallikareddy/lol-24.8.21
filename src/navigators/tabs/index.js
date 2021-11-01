import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { TabBar } from 'components';
import HomeStack from './live';
import ChatStack from './message';
// import CartStack from './cart';
// import FeedStack from './feed';
// import ProfileStack from './profile';
// import WalletStac from './wallet';
// import  Live  from '../../containers/Live';
//import Chat  from '../../containers/Chat';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator 
    initialRouteName={"Live"}
    >
      <Tab.Screen name="Live" component={HomeStack} />
      <Tab.Screen name="Chat" component={ChatStack} />
      {/* <Tab.Screen name="Wallet" component={WalletStac} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Profile" component={ProfileStack} /> */}
    </Tab.Navigator>
  );
}
