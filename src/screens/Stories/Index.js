import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {Dimensions} from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const innerWidth = Dimensions.get('window').width;
const innerHeight = Dimensions.get('window').height;

const Storie = ({item, index, carousel, stories}) => {


    const [storieItem, setStorieItem] = useState(0)

    function renderLikes({item: likes, index}) {
      

        return (
            <View style={[ styles.postLikeContainer, {right: (index * 7)} ]}>
                <Image style={styles.postLikeProfile} source={likes?.user?.profilePic} />
            </View>
        )

    }

    return (
        <View >
            <TouchableOpacity  
                style={styles.storieItemNext}   
                onPress={() => { 

                    if(storieItem !== item.stories.length - 1){
                        setStorieItem(storieItem + 1)
                    }else {
                        carousel.current.snapToNext()
                    }

                }}> 
            
            </TouchableOpacity>

            {index === 1 ? (
                <View style={styles.storieContainer}> 
                    <View  style={styles.userHeader}>
                        <View  style={styles.profilePicContainer}>
                            <Image style={styles.profilePic} source={'https://picsum.photos/720'} />
                        </View>
                     
                       
                        <View style={styles.userHeaderBody} >
                            <View  style={styles.userNameContainer} >
                                <Text  style={styles.userName} >hermano 17h</Text>
                            </View>
                            <View  style={styles.storieInformation} >
                                {/* <Image  style={styles.storieIndicator} /> */}
                                <Text  style={styles.storieInformatioText}  >Assistur ao vídeo do Reels completo</Text>
                            </View>
                        </View>
                    </View>

                    <Image style={styles.image}  source={item.stories[storieItem]?.media} />

                    <View  style={styles.userBottom}  > 
                        <View  style={styles.storieVisualiztionsContainer} >
                            <FlatList
                                style={[styles.visualizations, {}]}
                                horizontal
                                data={item.likes}
                                keyExtractor={item => item.id}
                                renderItem={({item, index}) => renderLikes(item, index)}
                            />
                                
                            
                            <Text style={styles.actionText} >Visto por </Text>
                        </View>

                        <View style={styles.bottomActionSecond} >
                          <Feather  style={styles.actionIcon} name="camera" size={24} color="black" />  
                          <Text style={styles.actionText} >Compartilhar</Text>
                        </View>

                        <View style={styles.bottomActionThird} >
                          <Feather  style={styles.actionIcon} name="camera" size={24} color="black" /> 
                          <Text style={styles.actionText}  >Destacar</Text>
                        </View>

                        <View style={styles.bottomActionLast} >
                          <Entypo name="dots-three-vertical" style={styles.actionIcon}  size={24} color="black" />
                          <Text style={styles.actionText}  >Mais</Text>
                        </View>
                    </View>
                </View> 
            ):(
                <View style={styles.storieContainer}> 
                    <View style={styles.userHeader} >
                        <View style={styles.profilePicContainer} >
                          <Image style={styles.profilePic} source={'https://picsum.photos/720'} />
                        </View>

                        <View style={styles.userHeaderBody} >
                          <View  style={styles.userNameContainer} >
                              <Text  style={styles.userName} >hermano 17h</Text>
                          </View>
                        </View>
                    </View>

                    <Image style={styles.image}  source={item.stories[storieItem]?.media} />

                    <View style={styles.inputBottom} >
                     
                      <TextInput
                        style={{
                          backgroundColor: 'transparent',
                          borderRadius: 15,
                          borderWidth:1,
                          borderColor:'#fff',
                          outline:'none',
                          borderStyle: 'solid',
                          color: '#fff',  
                          width: '75%',
                          padding: 10,
                        }}
                        placeholder="Enviar mensagem"
                      />
              
                      <Feather name="send" size={24} style={styles.actionIcon}  color="black" />
                        
                    </View>
                </View> 
            )}
            

            <TouchableOpacity  style={styles.storieItemPrev}  onPress={() => { if(storieItem !== 0){setStorieItem(storieItem - 1)} }}> 
              
            </TouchableOpacity>
        </View>
    );
}


const Stories = () => {

  

    const carousel = useRef(null)

    const [stories, setStories] = useState([
        {
            user:{
                id:1
            
            },
            id:1,
            stories:[
                {media: 'https://picsum.photos/420'},
                 {media: 'https://picsum.photos/421'},
                 {media: 'https://picsum.photos/423'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/424'},
                 {media: 'https://picsum.photos/425'},
                 {media: 'https://picsum.photos/426'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/721'},
                 {media: 'https://picsum.photos/722'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        },  
        {
            id:1,
            stories:[
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
                 {media: 'https://picsum.photos/720'},
            ],
            likes:[
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                },
                {
                  id:'3',
                  user:{
                    profilePic: 'https://picsum.photos/720'
                  }
                }
              ],
        }
    ])

    function renderItem({item, index, carousel}){
        return(
            <Storie item={item} index={index} carousel={carousel} />
        )
    }

    return (
        <Carousel
          ref={(c) => {carousel.current = c }}
          data={stories}
          renderItem={({item, index}) => {
              if(carousel !== undefined){
               
                return(
                    renderItem({item, index, carousel, stories})
                )
              } 
          }} 
          sliderWidth={innerWidth}
          itemWidth={innerWidth}
        />
    )
}


const styles = StyleSheet.create({
    storieContainer:{
        top: -innerHeight + 192 , 
        height: innerHeight ,
        width: innerWidth ,
    },
    image:{
        zIndex: 9,
        top: 0,
        position: 'absolute',
        height:  innerHeight ,
        width:  innerWidth ,
    },
    storieItemNext:{
        position:'relative',
        height:  innerHeight * 0.7 ,
        justifyContent:'center',
        width:  innerWidth/2 ,
        top: innerHeight * 0.1, 
        left:  innerWidth/2,
        zIndex: 9,
        elevation: 9,
    },
    storieItemPrev:{
        position:'absolute',
        height:  innerHeight * 0.7 ,
        justifyContent:'center',
        width:  innerWidth/2 ,
        top: innerHeight * 0.1, 
        left:  0,
        zIndex: 9,
        elevation: 9,
    },
    userHeader:{
        marginTop: 15,
        alignSelf: 'flex-start', 
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '15px',
        zIndex: 10, 
    },
    profilePicContainer:{
        zIndex: 11, 
    },
    profilePic:{
        height:35,
        width:35,
        zIndex: 12, 
        borderRadius: 10000,
    },
    moreIcon:{
      zIndex: 13, 
    },
    userHeaderBody:{
      justifyContent: 'center', 
      flexDirection: 'column',
      marginLeft: 15,
      zIndex: 14,
    },
    userNameContainer:{
      zIndex: 15,
    },
    userName:{
      fontWeight: 'bold',
      color: '#fff',
      zIndex: 16,
    },
    storieInformation:{
      zIndex: 17,
    },
    storieIndicator:{
      zIndex: 18,
    },
    storieInformatioText:{
      color: '#fff',
      fontWeight: 'bold',
      zIndex: 19,
    },

    userBottom:{
      zIndex: 20,
      marginBottom: '15px',
      flexDirection: 'row',
      justifyContent: 'space-around',
      top: innerHeight - 105,
      width: '95%',
    },
    inputBottom:{
      zIndex: 20,
      marginBottom: '15px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      top: innerHeight - 125,
      width: '95%',
      marginHorizontal:'auto',
      padding: 10,
      borderRadius: 15,
    },
    storieVisualiztionsContainer:{
      marginLeft: 15,
      zIndex: 21,
    },
    storieVisualizations:{
      zIndex: 22,
    },
    bottomActionSecond:{
      alignItems: 'center',
      marginLeft: 'auto',
      alignItems: 'center',
      zIndex: 23,
    },
    bottomActionThird:{
      alignItems: 'center',
      marginLeft: 15,
      alignItems: 'center',
      zIndex: 23,
    },
    bottomActionLast:{
      alignItems: 'center',
      marginLeft: 15,
      alignItems: 'center',
      zIndex: 23,
    },
    actionIcon:{
      zIndex: 24,
      height: 20,
      width: 20,
    },
    actionText:{
      zIndex: 25,
      color: '#fff',
      fontWeight: 'bold',
    },
    visualizations:{
      flexDirection: 'row',
      zIndex: 26,
      height: 20,
    },
    postLikeContainer:{
      
    },
    postLikeProfile:{
      height: 20,
      width: 20,
      borderRadius: 10000,
      borderWidth: 1,
      borderColor: '#000',
    }
});
  

export default Stories