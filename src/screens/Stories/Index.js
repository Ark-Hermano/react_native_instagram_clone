import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { Video } from 'expo-av';
import { Dimensions } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

import api from '../../service/api';


const innerWidth = Dimensions.get('window').width;
const innerHeight = Dimensions.get('window').height;

const Storie = ({item, index, carousel, stories}) => {


    const [storieItem, setStorieItem] = useState(0)

    function renderLikes({item: likes, index}) {
      
        return (
            <View style={[ styles.postLikeContainer, {right: (1 * 7)} ]}>
                <PostLikeProfile source={likes?.user?.profilePic} />
            </View>
        )

    }

    return (
        <View >
            <StorieItemNext 
                onPress={() => { 
                  if(storieItem !== item.stories.length - 1){
                      setStorieItem(storieItem + 1)
                  }else {
                      carousel.current.snapToNext()
                  }
                }}> 
            </StorieItemNext>

            {index === 1 ? (
                <StorieContainer> 
                    <UserHeader>
                        <ProfilePicContainer>
                            {item?.type === 'image' ? (
                              <ProfilePic 
                                source={{ uri:`https://insta-clone-hermano.herokuapp.com/stories/${item?.type}/${item?.path}`}} 
                              />
                            ):(
                              <Video 
                                source={{ uri:`https://insta-clone-hermano.herokuapp.com/stories/${item?.type}/${item?.path}`}} 
                              />
                            )}
                        </ProfilePicContainer>
                     
                        <UserHeaderBody>
                            <UserNameContainer>
                                <UserName>hermano 17h</UserName>
                            </UserNameContainer>
                            <StorieInformation>
                                <StorieInformatioText>Assistur ao vídeo do Reels completo</StorieInformatioText>
                            </StorieInformation>
                        </UserHeaderBody>
                    </UserHeader>

      
                    {item?.user.stories[0].type === 'image' ? (
                      <StyledImage
                        source={{ uri:`https://insta-clone-hermano.herokuapp.com/stories/${item?.user.stories[0].type}/${item?.user.stories[0].path}`}} 
                      />
                    ):(
                      <Video 
                        isMuted
                        shouldPlay
                        useNativeControls={false}
                        usePoster={true}
                        isLooping
                        resizeMode="contain"
                        style={styles.image}  
                        source={{ uri:`https://insta-clone-hermano.herokuapp.com/stories/${item?.user.stories[0].type}/${item?.user.stories[0].path}`}} 
                      />
                    )}

                    <UserBottom> 
                        <StorieVisualiztionsContainer >
                            <Visualizations
                                horizontal
                                data={item.likes}
                                keyExtractor={item => item.id}
                                renderItem={({item, index}) => renderLikes(item, index)}
                            />
                                
                            <ActionText>Visto por </ActionText>
                        </StorieVisualiztionsContainer>

                        <BottomActionSecond>
                          <Feather name="camera" size={24} color="#fff" />  
                          <ActionText>Compartilhar</ActionText>
                        </BottomActionSecond>

                        <BottomActionThird>
                          <Feather name="camera" size={24} color="#fff" /> 
                          <ActionText>Destacar</ActionText>
                        </BottomActionThird>

                        <BottomActionLast>
                          <Entypo name="dots-three-vertical" size={24} color="#fff" />
                          <ActionText>Mais</ActionText>
                        </BottomActionLast>
                    </UserBottom>
                </StorieContainer> 
            ):(
                <StorieContainer> 
                    <UserHeader >
                        <ProfilePicContainer >
                          <ProfilePic source={'https://picsum.photos/720'} />
                        </ProfilePicContainer>

                        <UserHeaderBody >
                          <UserNameContainer >
                              <UserName>hermano 17h</UserName>
                          </UserNameContainer>
                        </UserHeaderBody>
                    </UserHeader>
                    
                    {item?.user.stories[0].type === 'image' ? (
                      <StyledImage  
                        source={{ uri:`https://insta-clone-hermano.herokuapp.com/stories/${item?.user.stories[0].type}/${item?.user.stories[0].path}`}} 
                      />
                    ):(
                      <Video 
                        isMuted
                        shouldPlay
                        useNativeControls={false}
                        usePoster={true}
                        isLooping
                        resizeMode="contain"
                        style={styles.image}  
                        source={{ uri:`https://insta-clone-hermano.herokuapp.com/stories/${item?.user.stories[0].type}/${item?.user.stories[0].path}`}} 
                      />
                    )}

                    <InputBottom>
                      <TextInput
                        style={{
                          backgroundColor: 'transparent',
                          borderRadius: 15,
                          borderWidth:1,
                          borderColor:'#fff',
                          outline:'none',
                          borderStyle: 'solid',
                          color: '#fff',  
                          width: '75%',
                          padding: 10,
                        }}

                        placeholder={`https://insta-clone-hermano.herokuapp.com/stories/${item?.user.stories[0].type}/${item?.user.stories[0].path}`}
                      />
              
                      <Feather name="send" size={24} color="#fff" />
                    </InputBottom>
                </StorieContainer> 
            )}
            

            <StorieItemPrev onPress={() => { if(storieItem !== 0){setStorieItem(storieItem - 1)} }}> 
              
            </StorieItemPrev>
        </View>
    );
}


const Stories = () => {

    const carousel = useRef(null)
    const [stories, setStories] = useState([])

    useEffect(() => {

      api.get(`/user/${1}/following/stories`).then(response => {

        setStories(response.data)
  
      })
    },[])

    function renderItem({item, index, carousel}){
        return(
            <Storie item={item} index={index} carousel={carousel} />
        )
    }

    return (
        <Carousel
          ref={(c) => {carousel.current = c }}
          data={stories}
          renderItem={({item, index}) => {
              if(carousel !== undefined){
               
                return(
                    renderItem({item, index, carousel, stories})
                )
              } 
          }} 
          sliderWidth={innerWidth}
          itemWidth={innerWidth}
        />
    )
}


const styles = StyleSheet.create({
    storieContainer:{
        top: -innerHeight + 192 , 
        height: innerHeight ,
        width: innerWidth ,
    },
    image:{
        zIndex: 9,
        top: 0,
        position: 'absolute',
        height:  innerHeight ,
        width:  innerWidth ,
    },
    storieItemNext:{
        position:'relative',
        height:  innerHeight * 0.7 ,
        justifyContent:'center',
        width:  innerWidth/2 ,
        top: innerHeight * 0.1, 
        left:  innerWidth/2,
        zIndex: 9,
        elevation: 9,
    },
    storieItemPrev:{
        position:'absolute',
        height:  innerHeight * 0.7 ,
        justifyContent:'center',
        width:  innerWidth/2 ,
        top: innerHeight * 0.1, 
        left:  0,
        zIndex: 9,
        elevation: 9,
    },
    userHeader:{
        marginTop: 15,
        alignSelf: 'flex-start', 
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 15,
        zIndex: 10, 
    },
    profilePicContainer:{
        zIndex: 11, 
    },
    profilePic:{
        height:35,
        width:35,
        zIndex: 12, 
        borderRadius: 10000,
    },
    moreIcon:{
      zIndex: 13, 
    },
    userHeaderBody:{
      justifyContent: 'center', 
      flexDirection: 'column',
      marginLeft: 15,
      zIndex: 14,
    },
    userNameContainer:{
      zIndex: 15,
    },
    userName:{
      fontWeight: 'bold',
      color: '#fff',
      zIndex: 16,
    },
    storieInformation:{
      zIndex: 17,
    },
    storieIndicator:{
      zIndex: 18,
    },
    storieInformatioText:{
      color: '#fff',
      fontWeight: 'bold',
      zIndex: 19,
    },

    userBottom:{
      zIndex: 20,
      marginBottom: 15,
      flexDirection: 'row',
      justifyContent: 'space-around',
      top: innerHeight - 105,
      width: '95%',
    },
    inputBottom:{
      zIndex: 20,
      marginBottom: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      top: innerHeight - 125,
      width: '95%',
      marginHorizontal:'auto',
      padding: 10,
      borderRadius: 15,
    },
    storieVisualiztionsContainer:{
      marginLeft: 15,
      zIndex: 21,
    },
    storieVisualizations:{
      zIndex: 22,
    },
    bottomActionSecond:{
      alignItems: 'center',
      marginLeft: 'auto',
      alignItems: 'center',
      zIndex: 23,
    },
    bottomActionThird:{
      alignItems: 'center',
      marginLeft: 15,
      alignItems: 'center',
      zIndex: 23,
    },
    bottomActionLast:{
      alignItems: 'center',
      marginLeft: 15,
      alignItems: 'center',
      zIndex: 23,
    },
    actionIcon:{
      zIndex: 24,
      height: 20,
      width: 20,
    },
    actionText:{
      zIndex: 25,
      color: '#fff',
      fontWeight: 'bold',
    },
    visualizations:{
      flexDirection: 'row',
      zIndex: 26,
      height: 20,
    },
    postLikeContainer:{
      
    },
    postLikeProfile:{
      height: 20,
      width: 20,
      borderRadius: 10000,
      borderWidth: 1,
      borderColor: '#000',
    }
});
  

export default Stories