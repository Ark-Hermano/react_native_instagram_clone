import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, TextInput, Text, Button, TouchableOpacity } from 'react-native';


import Conversation from './components/Conversation/Index'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 


function Feed({ navigation }) {

    const conversations = [{},{},{},{},{},{},{},{},{},{},{},{}]
    const generalConversations = [{}]
    const sols = [{},{},{},{},{}]

    const [tabIndex, setTabIndex] = useState(0)

    useEffect(() => {
        navigation.setOptions({
            tabBarStyle: { display: 'none' },
          });
    },[tabIndex])

    function selectConversation(){
        navigation.navigate('Conversation')
    }

    TouchableOpacity.defaultProps = { activeOpacity: 0.5 };

    function renderItem () {

        return (
            <View>
                <Conversation selectConversation={selectConversation} />
            </View>
        )
    }

    function returnPosts () {

        if(tabIndex === 0){
            return conversations
        }

        if(tabIndex === 1){
            return generalConversations  
        }

        if(tabIndex === 2){
            return sols
        }

    }

    function changeTab(index){
        setTabIndex(index)
    }

    return(
        <View>
            <View style={styles.top}>
                <AntDesign onClick={() => {  navigation.goBack()}} style={styles.backIcon}  name="arrowleft" size={24} color="black" />

                <View style={styles.activeUser}>
                    <View  >hermano_sama</View>
                </View>
                <FontAwesome name="list-ul" style={styles.listsIcon} size={24} color="black" />

                <Foundation name="pencil" style={styles.newMessageIcon} size={24} color="black" />
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>

                    <AntDesign name="search1" style={styles.searchIcon} size={24} color="black" />
                   
                    <TextInput 
                        placeholder="Pesquisar" 
                        style={{
                            color:'#fff',
                            background:'inherit',
                            border:'0px',
                            outline: 'none',
                            fontSize: 15,
                            width: '82%',
                        }} 
                    />

                    <MaterialCommunityIcons style={styles.settingsIcon}  name="tune-vertical" size={24} color="black" />

                </View>
            </View>

            <View style={stylesTab.tabsContainer}>
                <TouchableOpacity onPress={() => {changeTab(0)}} style={tabIndex === 0 ? stylesTab.selectedTabButton : stylesTab.tabButton}>
                    <Text style={stylesTab.tabText}>Principal</Text>
               
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {changeTab(1)}} style={tabIndex === 1 ? stylesTab.selectedTabButton : stylesTab.tabButton}>
                    <Text style={stylesTab.tabText}>Geral</Text>
               
                </TouchableOpacity >
                <TouchableOpacity onPress={() => {changeTab(2)}} style={tabIndex === 2 ? stylesTab.selectedTabButton : stylesTab.tabButton}>
                    <Text style={stylesTab.tabText}>Solicitações</Text>
                   
                </TouchableOpacity>
            </View>
            
            <View style={styles.chatContainer}>
                <FlatList
                    data={returnPosts()}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
           
        </View>
    )

}

const stylesTab = StyleSheet.create({
    tabsContainer:{
        flexDirection: 'row',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        height: 40,
        alignItems: 'center'
    },
    tabButton:{
        width: '33.5%',
        padding: 10,
        backgroundColor: '#000',
        height: '-webkit-fill-available',
    },
    selectedTabButton:{
        width: '33%',
        padding: 10,
        backgroundColor: '#000',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        height: '-webkit-fill-available',
    },
    tabText:{
        fontWeight: 'bold',
        fontSize: 13,
        color: '#fff',
    }    
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
    activeUser:{
        width: '65%',
        color: '#fff',
        fontFamily:'sans-serif',
        fontWeight:'bold',
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


export default Feed