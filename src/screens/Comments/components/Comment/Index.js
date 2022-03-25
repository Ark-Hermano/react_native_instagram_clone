import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={styles.commentContainer}>
        <View style={styles.profilePicContainer}>
        <Image 
            style={styles.profilePic} 
            source={'https://picsum.photos/720'}  
        />
        </View>

        <View style={styles.textContainer}>
        <View style={styles.commentBody}>
        
            <Text style={styles.commentText}>
            <Text style={styles.author}>
                Hermano_sama
            </Text>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            </Text>
        </View>

        <Image style={styles.like} source={like} />
        </View>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
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
  })