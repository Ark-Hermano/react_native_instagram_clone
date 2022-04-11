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

import { 
  Post, 
  Place, 
  PostHeader, 
  AuthorTitle,
  PostOptions, 
  Footer, 
  Actions, 
  LeftActions, 
  Action, 
  LikesNumber,
  LikesContainer, 
  FirstLikesContainer, 
  Description, 
  Comments, 
  InputContainer, 
  ProfilePicComment, 
  Picture_url,
  StorieContainer, 
  ProfilePic, 
  UserInfo, 
  Author } from './style'

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
                        source={{uri: `https://insta-clone-hermano.herokuapp.com/profile/${post?.user?.profile_path}`}}
                    />
                  </LinearGradient>
       
                </StorieContainer>
              </View>

              <UserInfo>
                  <Author onPress={() => {navigation.navigate('Account')}}>
                    <AuthorTitle>{post?.user?.name}</AuthorTitle>
                  </Author>   
                  
                  <Place>{post?.location}</Place>
              </UserInfo>

              <PostOptions>
                  <TouchableOpacity>
                      <Entypo name="dots-three-vertical" size={24} color="#fff" />
                  </TouchableOpacity>
              </PostOptions>  
            </PostHeader>
            

            
            <View>
              {post?.type === "image" ? (
                <Picture_url
                  source={{ uri:`https://insta-clone-hermano.herokuapp.com/posts/${post?.type}/${post?.path}`}} 
                />
              ):(
                <Video
                  isMuted
                  shouldPlay
                  style={styles.picture_url}
                  source={{ uri:`https://insta-clone-hermano.herokuapp.com/posts/${post?.type}/${post?.path}`}} 
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
                          data={post?.likes}
                          keyExtractor={item => item.id}
                          renderItem={renderLikes}
                      /> 
                      <LikesNumber>{post?.likes?.length + ' likes'} </LikesNumber>
                  </LikesContainer>
              
                  <Description>{post?.desc}</Description>

                  <TouchableOpacity onPress={() => { navigation.navigate('Comments') }} >
                      <Comments>Ver todos os {post?.comments?.length} comentários</Comments>
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


const storieStyles = StyleSheet.create({

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
})

const styles = StyleSheet.create({

    picture_url: {
      width: '100%',
      height: 400
    }
});