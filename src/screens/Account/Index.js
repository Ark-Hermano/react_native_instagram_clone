import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  HorizontalScrollView,
  ScrollView,
  Dimensions
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

import { Video, AVPlaybackStatus } from 'expo-av';
const innerWidth = Dimensions.get('window').width;


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
      <ScrollView style={styles.screenContainer}>
        <View style={styles.topbar}>
          <View>
            <Text style={styles.textWhite}>Painel profissional</Text>
            <Text style={styles.subTitle}>Ferramentas e recursos só para criadores de conteúdo.</Text>
          </View>
          
          <View>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#404040" />
          </View>
        </View>

        <View style={styles.profileData}>
          <View style={styles.profileResume}>

            <View style={styles.profileImage}>
              <Image esizeMode="cover" style={styles.image} source={require('./../../../assets/profile.jpg')} />
            </View>
            
    
            <View>
              <Text style={styles.infoContainerTextData}>6</Text>
              <Text style={styles.infoContainerLabel} numberOfLines={1} ellipsizeMode='tail'>Publicação</Text>
            </View>

            <View>
              <Text style={styles.infoContainerTextData}>288</Text>
              <Text style={styles.infoContainerLabel} numberOfLines={1} ellipsizeMode='tail'>Seguidores</Text>
            </View>

            <View>
              <Text style={styles.infoContainerTextData}>257</Text>
              <Text style={styles.infoContainerLabel} numberOfLines={1} ellipsizeMode='tail'>Seguindo</Text>
            </View>
          </View>

          <View style={styles.bioContainer}>
            <View>
              <Text style={styles.textWhite}>Hermano Fernandes</Text>
            </View>

            <View>
              <Text style={styles.textWhite}>Programador</Text>
              <Text style={styles.textWhite}>Calistênico</Text>
              <Text style={styles.textWhite}>Bboy</Text>
            </View>
          </View>

          <View style={styles.buttonActionsContainer}>
            <TouchableOpacity onPress={() => {navigation.navigate('EditProfile')}} style={styles.buttonActionButton}>
              <Text style={styles.buttonText} >Editar perfil</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.buttonActionButton}>
              <Text style={styles.buttonText} >Ferramentas</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.buttonActionButton}>
              <Text style={styles.buttonText} >Insights</Text> 
            </TouchableOpacity>
          </View>

          <View style={styles.storiesHighlightsContainer}>
            <View style={styles.storieTopBar}>
              <View>
                <Text style={styles.textWhite}>Destaques dos stories</Text>
                <Text style={styles.textWhite}>Mantenha seus stories favoritos no seu perfil</Text>
              </View>

              <View>
                <MaterialIcons name="keyboard-arrow-up" size={24} color="#fff" />
              </View>
            </View>

            <View>
                <FlatList
                    data={highlights}
                    keyExtractor={item => item.id}
                    //horizontal={true} 
                    numColumns={4}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    renderItem={({ item, index }) => {
                      if(index === 0){
                        return (
                          <View style={styles.storieHighlightCreate}>
                            <Feather name="plus" size={30} color="#fff" />
                          </View>
                        )
                      }

                      return (
                        <View style={styles.storieHighlight}>
                          
                
                        </View>
                      );
                    }}
                />
            </View>
          </View>

          <View style={styles.postsContainer}>

           
            <View style={styles.tabsHeader}>
              <TouchableOpacity  style={styles.tabsButton} onPress={() => {setTabIndex(0)}} >
                {tabIndex === 0 ? (
                  <MaterialIcons name="grid-on" size={24} color="#ffffff" />
                ):(
                  <MaterialIcons name="grid-on" size={24} color="#404040" />
                )}
              </TouchableOpacity>
              <TouchableOpacity  style={styles.tabsButton} onPress={() => {setTabIndex(1)}} >
                {tabIndex === 1 ? (
                  <Entypo name="folder-video" size={24} color="#ffffff" />
                ):(
                  <Entypo name="folder-video" size={24} color="#404040" />
                )}
              </TouchableOpacity> 
              <TouchableOpacity  style={styles.tabsButton} onPress={() => {setTabIndex(2)}} >
                {tabIndex === 2 ? (
                  <MaterialIcons name="portrait" size={28} color="#ffffff" />
                ):(
                  <MaterialIcons name="portrait" size={28} color="#404040" />
                )}
              </TouchableOpacity> 
            </View>
            
           
            <ScrollView 
              horizontal={true} 
              style={styles.scrollPostSections}
              stickyHeaderIndices={[2]}
            >
              <SafeAreaView style={styles.postSection}>
                <FlatList
                  data={createRows(posts, 3)}
                  keyExtractor={item => item.id}
                  numColumns={3} // Número de colunas
                  renderItem={({ item }) => {
                    if (item.empty) {
                      return <View style={[styles.post, styles.postEmpty]} />;
                    }
                    return (
                      <View style={styles.post}>
                    
                        <Image esizeMode="cover" style={styles.postImage} source={require('./../../../assets/profile.jpg')} />
                         
                      </View>
                    );
                  }}
                />
              </SafeAreaView>

              <SafeAreaView style={styles.postSection}>
                <FlatList
                  data={createRows(posts, 3)}
                  keyExtractor={item => item.id}
                  numColumns={3} // Número de colunas
                  renderItem={({ item }) => {
                    if (item.empty) {
                      return <View style={[styles.post, styles.postEmpty]} />;
                    }
                    return (
                      <View style={styles.post}>
                    
                        <Image esizeMode="cover" style={styles.postImage} source={require('./../../../assets/profile.jpg')} />
                         
                      </View>
                    );
                  }}
                />
              </SafeAreaView>

              <SafeAreaView style={styles.postSection}>
                <FlatList
                  data={createRows(posts, 3)}
                  keyExtractor={item => item.id}
                  numColumns={3} // Número de colunas
                  renderItem={({ item, index }) => {
                    if (item.empty) {
                      return <View key={index} style={[styles.post, styles.postEmpty]} />;
                    }
                    return (
                      <View key={index} style={styles.post}>
                        <Image esizeMode="cover" style={styles.postImage} source={require('./../../../assets/profile.jpg')} />
                      </View>
                    );
                  }}
                />
              </SafeAreaView>
            </ScrollView>
       

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}



const styles = StyleSheet.create({
  screenContainer:{
    backgroundColor: '#000',
  },

  textWhite:{
    color:'#FFF',
    fontWeight: 'bold',
  },

  subTitle:{
    color:'#404040',
    fontWeight: 'bold',

  },

  //////0

  profileData:{
    paddingVertical: 15,
    paddingHorizontal: 10,

  },

  ////1
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: '#404040',
    borderTopWidth  : 1,
    borderBottomColor: '#404040',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15
  },

  ////2
  profileResume:{
    flexDirection: 'row',
    alignItems:"center",
    justifyContent: 'space-between',
    marginBottom: 16
  },

  profileImage:{
    height: 100,
    width: 100,
    borderRadius: 1000
  },

  image:{
    height: 100,
    width: 100,
    borderRadius: 1000

  },

  infoContainer:{

  },

  infoContainerTextData:{
    fontWeight: 'bold',
    color:"#fff",
    textAlign:'center',
    fontSize: 22
  },

  infoContainerLabel:{
    color:"#fff",
    fontSize: 16
  },

  ///3

  bioContainer:{
    marginBottom: 16

  },

  bioContainerTitle:{


  },

  bioContainerBody:{

  },

  ///4

  buttonActionsContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },

  buttonActionButton:{
    width: '32%',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#404040',
    borderRadius: 6,
    alignItems: 'center',
    paddingVertical: 5
    //backgroundColor: '#404040',
  },

  buttonText:{
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },

  ///5

  storiesHighlightsContainer:{
    marginBottom: 25
  },

  storieTopBar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  storiesHighlightTopbar:{

  },

  storiesHighlightTopbarTitle:{
  },

  storiesHighlightTopbarText:{

  },

  storieHighlightCreate:{
    height: 72,
    width: 72,
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  storieHighlight:{
    backgroundColor: '#404040',
    height: 76,
    width: 76,
    borderRadius: 1000
  },

  ///6

  postsContainer:{

  },

  postSection:{
    width: innerWidth,
    marginRight: 400
  },
  
  scrollPostSections:{
    flexDirection:'row',

  },

  tabsHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  tabsButton:{
    width: '33%',
    alignItems: 'center',
    textAlign: 'center'
  },

  post: {
    alignItems: "center",
    flexGrow: 1,
    margin: 2,
    flexBasis: 0,
  },

  postImage:{
    height: 125,
    width: '100%'
  },

  text: {
    color: "#333333"
  },

  postEmpty: {
    backgroundColor: "transparent"
  },



});
export default Account