import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={modalFollowerStyles.followerContainer} >
        <View style={modalFollowerStyles.followerPicContainer}>
        <Image style={modalFollowerStyles.followerPic} source={'https://picsum.photos/720'}></Image>
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
    height: '35px',
    width: '35px',
    borderRadius: '100%',
  },
  followerName:{
    color: '#fff',
    fontSize: '12'
  },
  followerSurname:{
    color: '#ddd',
    fontSize: '11'
  },
  information:{
    width: 'fit-content',
    paddingLeft: '10px',
    marginRight: 'auto',
  },
  sengButton:{
    height: '25px',
    width: 'fit-content',
    paddingHorizontal: 35,
    backgroundColor: '#0095f6',
    borderRadius: '3px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText:{
    color: '#fff',
    fontSize: '13px',
    fontWeight: 'bold'
  }
})