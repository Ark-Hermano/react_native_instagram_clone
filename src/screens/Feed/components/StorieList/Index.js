import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';

import { StyledText, ProfilePic, TextContainer, StorieContainer} from './style'

const Index = ({storie, key, navigation}) => {
  return (
    <View key={key} >
        {storie.closeFriend ? (
            <StorieContainer onPress={() => {navigation.navigate('Stories')}}>

                {storie.visualized ? (
                  <Visualized>
                    <ProfilePic 
                        source={{uri: `https://insta-clone-hermano.herokuapp.com/profile/${storie.user.profile_path}`}}
                    />
                  </Visualized>
                ):(
                  <CloseFriend>
                    <ProfilePic 
                        source={{uri: `https://insta-clone-hermano.herokuapp.com/profile/${storie.user.profile_path}`}}
                    />
                  </CloseFriend>
                )}
                <TextContainer>
                  <StyledText>Storie {key}</StyledText>
                </TextContainer>
            </StorieContainer>
        ) : (
            <StorieContainer onPress={() => {navigation.navigate('Stories')}}>
                
                {storie.visualized ? (
                  <LinearGradient 
                    colors={['#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888']}
                    style={storieStyles.visualized}
                  >
                    <ProfilePic 
                        source={{uri: `https://insta-clone-hermano.herokuapp.com/profile/${storie.user.profile_path}`}}
                    />
                  </LinearGradient>
                ):(
                  <LinearGradient 
                    colors={['#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888']}
                    style={storieStyles.noVisualizedContainer}
                  >
                    <ProfilePic 
                        source={{uri: `https://insta-clone-hermano.herokuapp.com/profile/${storie.user.profile_path}`}}
                    />
                  </LinearGradient>
                )}
                <TextContainer>
                  <StyledText>Storie {key}</StyledText>
                </TextContainer>
            </StorieContainer>
        )}
        
    </View>
  )
}

export default Index

const storieStyles = StyleSheet.create({
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

})