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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 25,
  },
  inputContainer:{
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendPostPic:{
    width: 35,
    height: 35,
    borderRadius: 5,
  },
  searchContainer: {
    borderRadius: 10,
    backgroundColor: '#000',
  },
  search:{
    width: 15,
    height: 15,
    marginLeft: 10,
    marginRight: '15px',

  },
  headerButton:{
    backgroundColor:'#ddd',
    width: 35,
    height: 6,
    borderRadius: 25,
  }, 
  createGroupContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  },
  createGroupIcon:{
    height: 35,
    width: 35,
    borderRadius: 10000,
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
    height: 35,
    width: 35,
    borderRadius: 10000,
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
    borderRadius: 5,
    backgroundColor: '#494949',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  sendWithTextContainer:{
    flexDirection: 'row',
    marginBottom: 20
  }


})