import React from 'react';
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


export default ChatStack;