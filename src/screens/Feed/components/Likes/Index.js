import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const Index = ({index, likes}) => {
  return (
    <View style={[stylesPost.postLikeContainer, {right: index * 7}]}>
        <Image style={stylesPost.postLikeProfile} source={likes?.user?.profilePic} />
    </View>
  )
}

export default Index

const stylesPost = StyleSheet.create({
  firstLikesContainer:{
    width: 'auto'
  },
  likesContainer:{
    color: '#fff',
    flexDirection: 'row',
    width: 'auto',
    marginTop:0,
    alignItems: 'center'
  },
  likes:{
    color: '#fff',
    height: 'auto'
  },
  postLikeContainer:{
    padding: 2,
    backgroundColor:'#000',
    borderRadius: 1000,
  },
  postLikeProfile:{
    height: 18,
    width:  18,
    borderRadius: 1000,
  },
  comments:{
    color: '#666',
    marginTop: 2
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 5
  },
  profilePicComment:{
    width: 25,
    height: 25,
    borderRadius:1000,
    marginRight: 5
  }
  
})