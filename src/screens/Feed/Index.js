import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  Animated
} from 'react-native';

import Post from './components/Post/Index'
import StorieList from './components/StorieList/Index'

import instaLogo from '../../../assets/invertedColors/instagramName.png'
import { AntDesign } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 

function Feed({navigation}) {

  const[text, setText] = useState('')
  let picText = ''
  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
  
  },[])

  const posts = [
    {
      id: '1',
      author: 'levir.dev',
      picture_url:
        'https://observatoriodocinema.bol.uol.com.br/wp-content/uploads/2019/08/69047060_359538678332469_1243013082205126656_n.png',
      likes: 1272,
      description: 'Saiu o filme do coringa!!!',
      hashtags: '#cinema #joker',
      place: 'Cinema do Shopping',
      likes:[
        {
          id:'2',
          user:{
            profilePic: 'https://picsum.photos/720'
          }
        }
      ],
      comments:[
        {},{},{},{},{},{},{},{},{},{},
      ],
    },
    {
      id: '2',
      author: 'levir.dev',
      picture_url:
        'https://s2.glbimg.com/VUgvvuWb7QZ_q0Rfqg_EHLIV32U=/top/e.glbimg.com/og/ed/f/original/2019/08/05/angelina1.png',
      likes: 784,
      description: 'Saiu o filme malevola!!!',
      hashtags: '#cinema #malevola',
      place: 'Cinema do Shopping',
      likes:[
        {
          id:'5',
          user:{
            profilePic: 'https://picsum.photos/720'
          }
        },
        {
          id:'3',
          user:{
            profilePic: 'https://picsum.photos/720'
          }
        }
      ],
      comments:[
        {},{},{},{},{},{},{},{},{},{},
      ],
    },
    {
      id: '3',
      author: 'levir.dev',
      picture_url:
        'http://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg',
      likes: 397,
      description: 'Saiu o filme rei leão!!!',
      hashtags: '#cinema #reileao',
      place: 'Cinema do Shopping',
      likes:[
        {
          id:'3',
          user:{
            profilePic: 'https://picsum.photos/720'
          }
        },
        {
          id:'3',
          user:{
            profilePic: 'https://picsum.photos/720'
          }
        },
        {
          id:'3',
          user:{
            profilePic: 'https://picsum.photos/720'
          }
        }
      ],
      comments:[
        {},{},{},{},{},{},{},{},{},{},
      ],
    }
  ];

  const stories = [
      {
           id: '1',
        closeFriend:true,
        visualized:false,
    
      },
        {
             id: '1',
        closeFriend:false,
        visualized:false
      },
      {
        id: '1',
        closeFriend:true,
        visualized:true
      },
      {
        id: '1',
        closeFriend:true,
        visualized:true
      },
      {
        id: '1',
        closeFriend:true,
        visualized:true
      },
      {
        id: '1',
        closeFriend:true,
        visualized:true
      },
      {
        id: '1',
        closeFriend:true,
        visualized:true
      },
      {
        id: '1',
        closeFriend:true,
        visualized:true
      },
      {
        id: '1',
        closeFriend:true,
        visualized:true
      },]

  function renderItem({ item: post, id,}) {

    return (
      <Post post={post} />
    );
  }

  function renderStories({item: storie, i}){

    return (
      <StorieList key={i} storie={storie} />
    )
  }

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.top}>
       
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={instaLogo}/>
          </View>

          <AntDesign name="pluscircleo"  onClick={() => { navigation.navigate('Create') }} style={styles.headerIcon} size={24} color="black" />

          <AntDesign name="hearto" onClick={() => { navigation.navigate('Notifications') }} style={styles.headerIcon}  size={24} color="black" />

          <Fontisto name="messenger" onClick={() => { navigation.navigate('Chat') }} style={styles.headerIcon} size={24} color="black" />
      </View>

      <ScrollView style={{ height: window.innerHeight - 120 }}>
        <View  > 
          <FlatList
            horizontal
            style={storieStyles.scroll}
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
      </ScrollView>

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

