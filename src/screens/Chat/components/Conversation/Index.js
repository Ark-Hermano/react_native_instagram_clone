import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Index = ({selectConversation}) => {
  return (
    <View style={listStyles.conversation}>
        <View style={listStyles.profilePicContainer} >
            <Image style={listStyles.profilePic} source={'https://picsum.photos/1080'}/>
        </View>
        <View onClick={() => {selectConversation()}} style={listStyles.information}>
            <View style={listStyles.title}>Hermano</View>
            <View style={listStyles.lastConversation}>8 novas mensages 1 h</View>
        </View>
        <View>
          <Feather name="camera" style={listStyles.cameraIcon}  size={24} color="black" />
        </View>
    </View>
  )
}

export default Index



const listStyles = StyleSheet.create({
    conversation: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#000',
      color: '#fff',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    profilePic: {
      height:45,
      width:45,
      borderRadius:'100%',
      margin: '1px',
      border:'1px solid #000' ,
    },
    information: {
        width: '72%',
        fontFamily: 'sans-serif',
        fontSize: '13px',
        fontWeight: 'bold'
    },
    profilePicContainer:{
        backgroundColor: '#676767',
        borderRadius: '100%',
        padding: '0px',
    },
    title:{

    },
    lastConversation: {

    },
    cameraIcon: {
      height:20,
      width:20,
      color: '#fff',
  
    }
 
  });
