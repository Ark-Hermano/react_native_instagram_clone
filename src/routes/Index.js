import React from 'react';
import { TouchableOpacity, Image,   StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Host, Portal } from 'react-native-portalize';


import Chat from '../screens/Chat/Index';
import Conversation from '../screens/Conversation/Index';
import Comments from '../screens/Comments/Index';
import Storie from '../screens/Storie/Index';
import Stories from '../screens/Stories/Index';
import Upload from '../screens/Upload/Index'

import CreateTabs from './CreateTabs'
import HomeStack from './HomeStack'



const Stack = createNativeStackNavigator();



function MainNavigator() {
  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator  
          initialRouteName="Create"
        >
          
            <Stack.Screen name="Home" component={HomeStack}   options={{ headerShown: false  }}   /> 
            <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false  }}  />
            <Stack.Screen name="Comments" component={Comments} options={{ headerShown: false  }}  />
            <Stack.Screen name="Conversation" component={Conversation} options={{ headerShown: false  }}/>

            <Stack.Screen name="Create" component={CreateTabs} options={{ headerShown: false  }}  />
            <Stack.Screen name="Upload" component={Upload} options={{ headerShown: false  }}  />
            <Stack.Screen name="Storie" component={Storie} options={{ headerShown: false  }}  />
            <Stack.Screen name="Stories" component={Stories} options={{ headerShown: false  }} />

        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
}


export default MainNavigator;