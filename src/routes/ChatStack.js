import React from 'react';
import { TouchableOpacity, Image,   StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Conversation from '../screens/Conversation/Index'
import Chat from '../screens/Chat/Index'

const Stack = createNativeStackNavigator();

function ChatStack({navigation, route}) {

  React.useLayoutEffect(() => {

  }, [navigation, route])

  return (
    <Stack.Navigator>
        {/* <Tab.Screen name="Home" component={Feed} options={{ tabBarBadge: 3,  headerShown: false  }} /> */}
        <Stack.Screen name="ChatList" component={Chat}  options={{ tabBarBadge: 3, headerShown: false  }} />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    post: {
      marginVertical: 15
    },
    postHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      alignItems: 'center',
      marginBottom: 15
    },
    postOptions: {},
    userInfo: {},
    author: {
      fontSize: 14,
      color: '#000',
      fontWeight: 'bold'
    },
    place: {
      fontSize: 12,
      color: '#666'
    },
    picture_url: {
      width: '100%',
      height: 400
    },
    footer: {
      paddingHorizontal: 15
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 15
    },
    action: {
      marginRight: 8
    },
    actionImg: {
      height: 25,
      width: 25
    },
    leftActions: {
      flexDirection: 'row'
    },
    likes: {
      fontWeight: 'bold',
      fontSize: 12
    },
    hashtags: {
      color: '#002D5E'
    },
    description: {
      color: '#000',
      lineHeight: 18
    }
  });

export default ChatStack;