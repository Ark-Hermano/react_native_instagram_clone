import React from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';

import './components/Notification/Index'

import { AntDesign } from '@expo/vector-icons'; 

function Comments({navigation}){

  const post = {
    comments:[
      {profile:true},
      {profile:false},
      {profile:true},
      {profile:false},
      {profile:true},
    ]
  }

  function renderNotification(item){

    return(
      <Notification />
    )

  }

  return (
    <ScrollView style={{backgroundColor: '#000'}}>

      <Top>
        <AntDesign onClick={() => {  navigation.goBack()}}  name="arrowleft" size={24} color="#fff" />

        <SectionName>
            <Text style={{
              color: "#fff",
              fontSize: 22,
              fontWeight: 'bold',
            }}>Atividade</Text>
        </SectionName>
      </Top>
      
      <Section>
        <SectionHeader>
          <SectionTitleText>Ontem</SectionTitleText>
        </SectionHeader>

        <NotificationList
          data={post.comments}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderNotification(item)}
        />
      </Section>
      

      <Section>
        <SectionHeader>
          <SectionTitleText>Esta semana</SectionTitleText>
        </SectionHeader>

        <NotificationList
          data={post.comments}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderNotification(item)}
        />
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitleText>Este mês</SectionTitleText>
        </SectionHeader>

        <NotificationList
          data={post.comments}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderNotification(item)}
        />
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitleText>Anteriores</SectionTitleText>
        </SectionHeader>

        <NotificationList
          data={post.comments}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderNotification(item)}
        />
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitleText>Sugestões para você</SectionTitleText>
        </SectionHeader>

        <NotificationList
          data={post.comments}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderNotification(item)}
        />
      </Section>
   

    </ScrollView>
  )

}

export default Comments


