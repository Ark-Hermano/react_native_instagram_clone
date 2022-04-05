import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';


const Index = ({storie, key, navigation}) => {
  return (
    <View key={key} >
        {storie.closeFriend ? (
            <TouchableOpacity onPress={() => {navigation.navigate('Stories')}} style={storieStyles.storieContainer}>

                <View style={[
                    storie.visualized
                    ? storieStyles.visualized
                    : storieStyles.closeFriend
                ]} >
                  <Image 
                      style={storieStyles.profilePic} 
                      source={{uri: `https://insta-clone-hermano.herokuapp.com/profile/${storie.user.profile_path}`}}
                  />
               
                </View>

                <View style={storieStyles.textContainer} >
                  <Text style={storieStyles.text} >Storie {key}</Text>
                </View>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity onPress={() => {navigation.navigate('Stories')}} style={storieStyles.storieContainer}>
                
                <LinearGradient 
                colors={['#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888']}
                style={[
                    storieStyles.noVisualizedContainer,
                    storie.visualized && storieStyles.visualized
                ]}
                
                >
                <Image 
                    style={storieStyles.profilePic} 
                    source={{uri: `https://insta-clone-hermano.herokuapp.com/profile/${storie.user.profile_path}`}}
                />
              
                </LinearGradient>

                <View style={storieStyles.textContainer} >
                  <Text style={storieStyles.text} >Storie {key}</Text>
                </View>
            </TouchableOpacity>
        )}
        
    </View>
  )
}

export default Index

const storieStyles = StyleSheet.create({

    storieContainer:{
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeFriend:{
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      height: 54,
      width: 54,
      backgroundColor:'#1d9b21',
      padding: 2,
    },
    visualized:{
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      height: 54,
      width: 54,
      backgroundColor:'#ddd',
      padding: 1,
    },
    noVisualizedContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      padding: 2,
      borderRadius: 100,
      height: 55,
      width: 55,
    
    },  
  
    profilePic:{
      height: '100%',
      width: '100%',
      borderWidth: 4,
      borderColor: '#000',
      borderRadius: 100,
    },
    textContainer:{
  
    },
    text: {
      fontSize: 13,
      marginTop: 5,
      color: '#FFFFFF',
      textAlign: 'center',
    }
  })