import * as React from 'react';
import axios from 'axios';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons, Feather, AntDesign} from '@expo/vector-icons'; 
import { useSelector } from "react-redux";

import Upload from '../screens/CreateStackScreens/UploadPhoto'
import SelectedImages from '../screens/CreateStackScreens/EditSelectedImages'
import Gallery from '../screens/CreateStackScreens/Gallery'

import api from '../service/api'

const Stack = createNativeStackNavigator();

export default CreateStack = () => {

  let photos = useSelector((state) => state.users);

  const MyHeader = ({title, leftButton, rightButton, style}) => (
    <View style={style}>
      <View>
        {leftButton}
      </View>  

      <View>
        <Text 
          style={{
            fontSize:20,
            fontWeight:'bold',
            color:'#fff',
            textAlign:'center'
          }}
        >{title}</Text>
      </View>
      
      <View>
        {rightButton}
      </View>

    </View>
  )

  const EditIcon = ({navigation}) => (
    <TouchableHighlight>
      <MaterialCommunityIcons name="pencil-plus" size={24} color="#458eff" />
    </TouchableHighlight>
  )
  
  
  const NextButton = ({navigationTitle, navigation}) => (
    <TouchableHighlight onPress={() => {navigation.navigate(navigationTitle)}}>
      <AntDesign name="arrowright" size={24} color="#458eff" />
    </TouchableHighlight>
  )
  
  const ReturnButton = ({navigation}) => (
    <TouchableHighlight onPress={() => {navigation.goBack()}}>
      <AntDesign name="arrowleft" size={24} color="#fff" />
    </TouchableHighlight>
  )

  const CancelButton = ({navigation}) => (
    <TouchableHighlight onPress={() => {navigation.goBack()}}>
      <AntDesign name="close" size={24} color="#fff" />
    </TouchableHighlight>
  )

  const AcceptButton = ({navigationTitle, navigation}) => (
    <TouchableHighlight onPress={() => {handleUploadPhoto(navigation)}}>
      <Feather name="check" size={24} color="#458eff" />
    </TouchableHighlight>
  )


  async function handleUploadPhoto(){
    const formData = new FormData();

      formData.append('body', 'Descrição')
      formData.append('type', 'image')
      formData.append('user_id', 2)
      formData.append('media', {
        uri:photos[photos.length - 1].source.uri,
        type: 'image/jpeg', 
        name: "imagename.jpg",
      })
    
      api.post("/posts/create",formData, {
        headers: {
              Accept: 'application/json',
          "Content-Type": "multipart/form-data",
        },
      }).then(response => {
        alert('response')

      }).catch(error => {

        alert(JSON.stringify(error.response.data.message))
      });

  }
  

  return (
        <Stack.Navigator>

          <Stack.Screen 
            name='Gallery' 
            component={Gallery}
            options={{ headerShown: false  }} 
            options={{
                headerMode: 'screen',
                headerStyle: {
                  paddingHorizontal:24,
                  height: 80,
                  flexDirection: 'row',
                  alignItems:'center',
                  justifyContent:'space-between',
                  backgroundColor: "#000"
                },
                header:({ scene, previous, navigation }) => {
                 const title = "Nova Publicação"

                  return (
                    <MyHeader
                      title={title}
                      leftButton={
                        <CancelButton navigation={navigation} /> 
                      }
                      rightButton={
                        <NextButton navigation={navigation} navigationTitle={'SelectedImages'}/>
                      }
                      style={{
                          paddingHorizontal:24,
                          height: 80,
                          flexDirection: 'row',
                          alignItems:'center',
                          justifyContent:'space-between',
                          backgroundColor: "#000"
                        }}
                    />
                  );
                } 
            }} 
          />

          <Stack.Screen 
            name='SelectedImages' 
            component={SelectedImages}

            options={{
                headerMode: 'screen',
                headerStyle: {
                  paddingHorizontal:30,
                  height: 80,
                  flexDirection: 'row',
                  alignItems:'center',
                  justifyContent:'space-between',
                  backgroundColor: "#000"
                },
                header:({ scene, previous, navigation }) => {
                 const title = "Editar"

                  return (
                    <MyHeader
                      title={<EditIcon/>}
                      leftButton={
                        <ReturnButton navigation={navigation} /> 
                      }
                      rightButton={
                        <NextButton navigation={navigation} navigationTitle={'Upload'}/>
                      }
                      style={{
                        paddingHorizontal:30,
                        height: 80,
                        flexDirection: 'row',
                        alignItems:'center',
                        justifyContent:'space-between',
                        backgroundColor: "#000"
                      }}
                    />
                  );
                } 
            }}
          />

          <Stack.Screen 
            name='Upload' 
            component={Upload}   
            
            options={{
                headerMode: 'screen',
                headerStyle: {
                  paddingHorizontal:30,
                  height: 80,
                  flexDirection: 'row',
                  alignItems:'center',
                  justifyContent:'space-between',
                  backgroundColor: "#000"
                },
                header:({ scene, previous, navigation }) => {
                 const title = "Publicar"

                  return (
                    <MyHeader
                      title={title}
                      leftButton={
                        <ReturnButton navigation={navigation} /> 
                      }
                      rightButton={
                        <AcceptButton navigation={navigation} navigationTitle={'ImageBrowser'}/>
                      }
                      style={{
                        paddingHorizontal:30,
                        height: 80,
                        flexDirection: 'row',
                        alignItems:'center',
                        justifyContent:'space-between',
                        backgroundColor: "#000"
                      }}
                    />
                  );
                } 
            }} 
          /> 

        </Stack.Navigator>
  );
}
