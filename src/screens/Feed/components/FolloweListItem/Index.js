import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={modalFollowerStyles.followerContainer} >
        <View style={modalFollowerStyles.followerPicContainer}>
          <Image style={modalFollowerStyles.followerPic} source={'https://picsum.photos/720'} />
        </View>

        <View style={modalFollowerStyles.information}>
          <Text style={modalFollowerStyles.followerName}>Hermano</Text>
          <Text style={modalFollowerStyles.followerSurname}>majora</Text>
        </View>

        <TouchableOpacity style={modalFollowerStyles.sengButton}>
          <Text style={modalFollowerStyles.sendText}>Enviar</Text>
        </TouchableOpacity>

    </View>
  )
}

export default Index

const modalFollowerStyles = StyleSheet.create({
  followerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  followerPicContainer:{

  },
  followerPic:{
    height: 35,
    width: 35,
    borderRadius: 1000,
  },
  followerName:{
    color: '#fff',
    fontSize: 12
  },
  followerSurname:{
    color: '#ddd',
    fontSize: 11
  },
  information:{
    width: 'auto',
    paddingLeft: '10px',
    marginRight: 'auto',
  },
  sengButton:{
    height: 25,
    width: 'auto',
    paddingHorizontal: 35,
    backgroundColor: '#0095f6',
    borderRadius: 3,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText:{
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold'
  }
})