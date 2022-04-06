import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, Image} from 'react-native'
import React, {useRef} from 'react'

import Header from '../Header/Index'

import { Modalize } from 'react-native-modalize';
import { Host, Portal } from 'react-native-portalize';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  

import { ModalContainer, SendPostPic } from './style'

const Index = () => {

  const modalizeRef = useRef(null);

    const followers = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    const renderSendFollowers = ({item: follower}) => (
        <FollowerListItem />
    )

    const renderHeader = () => (
        <Header />
    )

    return (
        <Portal>
            <Modalize 
                handleStyle={{ width: 35, backgroundColor: '#75777a' }}
                withHandle={false}
                modalStyle={{marginTop: 0}}
                HeaderComponent={renderHeader}  
                snapPoint={window.innerHeight - 100} 
                ref={modalizeRef}
              >
                <ModalContainer>

                    <SendWithTextContainer >
                      <View>
                          <SendPostPic source={'https://picsum.photos/720'} />
                      </View>
                      <InputContainer>
                          <TextInput
                            style={{
                                color: '#fff',
                                outline:'none',
                                backgroundColor:'transparent',
                                border:'none'
                            }}
                            placeholder="Escreva uma messagem..."
                          />
                      </InputContainer>
                    </SendWithTextContainer>

                    <SearchContainer>
                        <AntDesign name="search1" size={24} color="#fff" />
                        <TextInput 
                            placeholder="Messagem..."
                            style={{
                                width: '65%',
                                background: 'none',
                                borderRadius: 0,
                                border: '0px',
                                outline: 'none',
                                color: 'rgb(255, 255, 255)',
                                marginLeft: 0,
                            }}
                        />
                    </SearchContainer>

                    <SendStoryContainer>
                      <View>
                          <ProfilePic source={'https://picsum.photos/720'} />
                      </View>

                      <SendStoryTextContainer>
                          <SendStoryText>Adicionar publicação ao seu story</SendStoryText>
                      </SendStoryTextContainer>
                    </SendStoryContainer>

                    <CreateGroupContainer>
                      <View>
                        <MaterialIcons name="groups" size={24} color="#fff" />
                      </View>

                      <CreateGroupTextContainer>
                          <CreateGroupText>Criar grupo</CreateGroupText>
                      </CreateGroupTextContainer>
                    </CreateGroupContainer>

                    <View>  
                      <ModalSendStyles
                        vertical
                        data={followers}
                        keyExtractor={item => item.id}
                        renderItem={renderSendFollowers}
                      />
                    </View>  

                </ModalContainer>
                
            </Modalize>
        </Portal>
    )
}

export default Index


const modalSendStyles = StyleSheet.create({
    header:{
      backgroundColor:'#272727',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      height: 25,
    },
    inputContainer:{
      marginLeft: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sendPostPic:{
      width: 35,
      height: 35,
      borderRadius: 5,
    },
    searchContainer: {
      borderRadius: 10,
      backgroundColor: '#000',
    },
    search:{
      width: 15,
      height: 15,
      marginLeft: 10,
      marginRight: '15px',
  
    },
    headerButton:{
      backgroundColor:'#ddd',
      width: 35,
      height: 6,
      borderRadius: 25,
    }, 
    createGroupContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px'
    },
    createGroupIcon:{
      height: 35,
      width: 35,
      borderRadius: 10000,
    },
    createGroupText:{
      color: '#fff',
      fontWeight: 'bold',
  
    },
    createGroupTextContainer:{
      marginRight: 'auto',
      paddingLeft: '10px'
    },
    sendStoryContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10
    },
    profilePic:{
      height: 35,
      width: 35,
      borderRadius: 10000,
    },
    sendStoryTextContainer:{
      paddingLeft: '10px',
    },
    sendStoryText:{
      color: '#0095f6'
    },
  
    searchContainer:{
      flexDirection: 'row',
      marginBottom: 10,
      borderRadius: 5,
      backgroundColor: '#494949',
      paddingTop: '5px',
      paddingBottom: '5px',
    },
    
    sendWithTextContainer:{
      flexDirection: 'row',
      marginBottom: 20
    },

    modalContainer:{
      height:'100%',
      backgroundColor: '#272727', 
      padding: 10
    }
    
  })