import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native'
import React, {useRef, useState} from 'react'

import Likes from '../Likes/Index'
import SendToFollowers from '../SendModal/Index'

import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const Index = ({post}) => {


    const modalizeRef = useRef(null);

    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    const [text, setText] = useState('')

    function renderLikes({item: likes, index}) {

        return (
          <Likes />
        )
    }

    const onOpen = () => {

        modalizeRef.current?.open();
    };

    return (
        <View style={styles.post}>
            <View style={styles.postHeader}>
            <View style={styles.userInfo}>
                <TouchableOpacity onPress={() => {navigation.navigate('User')}} style={styles.author}>{post.author}</TouchableOpacity>

                <Text style={styles.place}>{post.place}</Text>
            </View>

            <View style={styles.postOptions}>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>
            </View>

            <View>
              <Image
                style={styles.picture_url}
                source={{ uri: post.picture_url }}
              />
            </View>

            <View style={styles.footer}>
              <View style={styles.actions}>
                  <View style={styles.leftActions}>

                  {liked ? (
                      <TouchableOpacity onPress={() => {setLiked(false)}} style={styles.action}>
                          <AntDesign name="heart" style={styles.actionImg} size={24} color="black" />
                      </TouchableOpacity>
                      
                  ):(
                      <TouchableOpacity onPress={() => {setLiked(true)}} style={styles.action}>
                          <AntDesign name="hearto" style={styles.actionImg}  size={24} color="black" />
                      </TouchableOpacity>
                  )}

                    <TouchableOpacity style={styles.action}>
                        <FontAwesome name="comment-o" style={styles.actionImg} size={24} color="black" />

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {onOpen()}}>
                        <Feather style={styles.actionImg} source name="send" size={24} color="black" />

                        <SendToFollowers />
                    </TouchableOpacity>

                  </View>

                  <View>
                  {saved ? (
                      <TouchableOpacity onPress={() => {setSaved(false)}}>
                          <Feather name="bookmark" size={24} color="black" style={styles.actionImg} />
                      </TouchableOpacity>   
                  ):(
                      <TouchableOpacity onPress={() => {setSaved(true)}}>
                          <Feather name="bookmark" size={24} color="black" style={styles.actionImg} />
                      </TouchableOpacity>
                  )}
                  </View>
              </View>

              <View>
                  <View style={stylesPost.likesContainer}>
                      <FlatList
                          style={[stylesPost.firstLikesContainer, {}]}
                          horizontal
                          data={post.likes}
                          keyExtractor={item => item.id}
                          renderItem={renderLikes}
                      />
                      <Text style={stylesPost.likes} >{post.likes.length + ' likes'} </Text>
                  </View>
              
                  <Text style={styles.description}>{post.description}</Text>

                  <TouchableOpacity onPress={() => { navigation.navigate('Comments') }} >
                      <Text style={stylesPost.comments}>Ver todos os {post.comments.length} comentários</Text>
                  </TouchableOpacity>

                  <View >
                      <TouchableOpacity style={stylesPost.inputContainer} onPress={() => { navigation.navigate('Comments') }} >
                          <Image style={stylesPost.profilePicComment} source={'https://picsum.photos/720'} />
                          <input 
                              
                              placeholder="Messagem..."
                              style={{
                                  width: '65%',
                                  background: 'none',
                                  borderRadius: '0px',
                                  border: '0px',
                                  outline: 'none',
                                  color: 'rgb(255, 255, 255)',
                                  marginLeft: '0px',
                              }}
                              value={text} onChange={(e) => {
                                  setText(e.target.value)
                          
                              }} 
                          />

                          
                      </TouchableOpacity>
                  </View>

              </View>
            </View>
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

  const styles = StyleSheet.create({
    logoContainer:{
      height:'50px',
      width:'170px',
      justifyContent: 'center'
    },
    logo:{
      width:'60%',
      height: '30px'
    },
    headerIcon:{
      width:'25px',
      height: '25px'
    },
    top: {
      height:60,
      backgroundColor:'#000',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '15px',
      alignItems: 'center'
    }, 
    background:{
      backgroundColor:'#000',
    },
    listsIcon:{
        height:20,
        width:20,
    },
    newMessageIcon:{
        height:20,
        width:20,
    },
    activeUser:{
        width: '65%',
        color: '#fff',
        fontFamily:'sans-serif',
        fontWeight:'bold',
    },
    post: {
      marginVertical: 15
    },
    postHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      alignItems: 'center',
      marginBottom: 15
    },
    postOptions: {},
    userInfo: {},
    author: {
      fontSize: 14,
      color: '#fff',
      fontFamily:'sans-serif',
      fontWeight: 'bold'
    },
    place: {
      fontSize: 12,
      color: '#666'
    },
    picture_url: {
      width: '100%',
      height: 400
    },
    footer: {
      paddingHorizontal: 15
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
  
    },
    action: {
      marginRight: 8
    },
    actionImg: {
      height: 25,
      width: 25
    },
    leftActions: {
      flexDirection: 'row'
    },
    likes: {
      fontWeight: 'bold',
      fontSize: 12
    },
    hashtags: {
      color: '#002D5E'
    },
    description: {
      color: '#fff',
      lineHeight: 18
    }
  });