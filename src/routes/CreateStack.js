import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import axios from 'axios';


import { View, Text, Button, Image, ScrollView, SafeAreaView, TouchableHighlight } from 'react-native';


import Chat from '../screens/Account/Index'


const Stack = createStackNavigator();

export default CreateStack = () => {


  const api = axios.create({
    baseURL: `http://127.0.0.1:8000`
    //baseURL: `http://192.168.0.186:3004`
  });

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
    <TouchableHighlight onPress={() => {navigation.goBac()}}>
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
    <TouchableHighlight onPress={() => {handleUploadPhoto()}}>
      <Feather name="check" size={24} color="#458eff" />
    </TouchableHighlight>
  )

  async function handleUploadPhoto(){
    const formData = new FormData();

    formData.append('image', require('./../../assets/3.jpg')) 
    formData.append('post_id', 1) 

    api.get("/api/posts",{
      body: formData,
      method: "post"

    }).then(response => {
      alert('json')

    }).catch(error => {
      alert(error)

    });

  
  }
  

  return (
        <Stack.Navigator
          //initialRouteName="Upload" 
        >
          <Stack.Screen name="ChatList" component={Chat}  options={{  headerShown: false  }} />
        </Stack.Navigator>
  );
}
