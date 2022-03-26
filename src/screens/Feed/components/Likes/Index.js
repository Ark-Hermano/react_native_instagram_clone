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
    width: 'fit-content'
  },
  likesContainer:{
    color: '#fff',
    flexDirection: 'row',
    width: 'fit-content',
    marginTop:0,
    alignItems: 'center'
  },
  likes:{
    color: '#fff',
    whiteSpace: 'nowrap',
    height: 'fit-content'
  },
  postLikeContainer:{
    padding: '2px',
    backgroundColor:'#000',
    borderRadius: '100%',
  },
  postLikeProfile:{
    height: '18px',
    width: '18px',
    borderRadius: '100%'
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
    borderRadius:'100%',
    marginRight: 5
  }
  
})