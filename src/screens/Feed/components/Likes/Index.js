import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={[stylesPost.postLikeContainer, {right: index * 7}]}>
        <Image style={stylesPost.postLikeProfile} source={likes.user.profilePic} />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})