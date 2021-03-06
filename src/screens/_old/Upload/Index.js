import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, Image, ScrollView, SafeAreaView, StyleSheet, TouchableHighlight } from 'react-native';
import { Dimensions } from 'react-native';
import Photo from '../../../assets/a.png';
import axios from 'axios';

export default function MainScreen({route, navigation}) {

    const photos = [
        'https://picsum.photos/720'
    ]

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    const modalizeRef = React.createRef();
    
    const onOpen = () => {
        modalizeRef.current?.open();
    };

    useEffect(() => {
    },[])

    async function handleUploadPhoto (){
        const formData = new FormData();

        photos.map(async (photo) => {

            let response = await fetch(photo);
            let data = await response.blob();
            let metadata = {
                type: 'image/jpeg'
            };
            let file = new File([data], "test.jpg", metadata);

            formData.append('image', file) 
            formData.append('post_id', 1) 

            axios.post('http://localhost:8000/api/upload', formData)
                .then(function (response) {
              
                    alert(JSON.stringify(response.data));
                })
                .catch(function (error) {
           
                });
        
        })
    };


    return (
      <SafeAreaView style={{ flex: 1 }}>     
            <View style={{height:windowHeight, width:windowWidth, backgroundColor:'#000', justifyContent:'center', alignItems:'center'}}>
              <View>
                <StyledButton
                  title="Open image browser"
                  onPress={() => { handleUploadPhoto() }}
                />
              </View>

                <StyledImage resizeMode="contain" source={Photo} />           
            </View>
      </SafeAreaView>
    );
  }


