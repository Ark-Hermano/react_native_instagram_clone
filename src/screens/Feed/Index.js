import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Dimensions
} from 'react-native';

import Post from './components/Post/Index'
import StorieList from './components/StorieList/Index'

import instaLogo from '../../../assets/invertedColors/instagramName.png'
import { AntDesign } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import api from '../../service/api';

import {Background, HeaderIcon, Top, Scroll, LogoContainer, Logo} from './style'

const innerHeight = Dimensions.get('window').height;

function Feed({navigation}) {

  const [posts, setPosts] = useState([])
  const [stories, setStories] = useState([])

  useEffect(() => {
    
    api.get('/posts').then(response => {

      setPosts(response.data)

    })

    api.get(`/user/${1}/following/stories`).then(response => {

      setStories(response.data)

    })

  },[])

  function renderItem({ item: post, id,}) {

    return (
      <Post post={post} navigatio={navigation} />
    );
  }

  function renderStories({item: storie, i}){

    return (
      <StorieList key={i} storie={storie} navigation={navigation} />
    )
  }

  return (
    <Background>
      <Top>
          <LogoContainer>
            <Logo source={instaLogo}/>
          </LogoContainer>

          <AntDesign name="pluscircleo"  onClick={() => { navigation.navigate('Create') }} size={24} color="#fff" />

          <AntDesign name="hearto" onClick={() => { navigation.navigate('Notifications') }}  size={24} color="#fff" />

          <Fontisto name="messenger" onClick={() => { navigation.navigate('Chat') }} size={24} color="#fff" />
      </Top>

      <SafeAreaView style={{ height: innerHeight - 120 }}>
        <View  > 
          <Scroll
            horizontal
            showsHorizontalScrollIndicator={false}
            data={stories}
            keyExtractor={item => item.id}
            renderItem={renderStories}
          /> 
        </View>

     
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />  
      </SafeAreaView>
    </Background>
  );
}

export default Feed;

