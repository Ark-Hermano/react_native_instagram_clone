import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    // (async () => {
    //   const { status } = await Camera.requestCameraPermissionsAsync();
    //   setHasPermission(status === 'granted');
    // })();
  }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  let openImagePickerAsync = async () => {
    let { status } = await MediaLibrary.requestPermissionsAsync()
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: ['photo', 'video'],
    })
    let videos = await MediaLibrary.getAssetInfoAsync(media.assets)
    setVideos(videos)

  }

  return (
    <View >
      <TouchableOpacity   onPress={openImagePickerAsync} >
        <Text style={{color:'#000'}}>galeria</Text>
      </TouchableOpacity>


    </View>
  );
}