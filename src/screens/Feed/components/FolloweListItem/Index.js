import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { Post } from './style'

const Index = () => {
  return (
    <FollowerContainer >
        <FollowerPicContainer>
          <FollowerPic source={'https://picsum.photos/720'} />
        </FollowerPicContainer>

        <Information>
          <FollowerName>Hermano</FollowerName>
          <FollowerSurname>majora</FollowerSurname>
        </Information>

        <SengButton>
          <SendText>Enviar</SendText>
        </SengButton>

    </FollowerContainer>
  )
}

export default Index
