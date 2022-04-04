import React, {useContext} from 'react';
import styled from 'styled-components/native'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'

import { MaterialCommunityIcons, Feather, AntDesign, Entypo } from '@expo/vector-icons'; 

const TabArea = styled.View`
    height: 60px;
    flex-direction: row;
    background-color: #000;
`

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    color: #000;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;
`;

export default ({state, navigation}) => {


    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.openGallery}
              onPress={() => {

              }}>
              <Image style={styles.lastImage} source={require('./../../assets/2.jpeg')} />
            </TouchableOpacity>
          </View>

          <TabItem onPress={() => {goTo('post')}}> 
              <Feather name="home" size={24} color="#fff" />
          </TabItem>

          <TabItem onPress={() => {goTo('story')}}>
              <AntDesign name="search1" size={24} color="#fff" />
          </TabItem>

          <TabItem onPress={() => {goTo('reels')}}>
              <Entypo name="folder-video" size={24} color="#fff" />
          </TabItem>

          <TabItem onPress={() => {goTo('live')}}>
              <Entypo name="shop" size={24} color="#fff" />
          </TabItem>

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

        </TabArea>
    )
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
