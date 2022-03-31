import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,

} from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

function Comments({navigation}){

  const post = {
    comments:[
      {},
      {},
      {},
      {},
      {},
    ]
  }

  function renderComment(item){

    return(
      <Comment />
    )

  }

  return (
    <ScrollView style={{backgroundColor: '#000'}}>

      <View style={stylesTop.top}>
        <AntDesign onClick={() => {  navigation.goBack()}} style={styles.backIcon}  name="arrowleft" size={24} color="black" />
        
        <View style={stylesTop.sectionName}>
            <Text style={{
              color: "#fff",
              fontSize: 22,
              fontWeight: 'bold',
            }}>Comentários</Text>
        </View>
        
        <Feather name="send" size={24} style={stylesTop.sendIcon}  color="black" />

      </View>


      <View style={styles.postBodyContainer}>
        <View style={styles.profilePicContainer}>
          <Image style={styles.profilePic} source={'https://picsum.photos/1080'} />
        </View>

        <View style={styles.postBody}>
          <Text style={styles.postText}>
            <Text style={styles.postAuthor}>
              hermano_sama
            </Text>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          </Text>
        </View>
      </View> 
      

    
      <FlatList
        style={styles.commentsSection}
        data={post.comments}
        keyExtractor={item => item.id}
        renderItem={renderComment}
      />
   

    </ScrollView>
  )

}

export default Comments

const stylesTop = StyleSheet.create({
  top:{
    flexDirection: 'row',
    height: 60,
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
    paddingHorizontal: 15,
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
  commentContainer:{
    flexDirection: 'row',
    zIndex:1,
    marginBottom: '25px',
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
     zIndex:6,
  },
  commentText:{
    color: '#fff',
     zIndex:7,
  },
  like:{
     zIndex:8,
     width: 15,
     height: 15,
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
    padding: 20,
    zIndex:12,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#515151',
  },
  profilePicContainer:{
    height: 35,
    width: 35,
    zIndex:13,
  },
  profilePic:{
    borderRadius: 1000,
    height: 35,
    width: 35,
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
    padding: 20,
  },
  postText:{
    zIndex:19,
    color: '#fff',
  }

})