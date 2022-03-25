import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View>
        {storie.closeFriend ? (
            <TouchableOpacity onPress={() => {navigation.navigate('Stories')}} style={storieStyles.storieContainer}>

                <View style={[
                    storie.visualized
                    ? storieStyles.visualized
                    : storieStyles.closeFriend
                ]} >
                <Image 
                    style={storieStyles.profilePic} 
                    source={'https://picsum.photos/720'}
                >
                </Image>
                </View>

                <View style={storieStyles.textContainer} >
                <Text style={storieStyles.text} >Storie {i}</Text>
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
                    source={'https://picsum.photos/720'}
                >
                </Image>
                </LinearGradient>

                <View style={storieStyles.textContainer} >
                <Text style={storieStyles.text} >Storie {i}</Text>
                </View>
            </TouchableOpacity>
        )}
        
    </View>
  )
}

export default Index

const storieStyles = StyleSheet.create({

    storieContainer:{
      marginHorizontal: '5px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeFriend:{
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      height: '54px',
      width: '54px',
      backgroundColor:'#1d9b21',
      padding: '2px',
    },
    visualized:{
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      height: '54px',
      width: '54px',
      backgroundColor:'#ddd',
      padding: '1px',
    },
    noVisualizedContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2px',
      borderRadius: 100,
      height: '55px',
      width: '55px',
    
    },  
    profileContainer:{
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 100,
    },    
    profileContainerNotViewed:{
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 100,
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
      marginTop: '5px',
      color: '#FFFFFF',
      textAlign: 'center',
    }
  })