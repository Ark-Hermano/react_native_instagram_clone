import React, { useState } from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import ImageBrowser from './ImageBrowserScreen';
import { Dimensions } from 'react-native';


export default function MainScreen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [done, setDone] = useState(false)
  const [photos, setPhotos] = useState([])


    return (
      <SafeAreaView style={{ flex: 1 }}>     
        <View style={{height:windowHeight * 0.4, width:windowWidth, backgroundColor:'#000', justifyContent:'center', alignItems:'center'}}>
          <Image resizeMode="contain" style={{height: windowHeight * 0.4}} source={photos[photos.length - 1]} />         
        </View>

        <ImageBrowser style={{height:windowHeight * 0.6}} setPhotos={setPhotos} setDone={setDone} />
      </SafeAreaView>
    );
  }

