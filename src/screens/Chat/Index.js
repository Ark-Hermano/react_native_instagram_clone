import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, TextInput, Text, Button, TouchableOpacity } from 'react-native';


import Conversation from './components/Conversation/Index'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 


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
            <Top>
                <AntDesign onClick={() => { navigation.goBack()}} name="arrowleft" size={24} color="#fff" />

                <ActiveUser>
                    <View>hermano_sama</View>
                </ActiveUser>

                <FontAwesome name="list-ul" size={24} color="#fff" />

                <Foundation name="pencil" size={24} color="#fff" />
            </Top>

            <SearchContainer>
                <SearchBar>
                    <AntDesign name="search1" size={24} color="#fff" />
                   
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

                    <MaterialCommunityIcons name="tune-vertical" size={24} color="#fff" />
                </SearchBar>
            </SearchContainer>

            <TabsContainer>
                <TouchableOpacity onPress={() => {changeTab(0)}} style={tabIndex === 0 ? stylesTab.selectedTabButton : stylesTab.tabButton}>
                    <TabText>Principal</TabText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {changeTab(1)}} style={tabIndex === 1 ? stylesTab.selectedTabButton : stylesTab.tabButton}>
                    <TabText>Geral</TabText>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => {changeTab(2)}} style={tabIndex === 2 ? stylesTab.selectedTabButton : stylesTab.tabButton}>
                    <TabText>Solicitações</TabText>
                </TouchableOpacity>
            </TabsContainer>
            
            <ChatContainer>
                <FlatList
                    data={returnPosts()}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </ChatContainer>
           
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



export default Feed