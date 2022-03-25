import { StyleSheet, Text, View } from 'react-native'
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

const styles = StyleSheet.create({})