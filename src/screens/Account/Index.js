import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const innerWidth = Dimensions.get('window').width;

import {
  ScrollPostSections, 
  ScreenContainer,
  Topbar,
  TextWhite,
  SubTitle,
  ProfileData,
  ProfileResume,
  ProfileImage,
  InfoContainerTextData,
  InfoContainerLabel,
  BioContainer,
  ButtonActionsContainer,
  ButtonActionButton,
  ButtonText,
  StoriesHighlightsContainer,
  StorieTopBar,
  PostsContainer,
  TabsHeader,
  TabsButton,
  PostSection,
  StorieHighlightCreate
} from './Style'

function Account({navigation}){


  const [highlights, setHighlights] = useState([])
  const [posts, setPosts] = useState([])
  const [tabIndex, setTabIndex] = useState(0)

  useEffect(() => {

    setHighlights([
      {},
      {},
      {},
      {}
    ])

    setPosts([  
      { id: "0", type:'reels',  thumb:"./../../../assets/profile.jpg'",  source:'./../../../assets/example.mp4', title: "Relâmpago McQueen" },
      { id: "1", type:'post',   source:'./../../../assets/profile.jpg', title: "Agente Tom Mate" },
      { id: "2", type:'post',   source:'./../../../assets/profile.jpg', title: "Doc Hudson" },
      { id: "3", type:'reels',  thumb:"./../../../assets/profile.jpg'", source:'./../../../assets/example.mp4', title: "Cruz Ramirez" },
      { id: "4", type:'saved',  source:'./../../../assets/profile.jpg', title: "Relâmpago McQueen" },
      { id: "5", type:'post',   source:'./../../../assets/profile.jpg', title: "Agente Tom Mate" },
      { id: "6", type:'post',   source:'./../../../assets/profile.jpg', title: "Doc Hudson" },
      { id: "7", type:'saved',  source:'./../../../assets/example.mp4', title: "Cruz Ramirez" },
      { id: "5", type:'post',   source:'./../../../assets/profile.jpg', title: "Agente Tom Mate" },
      { id: "6", type:'post',   source:'./../../../assets/profile.jpg', title: "Doc Hudson" },
      { id: "7", type:'saved',  source:'./../../../assets/profile.jpg', title: "Cruz Ramirez" },
      { id: "10", type:'reels',  thumb:"./../../../assets/profile.jpg'",  source:'./../../../assets/example.mp4', title: "Relâmpago McQueen" },
      { id: "11", type:'post',   source:'./../../../assets/profile.jpg', title: "Agente Tom Mate" },
      { id: "12", type:'post',   source:'./../../../assets/profile.jpg', title: "Doc Hudson" },
      { id: "13", type:'reels',  thumb:"./../../../assets/profile.jpg'", source:'./../../../assets/example.mp4', title: "Cruz Ramirez" },
      { id: "14", type:'saved',  source:'./../../../assets/profile.jpg', title: "Relâmpago McQueen" },
      { id: "15", type:'post',   source:'./../../../assets/profile.jpg', title: "Agente Tom Mate" },
      { id: "16", type:'post',   source:'./../../../assets/profile.jpg', title: "Doc Hudson" },
      { id: "17", type:'saved',  source:'./../../../assets/example.mp4', title: "Cruz Ramirez" },
      { id: "15", type:'post',   source:'./../../../assets/profile.jpg', title: "Agente Tom Mate" },
      { id: "16", type:'post',   source:'./../../../assets/profile.jpg', title: "Doc Hudson" },
      { id: "17", type:'saved',  source:'./../../../assets/profile.jpg', title: "Cruz Ramirez" }
    ]) 
    
  },[])

  function createRows(data, columns) {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;
  
    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1;
    }

    return data;
  }

  return (
    <SafeAreaView>
      <ScreenContainer>
        <Topbar>
          <View>
            <TextWhite>Painel profissional</TextWhite>
            <SubTitle>Ferramentas e recursos só para criadores de conteúdo.</SubTitle>
          </View>
          
          <View>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#404040" />
          </View>
        </Topbar>

        <ProfileData>
          <ProfileResume>
            <ProfileImage>
              <Image resizeMode="cover" source={require('./../../../assets/profile.jpg')} />
            </ProfileImage>
          
            <View>
              <InfoContainerTextData>6</InfoContainerTextData>
              <InfoContainerLabel numberOfLines={1} ellipsizeMode='tail'>Publicação</InfoContainerLabel>
            </View>

            <View>
              <InfoContainerTextData>288</InfoContainerTextData>
              <InfoContainerLabel numberOfLines={1} ellipsizeMode='tail'>Seguidores</InfoContainerLabel>
            </View>

            <View>
              <InfoContainerTextData>257</InfoContainerTextData>
              <InfoContainerLabel numberOfLines={1} ellipsizeMode='tail'>Seguindo</InfoContainerLabel>
            </View>
          </ProfileResume>

          <BioContainer>
            <View>
              <TextWhite>Hermano Fernandes</TextWhite>
            </View>

            <View>
              <TextWhite>Programador</TextWhite>
              <TextWhite>Calistênico</TextWhite>
              <TextWhite>Bboy</TextWhite>
            </View>
          </BioContainer>

          <ButtonActionsContainer>
            <ButtonActionButton onPress={() => {navigation.navigate('EditProfile')}} >
              <ButtonText >Editar perfil</ButtonText> 
            </ButtonActionButton>

            <ButtonActionButton onPress={() => {}} >
              <ButtonText>Ferramentas</ButtonText> 
            </ButtonActionButton>

            <ButtonActionButton onPress={() => {}} >
              <ButtonText>Insights</ButtonText> 
            </ButtonActionButton>
          </ButtonActionsContainer>

          <StoriesHighlightsContainer>
            <StorieTopBar>
              <View>
                <TextWhite>Destaques dos stories</TextWhite>
                <TextWhite>Mantenha seus stories favoritos no seu perfil</TextWhite>
              </View>

              <View>
                <MaterialIcons name="keyboard-arrow-up" size={24} color="#fff" />
              </View>
            </StorieTopBar>

            <View>
                <FlatList
                    data={highlights}
                    keyExtractor={item => item.id}
                    numColumns={4}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    renderItem={({ item, index }) => {
                      if(index === 0){
                        return (
                          <StorieHighlightCreate>
                            <Feather name="plus" size={30} color="#fff" />
                          </StorieHighlightCreate>
                        )
                      }

                      return (
                        <StorieHighlight>
                        </StorieHighlight>
                      );
                    }}
                />
            </View>
          </StoriesHighlightsContainer>

          <PostsContainer>
            <TabsHeader>
              <TabsButton onPress={() => {setTabIndex(0)}} >
                {tabIndex === 0 ? (
                  <MaterialIcons name="grid-on" size={24} color="#ffffff" />
                ):(
                  <MaterialIcons name="grid-on" size={24} color="#404040" />
                )}
              </TabsButton>
              <TabsButton onPress={() => {setTabIndex(1)}} >
                {tabIndex === 1 ? (
                  <Entypo name="folder-video" size={24} color="#ffffff" />
                ):(
                  <Entypo name="folder-video" size={24} color="#404040" />
                )}
              </TabsButton> 
              <TabsButton onPress={() => {setTabIndex(2)}} >
                {tabIndex === 2 ? (
                  <MaterialIcons name="portrait" size={28} color="#ffffff" />
                ):(
                  <MaterialIcons name="portrait" size={28} color="#404040" />
                )}
              </TabsButton> 
            </TabsHeader>
                
            <ScrollPostSections 
              horizontal={true} 
              stickyHeaderIndices={[2]}
            >
              <PostSection>
                <FlatList
                  data={createRows(posts, 3)}
                  keyExtractor={item => item.id}
                  numColumns={3} // Número de colunas
                  renderItem={({ item }) => {
                    if (item.empty) {
                      return <View style={[styles.post, styles.postEmpty]} />;
                    }
                    return (
                      <View Post>
                        <PostImage resizeMode="cover"  source={require('./../../../assets/profile.jpg')} />
                      </View>
                    );
                  }}
                />
              </PostSection>

              <SafeAreaView PostSection>
                <FlatList
                  data={createRows(posts, 3)}
                  keyExtractor={item => item.id}
                  numColumns={3} // Número de colunas
                  renderItem={({ item }) => {
                    if (item.empty) {
                      return <View style={[styles.post, styles.postEmpty]} />;
                    }
                    return (
                      <View Post>
                        <PostImage esizeMode="cover" source={require('./../../../assets/profile.jpg')} />
                      </View>
                    );
                  }}
                />
              </SafeAreaView>

              <PostSection>
                <FlatList
                  data={createRows(posts, 3)}
                  keyExtractor={item => item.id}
                  numColumns={3} // Número de colunas
                  renderItem={({ item, index }) => {
                    if (item.empty) {
                      return <View key={index} style={[styles.post, styles.postEmpty]} />;
                    }
                    return (
                      <View key={index} Post>
                        <PostImage esizeMode="cover" source={require('./../../../assets/profile.jpg')} />
                      </View>
                    );
                  }}
                />
              </PostSection>
            </ScrollPostSections>
       
          </PostsContainer>
        </ProfileData>
      </ScreenContainer>
    </SafeAreaView>
  )

}



const styles = StyleSheet.create({

  post: {
    alignItems: "center",
    flexGrow: 1,
    margin: 2,
    flexBasis: 0,
  },

  postEmpty: {
    backgroundColor: "transparent"
  },



});
export default Account