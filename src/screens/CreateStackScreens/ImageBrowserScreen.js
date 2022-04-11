import { useDispatch, useSelector } from "react-redux";
import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import {ImageBrowser} from 'expo-image-picker-multiple';
import { Dimensions } from 'react-native';
import { photoAdded } from "../../reducers/photos/photosSlice";

import { MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons'; 


export default function ImageBrowserScreen({setPhotos, navigation, setDone}) {

  const dispatch = useDispatch();
  const photosAmount = useSelector((state) => state.users.length);
  const [countState, setCountState] = useState(0)

  const imagesCallback = (callback) => {

    callback.then(async (photos) => {
      setPhotos(photos)
      const cPhotos = [];

      for(let photo of photos) {
        const pPhoto = await processImageAsync(photo.uri);
        cPhotos.push({
          uri: pPhoto.uri,
          name: photo.filename,
          type: 'image/jpg'
        })

        dispatch(
          photoAdded({
            id: photosAmount + 1,
            source: pPhoto,
            original: photo
          })
        );
      
      }
      
    })
    .catch((e) => console.log(e));
  };

  async function processImageAsync(uri) {
    const file = await ImageManipulator.manipulateAsync(
      uri,
      [{resize: { width: 1000 }}],
      { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG, base64: true }
    );
    return file;
  };


  const updateHandler = (count, onSubmit) => {

    if(count !== countState){
      onSubmit()
    }

    setCountState(count)
  };

  const renderSelectedComponent = (number) => (
    <View style={styles.countBadge}>
      <Text style={styles.countBadgeText}>{number}</Text>
    </View>
  );
 

    const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={[styles.flex, styles.container]}>
          <View style={midleBarStyle.midBar}>
          
            <TouchableOpacity style={{flexDirection:'row'}}>
               <Text style={[midleBarStyle.colorWhite, midleBarStyle.leftText ]}>Galeria</Text>
               <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
            </TouchableOpacity>

            <View style={midleBarStyle.midCell}>
              <TouchableOpacity style={[midleBarStyle.radiusContainer]} >
                <MaterialCommunityIcons name="checkbox-multiple-blank-outline" size={24} color="white" /> 
                <Text style={[midleBarStyle.colorWhite, midleBarStyle.centerText]}>Selecionar varios</Text>
              </TouchableOpacity>
            </View>
      
            <TouchableOpacity style={midleBarStyle.radiusContainer}>
              <Feather name="camera" size={24} color="white" />  
            </TouchableOpacity> 
         
          </View> 
          
          <ImageBrowser
            max={10}
            onChange={updateHandler}
            callback={imagesCallback}
            renderSelectedComponent={renderSelectedComponent}
            emptyStayComponent={emptyStayComponent}
          /> 
        </ScrollView>
      </SafeAreaView>
    );
  }

const midleBarStyle = StyleSheet.create({
  midCell:{
    width:'65%',
    flexDirection: 'row',
    justifyContent:'flex-end'
  },

  centerText:{
    fontSize:15,
    paddingLeft:5,
    fontWeight: 'bold',
  },
  leftText:{
    fontSize:17,
    fontWeight: 'bold'
  },
  midBar: {
    color:"#fff",
    backgroundColor:'#000',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    maxWidth:'100%'
  },

  colorWhite: {
    color:"#fff",
  },
  
  radiusContainer: {
    padding: 10,
    backgroundColor:'#cfd4cb',
    flexDirection: 'row',
    alignItems:'center',
    borderRadius: 100,      
  }
})

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    position: 'relative',
    maxHeight: Dimensions.get('window').height,
    backgroundColor: '#000'
  },
  emptyStay:{
    textAlign: 'center',
  },
  countBadge: {
    paddingHorizontal: 8.6,
    paddingVertical: 5,
    borderRadius: 50,
    position: 'absolute',
    right: 3,
    bottom: 3,
    justifyContent: 'center',
    backgroundColor: '#0580FF'
  },
  countBadgeText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 'auto',
    color: '#ffffff'
  }
});
