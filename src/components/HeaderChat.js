import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';

import { Foundation } from '@expo/vector-icons'; 

function headerTab(navigation){

    return(
        <View style={styles.top}>
            <AntDesign onClick={() => {  navigation.goBack()}} style={styles.backIcon}  name="arrowleft" size={24} color="black" />
            <View style={styles.activeUser}>
                <View  >hermano_sama</View>
            </View>
            <FontAwesome style={styles.listsIcon} name="list-ul" size={24} color="black" />

            <Foundation style={styles.newMessageIcon} name="pencil" size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        height:40,
        backgroundColor:'#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '15px',
        alignItems: 'center',
        position: 'absolute',
        height: '65px',
        width: '100vw',
        left: '-16px',
    }, 
    searchContainer: {
        height:40,
        backgroundColor:'#000',
        justifyContent: 'center'

    },
    chatContainer:{
        backgroundColor: '#000',
        height: '100%'
    },
    activeUser:{
        width: '65%',
        color: '#fff',
        fontFamily:'sans-serif',
        fontWeight:'bold',
    },
    listsIcon:{
        height:20,
        width:20,
    },
    newMessageIcon:{
        height:20,
        width:20,
    },
    searchBar: {
      flexDirection: 'row',
      backgroundColor:'#000',
      marginHorizontal: 15,
      borderRadius:8,
      paddingVertical: 5,
      paddingHorizontal: 15,
      backgroundColor:'rgb(61,61,61)',
      justifyContent: 'space-between',
      alignItems: 'center',

    },
    backIcon:{
        height:20,
        width:20,
    },
    topBarTitle:{
        fontSize: 15,
        color: '#fff',
    },
    searchInput:{
    },
    searchIcon:{
        height:20,
        width:20,
    },
    settingsIcon:{
        height:20,
        width:20,
    }
})

export default headerTab