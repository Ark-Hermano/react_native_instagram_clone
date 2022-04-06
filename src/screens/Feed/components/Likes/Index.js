import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

import { Post } from './style'

const Index = ({index, likes}) => {
  return (
    <View style={[stylesPost.postLikeContainer, {right: index * 7}]}>
        <PostLikeProfile source={likes?.user?.profilePic} />
    </View>
  )
}

export default Index

const stylesPost = StyleSheet.create({

  postLikeContainer:{
    padding: 2,
    backgroundColor:'#000',
    borderRadius: 1000,
  },

})