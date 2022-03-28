import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Image} from 'react-native'
import React, {useRef} from 'react'

import Header from '../Header/Index'

import { Modalize } from 'react-native-modalize';
import { Host, Portal } from 'react-native-portalize';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  

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
                modalStyle={{marginTop: '0px'}}
                HeaderComponent={renderHeader}  
                snapPoint={window.innerHeight - 100} ref={modalizeRef}>

                <ScrollView style={{height:'100%' ,backgroundColor: '#272727', padding: '10px'}} >

                    <View style={modalSendStyles.sendWithTextContainer} >

                      <View>
                          <Image style={modalSendStyles.sendPostPic}  source={'https://picsum.photos/720'} />
                      </View>

                      <View style={modalSendStyles.inputContainer}>
                          <input
                          style={{
                              color: '#fff',
                              outline:'none',
                              backgroundColor:'transparent',
                              border:'none'
                          }}
                          placeholder="Escreva uma messagem..."
                          />
                      </View>

                    </View>

                    <View style={modalSendStyles.searchContainer}  >

                        <AntDesign tyle={modalSendStyles.search} name="search1" size={24} color="black" />

                        <input 
                            placeholder="Messagem..."
                            style={{
                                width: '65%',
                                background: 'none',
                                borderRadius: '0px',
                                border: '0px',
                                outline: 'none',
                                color: 'rgb(255, 255, 255)',
                                marginLeft: '0px',
                            }}
                        
                        />
                    </View>

                    <View style={modalSendStyles.sendStoryContainer}>

                      <View>
                          <Image style={modalSendStyles.profilePic} source={'https://picsum.photos/720'} />
                      </View>

                      <TouchableOpacity  style={modalSendStyles.sendStoryTextContainer}  >
                          <Text style={modalSendStyles.sendStoryText} >Adicionar publicação ao seu story</Text>
                      </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={modalSendStyles.createGroupContainer}>

                      <View >
                        <MaterialIcons style={modalSendStyles.createGroupIcon} name="groups" size={24} color="black" />
                      </View>

                      <View style={modalSendStyles.createGroupTextContainer} >
                          <Text style={modalSendStyles.createGroupText}>Criar grupo</Text>
                      </View>

                    </TouchableOpacity>

                        
                    <FlatList
                        style={[modalSendStyles.followers, {}]}
                        vertical
                        data={followers}
                        keyExtractor={item => item.id}
                        renderItem={renderSendFollowers}
                    />

                </ScrollView>
                
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
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      height: '25px',
    },
    inputContainer:{
      marginLeft: '10px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sendPostPic:{
      width: '35px',
      height: '35px',
      borderRadius: '5px',
    },
    searchContainer: {
      borderRadius: '10px',
      backgroundColor: '#000',
    },
    search:{
      width: '15px',
      height: '15px',
      marginLeft: '10px',
      marginRight: '15px',
  
    },
    headerButton:{
      backgroundColor:'#ddd',
      width: '35px',
      height: '6px',
      borderRadius: '25px',
    }, 
    createGroupContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px'
    },
    createGroupIcon:{
      height: '35px',
      width: '35px',
      borderRadius: '100%',
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
      height: '35px',
      width: '35px',
      borderRadius: '100%',
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
      borderRadius: '5px',
      backgroundColor: '#494949',
      paddingTop: '5px',
      paddingBottom: '5px',
    },
    sendWithTextContainer:{
      flexDirection: 'row',
      marginBottom: 20
    }
  
  
  })