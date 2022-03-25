import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={modalSendStyles.header} >
        <View style={modalSendStyles.headerButton} ></View>
    </View>
  )
}

export default Index

const modalSendStyles = StyleSheet.create({
  header:{
    backgroundColor:'#272727',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    height: '25px',
  },
  inputContainer:{
    marginLeft: '10px',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendPostPic:{
    width: '35px',
    height: '35px',
    borderRadius: '5px',
  },
  searchContainer: {
    borderRadius: '10px',
    backgroundColor: '#000',
  },
  search:{
    width: '15px',
    height: '15px',
    marginLeft: '10px',
    marginRight: '15px',

  },
  headerButton:{
    backgroundColor:'#ddd',
    width: '35px',
    height: '6px',
    borderRadius: '25px',
  }, 
  createGroupContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  },
  createGroupIcon:{
    height: '35px',
    width: '35px',
    borderRadius: '100%',
  },
  createGroupText:{
    color: '#fff',
    fontWeight: 'bold',

  },
  createGroupTextContainer:{
    marginRight: 'auto',
    paddingLeft: '10px'
  },
  sendStoryContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  profilePic:{
    height: '35px',
    width: '35px',
    borderRadius: '100%',
  },
  sendStoryTextContainer:{
    paddingLeft: '10px',
  },
  sendStoryText:{
    color: '#0095f6'
  },

  searchContainer:{
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: '5px',
    backgroundColor: '#494949',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  sendWithTextContainer:{
    flexDirection: 'row',
    marginBottom: 20
  }


})