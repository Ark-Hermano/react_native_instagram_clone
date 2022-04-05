import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  Animated,
  Dimensions
} from 'react-native';

import Post from './components/Post/Index'
import StorieList from './components/StorieList/Index'

import instaLogo from '../../../assets/invertedColors/instagramName.png'
import { AntDesign } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import api from '../../service/api';

const innerHeight = Dimensions.get('window').height;

function Feed({navigation}) {

  const [text, setText] = useState('')
  const [posts, setPosts] = useState([])
  const [stories, setStories] = useState([])

  let picText = ''
  const pan = useRef(new Animated.ValueXY()).current;

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
    <SafeAreaView style={styles.background}>
      <View style={styles.top}>
       
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={instaLogo}/>
          </View>

          <AntDesign name="pluscircleo"  onClick={() => { navigation.navigate('Create') }} style={styles.headerIcon} size={24} color="#fff" />

          <AntDesign name="hearto" onClick={() => { navigation.navigate('Notifications') }} style={styles.headerIcon}  size={24} color="#fff" />

          <Fontisto name="messenger" onClick={() => { navigation.navigate('Chat') }} style={styles.headerIcon} size={24} color="#fff" />
      </View>

      <SafeAreaView style={{ height: innerHeight - 120 }}>
        <View  > 
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={storieStyles.scroll}
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

    </SafeAreaView>
  );
}

const storieStyles = StyleSheet.create({
  scroll:{
    flexDirection: 'row',
    marginVertical: 15
  }
})


const styles = StyleSheet.create({
  background:{
    backgroundColor:'#000',
  },

  top: {
    height:60,
    backgroundColor:'#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center'
  }, 

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

});

export default Feed;

