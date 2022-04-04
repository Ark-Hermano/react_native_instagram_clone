import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CreateCustomTabBar from '../components/CreateCustomTabBar'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Feather, AntDesign, Entypo } from '@expo/vector-icons'; 


import Post from '../screens/Create/Post/Index'
import Story from '../screens/Create/Story/Index'
import Reels from '../screens/Create/Reels/Index'
import Live from '../screens/Create/Live/Index'

import ImageBrowser from '../screens/CreateStackScreens/ImageBrowserScreen'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
  
      <Tab.Navigator
        tabBarComponent={props => (<CreateCustomTabBar {...props} />)}
        initialRouteName="Reels"

        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            
            // if(route.name === 'Gallery'){
            //   return (
            //     <View style={styles.buttonContainer}>
            //       <TouchableOpacity
            //         style={styles.openGallery}
            //         onPress={() => {
      
            //         }}>
            //         <Image style={styles.lastImage} source={require('./../../assets/2.jpeg')} />
            //       </TouchableOpacity>
            //     </View>
            //   )
            // }

            // if(route.name === 'Flip'){
            //   return (
            //     <View style={styles.buttonContainer}>
            //       <TouchableOpacity
            //         style={styles.button}
            //         onPress={() => {
            //           setType(
            //             type === Camera.Constants.Type.back
            //               ? Camera.Constants.Type.front
            //               : Camera.Constants.Type.back
            //           );
            //         }}>
            //           <MaterialCommunityIcons name="camera-party-mode" size={50} color="#fff" />
            //       </TouchableOpacity>
            //     </View>
            //     )
            // }
          }
        })}

        tabBarOptions={{
          style: {
            backgroundColor: "transparent"
          }
        }}
        inactiveColor="#404040"
        activeColor="#fff"
        barStyle={{ 
          backgroundColor: '#000',
          boxShadow: 'none',
          height: 'auto'
        }}

      >
        <Tab.Screen name="Gallery" component={ImageBrowser} />
        
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Story" component={Story} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Live" component={Live} />

        <Tab.Screen name="Flip" component={Post} />
      </Tab.Navigator>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  camera: {
    flex: 1,
    padding: 15
  },
  lastImage:{
    height: 40,
    width: 40,
    borderRadius: 6
  },

  createSettings:{
    marginTop: 'auto'
  },

  buttonContainer: {


  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },

  topBar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    //paddingHorizontal: 20
  },

  recordContainer:{
    flexDirection: 'row',
    justifyContent: 'center'    
  },

  recordButton:{
    width: 'auto',
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 1000,
    padding: 3
  },

  recordButtonContent:{
    backgroundColor: '#fff',
    height: 80,
    borderRadius: 1000,
    width: 80
  },

  bottom:{
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between'
  },

  openGallery:{
    padding: 2.8,
    backgroundColor: '#fff',
    borderRadius: 10

  },

  settingsItem:{
    marginBottom: 22
  },
});
