import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, Image} from 'react-native'
import React, {useRef} from 'react'

import Header from '../Header/Index'

import { Modalize } from 'react-native-modalize';
import { Host, Portal } from 'react-native-portalize';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  

import { ModalContainer, SendPostPic, ProfilePic } from './style'

import { 
    SendWithTextContainer, 
    SendStoryContainer,
    SendStoryTextContainer,
    SendStoryText,
    CreateGroupContainer,
    CreateGroupTextContainer,
    CreateGroupText,
    InputContainer, 
    SearchContainer,
    ModalSendStyles
} from './style'

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

