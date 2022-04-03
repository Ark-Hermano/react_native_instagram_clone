import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, Image, ScrollView, SafeAreaView, TouchableHighlight } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Host, Portal } from 'react-native-portalize';
import ImageBrowser from './ImageBrowserScreen';
import { Dimensions } from 'react-native';


export default function MainScreen({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
    const [done, setDone] = useState(false)
  const [photos, setPhotos] = useState([])
 
  const modalizeRef = React.createRef();
  
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {

    setPhotos[
      '../assets/image/1.jpeg',
      '../assets/image/2.jpeg',
      './../../../assets/3.jpg',
      '../assets/image/4.jpeg',
      '../assets/image/5.jpg',
      '../assets/image/6.jpg'
    ]
  },[])

  function renderImage (item, i) {
    return (
      <Image
        style={{ height: 100, width: 100 }}
        source={{ uri: item.uri }}
        key={i}
      />
    )
  } 


    return (
      <SafeAreaView style={{ flex: 1 }}>     
            <View style={{height:windowHeight * 0.4, width:windowWidth, backgroundColor:'#000', justifyContent:'center', alignItems:'center'}}>
              {photos.length > 0 && (
                <TouchableHighlight  
                  onPress={() => { navigation.navigate('SelectedImages',{photos}) }} 
                  style={{position:'absolute',top:20, left: windowWidth - 40, elevation:10, zIndex:10}} 
                >
                  <Text style={{color: '#fff'}}>{photos.length}</Text>
                </TouchableHighlight>
              )}
              <Image resizeMode="contain" style={{height: windowHeight * 0.4}} source={require('./../../../assets/3.jpg')} />         
            </View>
            <ImageBrowser style={{height:windowHeight * 0.6}} setPhotos={setPhotos} setDone={setDone} />
      </SafeAreaView>
    );
  }

