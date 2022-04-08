import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { Feather } from '@expo/vector-icons'; 

import {Conversation, ProfilePicContainer, ProfilePic, Information, LastConversation} from './Style'

const Index = ({selectConversation}) => {
  return (
    <Conversation>
        <ProfilePicContainer>
            <ProfilePic source={'https://picsum.photos/1080'} />
        </ProfilePicContainer>
        <Information onClick={() => {selectConversation()}} >
            <Title>
              <Text>Hermano</Text>  
            </Title>
            <LastConversation>8 novas mensages 1 h</LastConversation>
        </Information>
        <View>
          <Feather name="camera" size={24} color="#fff" />
        </View>
    </Conversation>
  )
}

export default Index


