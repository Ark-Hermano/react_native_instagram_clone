import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons'; 

const Index = () => {
  return (
    <CommentContainer>
        <ProfilePicContainer>
          <ProfilePic 
            source={'https://picsum.photos/720'}  
          />
        </ProfilePicContainer>

        <TextContainer>
          <CommentBody>
              <CommentText>
                <Author>
                    Hermano_sama
                </Author>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </CommentText>
          </CommentBody>

          <AntDesign name="heart" size={24} color="#fff" />
        </TextContainer>
    </CommentContainer>
  )
}

export default Index
