import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import save from '../../../assets/invertedColors/save.png';
import options from '../../../assets/invertedColors/options.png';
import likedIcon from '../../../assets/invertedColors/like.png';
import comment from '../../../assets/invertedColors/comment.png';
import send from '../../../assets/invertedColors/send.png';


import Likes from '../Likes/Index'

const Index = () => {


    const modalizeRef = useRef(null);

    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)

    function renderLikes({item: likes, index}) {

        return (
          <Likes />
        )
    }

    const onOpen = () => {

        modalizeRef.current?.open();
    };

    return (
        <View style={styles.post}>
            <View style={styles.postHeader}>
            <View style={styles.userInfo}>
                <TouchableOpacity 
                onPress={() => {navigation.navigate('User')}}
                style={styles.author}>{post.author}</TouchableOpacity>

                <Text style={styles.place}>{post.place}</Text>
            </View>

            <View style={styles.postOptions}>
                <TouchableOpacity>
                <Image source={options} />
                </TouchableOpacity>
            </View>
            </View>

            <View>
            <Image
                style={styles.picture_url}
                source={{ uri: post.picture_url }}
            />
            </View>

            <View style={styles.footer}>
            <View style={styles.actions}>
                <View style={styles.leftActions}>

                {liked ? (
                    <TouchableOpacity onPress={() => {setLiked(false)}} style={styles.action}>
                    <Image style={styles.actionImg} source={likedIcon} />
                    </TouchableOpacity>
                    
                ):(
                    <TouchableOpacity onPress={() => {setLiked(true)}} style={styles.action}>
                    <Image style={styles.actionImg} source={like} />
                    </TouchableOpacity>
                )}

                <TouchableOpacity style={styles.action}>
                    <Image style={styles.actionImg} source={comment} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {onOpen()}}>
                    <Image style={styles.actionImg} source={send} />
                    <SendToFollowers />
                </TouchableOpacity>

                </View>

                <View>
                {saved ? (
                    <TouchableOpacity onPress={() => {setSaved(false)}}>
                    <Image style={styles.actionImg} source={save} />
                    </TouchableOpacity>   
                ):(
                    <TouchableOpacity onPress={() => {setSaved(true)}}>
                    <Image style={styles.actionImg} source={save} />
                    </TouchableOpacity>
                )}
                </View>
            </View>

            <View>
                <View style={stylesPost.likesContainer}>
                    <FlatList
                        style={[stylesPost.firstLikesContainer, {}]}
                        horizontal
                        data={post.likes}
                        keyExtractor={item => item.id}
                        renderItem={renderLikes}
                    />
                    <Text style={stylesPost.likes} >{post.likes.length + ' likes'} </Text>
                </View>
            
                <Text style={styles.description}>{post.description}</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Comments') }} >
                    <Text style={stylesPost.comments}>Ver todos os {post.comments.length} comentários</Text>
                </TouchableOpacity>

                <View >
                    <TouchableOpacity style={stylesPost.inputContainer} onPress={() => { navigation.navigate('Comments') }} >
                        <Image style={stylesPost.profilePicComment} source={'https://picsum.photos/720'} />
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
                            value={text} onChange={(e) => {
                                setText(e.target.value)
                        
                            }} 
                        />

                        
                    </TouchableOpacity>
                </View>

            </View>
            </View>
        </View>
    )
}

export default Index


const stylesPost = StyleSheet.create({
    firstLikesContainer:{
      width: 'fit-content'
    },
    likesContainer:{
      color: '#fff',
      flexDirection: 'row',
      width: 'fit-content',
      marginTop:0,
      alignItems: 'center'
    },
    likes:{
      color: '#fff',
      whiteSpace: 'nowrap',
      height: 'fit-content'
    },
    postLikeContainer:{
      padding: '2px',
      backgroundColor:'#000',
      borderRadius: '100%',
    },
    postLikeProfile:{
      height: '18px',
      width: '18px',
      borderRadius: '100%'
    },
    comments:{
      color: '#666',
      marginTop: 2
    },
    inputContainer: {
      flexDirection: 'row',
      marginTop: 5
    },
    profilePicComment:{
      width: 25,
      height: 25,
      borderRadius:'100%',
      marginRight: 5
    }
    
  })