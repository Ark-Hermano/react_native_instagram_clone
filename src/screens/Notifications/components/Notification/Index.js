import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={styles.notificationContainer}>
        <View style={styles.profilePicContainer}>
          <Image 
              style={styles.profilePic} 
              source={'https://picsum.photos/720'}  
          />
        </View>

        <View style={styles.notificationBody}>
            <Text style={styles.notificationText}>
            <TouchableOpacity onPress={() => { navigation.navigate('User') }}>
                <Text  style={styles.author}>
                Hermano_sama
                </Text>
            </TouchableOpacity>
            "Lorem ipsum dolor sit amet"
            <Text style={styles.notificationTime}>
                5 sem
            </Text>
            </Text>
        </View>

        {item.profile === true ? (
            <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followText}>
                    Seguir
                </Text>
            </TouchableOpacity>
        ):(
            <View style={styles.postContainer}>
                <Image style={styles.postImage} source={'https://picsum.photos/1080'}/>
            </View>
        )}
        

    </View>
  )
}

export default Index


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
    sectionTitle:{
      color: '#fff',
    },
    notificationContainer:{
      zIndex:1,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: 10,
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
      marginLeft: 15,
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
      marginLeft: 20,
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
    },
    postImage:{
      height: 40,
      zIndex: 20,
      width: 40,
      borderRadius: 0,
  
    },
    postContainer:{
      width: 60,
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
      paddingHorizontal: 10,
      borderRadius: 5,
      zIndex:23,
    },
    notificationTime:{
      marginLeft: 5,
      fontSize: 12,
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
      marginTop: 15,
      marginBottom: '10px',
      zIndex:28,
    },
    sectionTitleText:{
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      zIndex:29,
    },
  })