import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView,Image } from 'react-native';
import { Camera } from 'expo-camera';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 


export default function App() {
  const Tab = createBottomTabNavigator();

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type}>

        <View style={styles.topBar} >
          <TouchableOpacity>
            <Ionicons name="md-settings-sharp" size={36} color="#fff" />
          </TouchableOpacity>
          
          <TouchableOpacity>
      
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="close" size={36} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.createSettings}>
          <View style={styles.createSettingsData}>
            <TouchableOpacity  style={styles.settingsItem}>
              <Entypo name="text" size={36} color="#fff" />

              <Text style={styles.settingsItemTitle}>Título</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.settingsItem}>
              <Ionicons name="calendar-outline" size={36} color="#fff" />

              <Text style={styles.settingsItemTitle}>Programação</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.settingsItem}>
              <Ionicons name="md-people-outline" size={36} color="#fff" />

              <Text style={styles.settingsItemTitle}>Público</Text>
            </TouchableOpacity>


          </View>
        </View>

        <View style={styles.recordContainer}>
          <TouchableOpacity style={styles.recordButton}>
            <View style={styles.recordButtonContent}></View>
          </TouchableOpacity>
        </View>

        <View  style={styles.bottom}>
          <View style={styles.buttonContainer}>
          </View>

          <View>
   
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
                <MaterialCommunityIcons name="camera-party-mode" size={50} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
       
      </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
 
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

  settingsItemTitle:{
    color:'#fff',
    marginLeft: 20,
    fontWeight: 'bold'
  },

  settingsItem:{
    marginBottom: 22,
    flexDirection: 'row',
    alignItems: 'center'
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


});
