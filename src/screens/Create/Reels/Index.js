import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView,Image } from 'react-native';
import { Camera } from 'expo-camera';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 


export default function Index({navigation}) {
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
            <Ionicons name="flash-off" size={36} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="close" size={36} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.createSettings}>
          <View style={styles.createSettingsData}>
            <TouchableOpacity  style={styles.settingsItem}>
              <Ionicons name="md-musical-notes-outline" size={36} color="#fff" />

              <Text style={styles.settingsItemTitle}>Áudio</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.settingsItem}>
              <MaterialCommunityIcons name="av-timer" size={36} color="#fff" />

              <Text style={styles.settingsItemTitle}>Duração</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.settingsItem}>
              <MaterialCommunityIcons name="play-speed" size={36} color="#fff" />

              <Text style={styles.settingsItemTitle}>Velocidade</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.settingsItem}>
              <Feather name="columns" size={36} color="#fff" />

              <Text style={styles.settingsItemTitle}>Layout do vídeo</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.settingsItem}>
              <MaterialIcons name="timer" size={36} color="#fff" />

              <Text style={styles.settingsItemTitle}>Temporizador</Text>
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
            <TouchableOpacity
              style={styles.openGallery}
              onPress={() => {
                navigation.navigate("gallery")
              }}>
              <Image style={styles.lastImage} source={require('./../../../../assets/2.jpeg')} />
            </TouchableOpacity>
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
    marginBottom: 22,
    flexDirection: 'row',
    alignItems: 'center'
  },

  settingsItemTitle:{
    color: '#fff',
    marginLeft: 20,
    fontWeight: 'bold'
  }

});
