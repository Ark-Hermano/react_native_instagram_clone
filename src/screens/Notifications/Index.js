import React from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';

import './components/Notification/Index'

import { AntDesign } from '@expo/vector-icons'; 

function Comments({navigation}){

  const post = {
    comments:[
      {profile:true},
      {profile:false},
      {profile:true},
      {profile:false},
      {profile:true},
    ]
  }

  function renderNotification(item){

    return(
      <Notification />
    )

  }

  return (
    <ScrollView style={{backgroundColor: '#000'}}>

      <View style={stylesTop.top}>
        <AntDesign onClick={() => {  navigation.goBack()}} style={styles.backIcon}  name="arrowleft" size={24} color="black" />

        <View style={stylesTop.sectionName}>
            <Text style={{
              color: "#fff",
              fontSize: '22px',
              fontWeight: 'bold',
            }}>Atividade</Text>
        </View>

      </View>
      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitleText}>Ontem</Text>
        </View>

        <FlatList
          style={styles.notificationList}
          data={post.comments}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderNotification(item)}
        />
      </View>
      

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitleText}>Esta semana</Text>
        </View>

        <FlatList
          style={styles.notificationList}
          data={post.comments}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderNotification(item)}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitleText}>Este mês</Text>
        </View>

        <FlatList
          style={styles.notificationList}
          data={post.comments}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderNotification(item)}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitleText}>Anteriores</Text>
        </View>

        <FlatList
          style={styles.notificationList}
          data={post.comments}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderNotification(item)}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitleText}>Sugestões para você</Text>
        </View>

        <FlatList
          style={styles.notificationList}
          data={post.comments}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderNotification(item)}
        />
      </View>
   

    </ScrollView>
  )

}

export default Comments

const stylesTop = StyleSheet.create({
  top:{
    height: '60px',
    flexDirection: 'row',
    height: '60px',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  
  backIcon:{
    height: 30,
    width: 25,
  },
  sectionName:{
    width: '60%',
  },
  sendIcon:{
    height: 20,
    width: 20,
  },


})

const styles = StyleSheet.create({

  top: {
    height:60,
    backgroundColor:'#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '15px',
    alignItems: 'center'
  }, 
  listsIcon:{
      height:20,
      width:20,
  },
  newMessageIcon:{
      height:20,
      width:20,
  },
  sectionTitle:{
    color: '#fff',
  },
  notificationContainer:{
    zIndex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: '10px',
    paddingRight: '15px',
    paddingLeft: '15px',

  },
  profilePicContainer:{
    zIndex:2,
  },
  profilePic:{
    zIndex:3,
  },
  textContainer:{
    width: '85%',
    justifyContent: 'space-between',
    marginLeft: '15px',
    flexDirection: 'row',
  },
  commentBody:{
    width: '90%',
    flexDirection: 'row',
     zIndex:5,
  },
  author:{
    fontWeight: 'bold',
    color: '#fff',
    marginRight: '6px',
     zIndex:6,
  },
  commentText:{
    color: '#fff',
     zIndex:7,
  },
  like:{
     zIndex:8,
     width: '15px',
     height: '15px',
     flexDirection: 'row',
  },
  top:{
     zIndex:9,
  },
  backIcon:{
     zIndex:10,
  },
  newMessageIcon:{
     zIndex:11,
  },
  postBodyContainer:{
    padding: '20px',
    zIndex:12,
    flexDirection: 'row',
    borderBottomWidth: '1px',
    borderColor: '#515151',
  },
  profilePicContainer:{
    height: '35px',
    width: '35px',
    zIndex:13,
  },
  profilePic:{
    borderRadius: '100%',
    height: '35px',
    width: '35px',
    zIndex:14,
    flexDirection: 'row',
  },
  postBody:{
    zIndex:15,
    width: '80%',
    marginLeft: '20px',
  },
  postAuthor:{
    zIndex:16,
    fontWeight: 'bold',
    color: '#fff',
  },
  post:{
    zIndex:17,
  },
  commentsSection:{
    zIndex:18,
    padding: '20px',
  },
  postText:{
    zIndex:19,
    color: '#fff',
  },
  postImage:{
    height: '40px',
    zIndex: '20',
    width: '40px',
    borderRadius: '0px',

  },
  postContainer:{
    width: '60px',
    zIndex:21,
    alignItems: 'center',
  },
  followText:{
    zIndex:22,
    color: '#fff',
  },
  followButton:{
    backgroundColor: '#0095f6',
    paddingVertical: '5px',
    paddingHorizontal: '10px',
    borderRadius: '5px',
    zIndex:23,
  },
  notificationTime:{
    marginLeft: '5px',
    fontSize: '12px',
    color: '#7d7d7d',
    zIndex:24,
  },
  notificationText:{
    color: '#fff',
    zIndex:25,
  },
  notificationBody:{
    zIndex:26,
    width: '65%',
  },
  section:{
    zIndex:27,
  },
  sectionHeader:{
    width: '91%',
    alignSelf: 'center',
    marginTop: '15px',
    marginBottom: '10px',
    zIndex:28,
  },
  sectionTitleText:{
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    zIndex:29,
  },
})