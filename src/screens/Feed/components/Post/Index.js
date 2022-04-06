import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, TextInput} from 'react-native'
import React, {useRef, useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Video } from 'expo-av';

import Likes from '../Likes/Index'
import SendToFollowers from '../SendModal/Index'

import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

import { Post } from './style'

const Index = ({post, navigation}) => {


    const modalizeRef = useRef(null);

    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    const [text, setText] = useState('')

    function renderLikes({item: likes, index}) {

        return (
          <Likes item={likes} index={index} />
        )
    }

    const onOpen = () => {

        modalizeRef.current?.open();
    };

    return (
        <Post>
            <PostHeader>
              <View>
                <StorieContainer onPress={() => {navigation.navigate('Stories')}}>
                  
                  <LinearGradient 
                    colors={['#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888']}
                    style={[
                        storieStyles.noVisualizedContainer,
                        storieStyles.visualized
                    ]}
                  >
                    <ProfilePic 
                        source={{uri: `https://insta-clone-hermano.herokuapp.com/profile/${post.user.profile_path}`}}
                    />
                  </LinearGradient>
       
                </StorieContainer>
              </View>

              <UserInfo>
                  <Author onPress={() => {navigation.navigate('Account')}}>
                    <AuthorTitle>{post.user.name}</AuthorTitle>
                  </Author>
                  
                  <Place>{post.location}</Place>
              </UserInfo>

              <PostOptions>
                  <TouchableOpacity>
                      <Entypo name="dots-three-vertical" size={24} color="#fff" />
                  </TouchableOpacity>
              </PostOptions>
            </PostHeader>

            <View>
              {post.type === "image" ? (
                <Picture_url
                  source={{ uri:`https://insta-clone-hermano.herokuapp.com/posts/${post.type}/${post.path}`}} 
                />
              ):(
                <Video
                  isMuted
                  shouldPlay
                  style={styles.picture_url}
                  source={{ uri:`https://insta-clone-hermano.herokuapp.com/posts/${post.type}/${post.path}`}} 
                  useNativeControls={true}
                  usePoster={true}
                  isLooping
                  resizeMode="contain"
                />
              )}
            </View>

            <Footer>
              <Actions>
                  <LeftActions>

                    {liked ? (
                      <Action onPress={() => {setLiked(false)}}>
                          <AntDesign name="heart" size={24} color="#fff" />
                      </Action>  
                    ):(
                      <Action onPress={() => {setLiked(true)}}>
                          <AntDesign name="hearto"  size={24} color="#fff" />
                      </Action>
                    )}

                    <Action>
                        <FontAwesome5 name="comment"  size={24} color="#fff" />
                    </Action>

                    <TouchableOpacity onPress={() => {onOpen()}}>
                        <Feather source name="send" size={24} color="#fff" />

                        <SendToFollowers />
                    </TouchableOpacity>

                  </LeftActions>

                  <View>
                    {saved ? (
                      <TouchableOpacity onPress={() => {setSaved(false)}}>
                          <Feather name="bookmark" size={24} color="#fff" />
                      </TouchableOpacity>   
                    ):(
                      <TouchableOpacity onPress={() => {setSaved(true)}}>
                          <Feather name="bookmark" size={24} color="#fff" />
                      </TouchableOpacity>
                    )}
                  </View>
              </Actions>

              <View>
                  <LikesContainer>
                      <FirstLikesContainer
                          horizontal
                          data={post.likes}
                          keyExtractor={item => item.id}
                          renderItem={renderLikes}
                      />
                      <Likes>{post.likes.length + ' likes'} </Likes>
                  </LikesContainer>
              
                  <Description>{post.description}</Description>

                  <TouchableOpacity onPress={() => { navigation.navigate('Comments') }} >
                      <Comments>Ver todos os {post.comments.length} comentários</Comments>
                  </TouchableOpacity>

                  <View >
                      <InputContainer onPress={() => { navigation.navigate('Comments') }} >
                          <ProfilePicComment source={'https://picsum.photos/720'} />
                          <TextInput 
                              placeholder="Messagem..."
                              value={text} 
                              onChange={(e) => {
                                setText(e.target.value)
                              }} 
                              style={{
                                  width: '65%',
                                  background: 'none',
                                  borderRadius: 0,
                                  border: '0px',
                                  outline: 'none',
                                  color: 'rgb(255, 255, 255)',
                                  marginLeft: 0,
                              }}
                          />
                      </InputContainer>
                  </View>

              </View>
            </Footer>
        </Post>
    )
}

export default Index


const stylesPost = StyleSheet.create({
    firstLikesContainer:{
      width: 'auto'
    },

    authorTitle:{
      color: '#fff'
    },

    authorImage:{
      height: 30,
      width: '100%'
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
      borderRadius: 10000,
    },
    postLikeProfile:{
      height: 18,
      width: 18,
      borderRadius: 10000,
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


const storieStyles = StyleSheet.create({

  storieContainer:{
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeFriend:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 50,
    width: 50,
    backgroundColor:'#1d9b21',
    padding: 1,
  },
  visualized:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 50,
    width: 50,
    backgroundColor:'#ddd',
    padding: 1,
  },
  noVisualizedContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 100,
    height: 55,
    width: 55,
  
  },  

  profilePic:{
    height: '100%',
    width: '100%',
    borderWidth: 4,
    borderColor: '#000',
    borderRadius: 100,
  },
  textContainer:{

  },
  text: {
    fontSize: 13,
    marginTop: 5,
    color: '#FFFFFF',
    textAlign: 'center',
  }
})

const styles = StyleSheet.create({
    logoContainer:{
      height: 50,
      width: 170,
      justifyContent: 'center'
    },
    logo:{
      width:'60%',
      height: 30
    },
    headerIcon:{
      width: 25,
      height: 25
    },
    top: {
      height:60,
      backgroundColor:'#000',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
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
    userInfo: {
      width: '73%'
    },
    author: {
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
    },

    authorTitle:{
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    }
  });