import React from 'react';
import { TouchableOpacity, Image,   StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Feed from '../screens/Feed/Index';
import ChatStack from '../routes/ChatStack'

const Tab = createBottomTabNavigator();

import CustomTabBar from '../components/CustomTabBar'
import User from '../screens/User/Index'

import Create from '../screens/Create/Index'
import Search from '../screens/Search/Index'
import Reels from '../screens/Reels/Index'
import Shop from '../screens/Shop/Index'
import Account from '../screens/Account/Index'
import Notifications from '../screens/Notifications/Index'

function HomeStack() {
  return (
        <Tab.Navigator 
          tabBar={props=><CustomTabBar {...props} />}
          initialRouteName="Feed" 
        >
              <Tab.Screen name="Feed" component={Feed}  options={{ headerShown: false  }} />
              <Tab.Screen name="User" component={User}  options={{ headerShown: false  }} />
              <Tab.Screen name="Me" component={Feed}  options={{ headerShown: false  }} />

              <Tab.Screen name="Create" component={Create}  options={{ headerShown: false  }} />
              <Tab.Screen name="Search" component={Search}  options={{ headerShown: false  }} />
              <Tab.Screen name="Reels" component={Reels}  options={{ headerShown: false  }} />
              <Tab.Screen name="Shop" component={Shop}  options={{ headerShown: false  }} />
              <Tab.Screen name="Account" component={Account}  options={{ headerShown: false  }} />
              <Tab.Screen name="Notifications" component={Notifications}  options={{ headerShown: false  }} />
       
        </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

    actionImg: {
      height: 25,
      width: 25
    },
    
  });

export default HomeStack;