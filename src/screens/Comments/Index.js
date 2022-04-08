import React from 'react';
import {
  Text,
  ScrollView,

} from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

function Comments({navigation}){

  const post = {
    comments:[
      {},
      {},
      {},
      {},
      {},
    ]
  }

  function renderComment(item){

    return(
      <Comment />
    )

  }

  return (
    <ScrollView style={{backgroundColor: '#000'}}>

      <Top>
        <AntDesign onClick={() => {  navigation.goBack()}} name="arrowleft" size={24} color="#fff" />
        
        <SectionName>
            <Text style={{
              color: "#fff",
              fontSize: 22,
              fontWeight: 'bold',
            }}>Comentários</Text>
        </SectionName>
        
        <Feather name="send" size={24}  color="#fff" />
      </Top>


      <PostBodyContainer>
        <ProfilePicContainer>
          <ProfilePic source={'https://picsum.photos/1080'} />
        </ProfilePicContainer>

        <PostBody>
          <PostText>
            <PostAuthor>
              hermano_sama
            </PostAuthor>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          </PostText>
        </PostBody>
      </PostBodyContainer> 
      
      <CommentsSection
        data={post.comments}
        keyExtractor={item => item.id}
        renderItem={renderComment}
      />
   
    </ScrollView>
  )

}

export default Comments
