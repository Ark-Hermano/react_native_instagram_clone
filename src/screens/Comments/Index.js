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

import like from '../../../assets/invertedColors/emptyLike.png';
import backIcon from '../../../assets/invertedColors/backIcon.png'
import pencil from '../../../assets/invertedColors/pencil.png'
import send from '../../../assets/invertedColors/send.png';

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
        <Image onClick={() => { navigation.goBack() }} style={stylesTop.backIcon} source={backIcon}/>
        <View style={stylesTop.sectionName}>
            <Text style={{
              color: "#fff",
              fontSize: '22px',
              fontWeight: 'bold',
            }}>Comentários</Text>
        </View>

        <Image style={stylesTop.sendIcon} source={send}/>
      </View>


      <View style={styles.postBodyContainer}>
        <View style={styles.profilePicContainer}>
          <Image style={styles.profilePic} source={'https://picsum.photos/1080'}/>
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
  }

})