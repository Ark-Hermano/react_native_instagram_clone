import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <NotificationContainer>
        <ProfilePicContainer>
          <ProfilePic 
              source={'https://picsum.photos/720'}  
          />
        </ProfilePicContainer>

        <NotificationBody>
            <NotificationText>
              <TouchableOpacity onPress={() => { navigation.navigate('User') }}>
                  <Author>
                    Hermano_sama
                  </Author>
              </TouchableOpacity>

              Lorem ipsum dolor sit amet

              <NotificationTime>
                  5 sem
              </NotificationTime>
            </NotificationText>
        </NotificationBody>

        {item.profile === true ? (
            <FollowButton>
                <FollowText>
                    Seguir
                </FollowText>
            </FollowButton>
        ):(
            <PostContainer>
                <PostImage source={'https://picsum.photos/1080'}/>
            </PostContainer>
        )}
    </NotificationContainer>
  )
}

export default Index

