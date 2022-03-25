import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import {View, FlatList, StyleSheet, TouchableHighlight, Image, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
import api from '../../service/api'

function Conversation({ navigation }) {

    const [conversation, setConversation] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [user, setUser] = useState({})
    const [text, setText] = useState('')
    const [colors, setColors] = useState([])
    const scrollViewRef = useRef();

    useLayoutEffect(() => {
      

        api.get(`/api/user/${1}/conversations`).then(response => {
            setConversation(response.data[0])
            setLoaded(true)
        })

        setUser({
            id:1
        })

        setColors([
            "#f09433",
            "#f28a36",
            "#f4803a",
            "#f5753f",
            "#f56b45",
            "#f4604b",
            "#f25651",
            "#ef4b58",
            "#eb415e",
            "#e63765",
            "#e02d6c",
            "#d92573",
            "#d11e7a",
            "#c71981",
            "#bc1888",  
        ])

    }, [])

    if(!loaded){
        return <View></View>
    }

    const sendMessage = () => {
    
            let message = {
                body: text,
                user_id: user.id,
                second_user: conversation.user.id,
                conversation_id: conversation.id
            }

            conversation.messages.push(message)

            api.post(`/api/message/send`,message).then((response) => {
                setConversation(conversation)

                api.get(`/api/user/${user?.id}/conversations`).then((response) => {
      
                    setConversation(response.data[0])
        
                })
            })
      
            setText('')

    } 

    function handleScroll (event) {
 
    }

    return (
        <View style={styles.container}>
            <View style={{height:60, width:100}}>

            </View>

            <ScrollView   
                onScroll={(e) => handleScroll(e)}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                style={styles.messageContainer}
            >
                <View style={{height: '100%'}} >
                {conversation?.messages?.map((message,i) => {
                    let prevFromUser = false
                    let nextFromUser = false

                    if(i > 0 && conversation?.messages[i-1]?.user_id === 1){
                        prevFromUser = true
                    }
                    
                    if(i <  conversation?.messages.length - 1 && conversation?.messages[i-1]?.user_id === 1) {
                        nextFromUser = true
                    }

                    let prevFromOther = false
                    let nextFromOther = false

                    if(i > 0 && conversation?.messages[i-1]?.user_id !== 1){
                        prevFromOther = true
                    }
                    
                    if(i <  conversation?.messages.length - 1 && conversation?.messages[i+1]?.user_id !== 1) {
                        nextFromOther = true
                    }

                    let messagePosition = i

                    if(i > 14){
                   
                        let round = Math.floor(i / 15)
                        let newIndex = i % 15

                        if(round % 2 !== 0 ){
                            messagePosition = 14 - newIndex
                        }else{  
                            messagePosition = i % 15
                        }
                    }

                    return(
                        <>
                            {message.user_id === 1 ?(
                                <View 
                                    style={[
                                        message.user_id === 1 
                                        ? styles.messageSend 
                                        : styles.message,  
                                        nextFromUser && message.user_id === 1 
                                        && styles.messageSendNormal,
                                        !nextFromUser && message.user_id === 1 
                                        && styles.messageSendLast, 
                                        !prevFromUser && message.user_id === 1 
                                        && styles.messageSendFirst,
                                        {backgroundColor:colors[messagePosition]}
                                    ]}> 
    
                                    <Text style={styles.text}>{message.body}</Text>
                                </View>
                            ):(
                                <View 
                                   
                                    style={[
                                        message.user_id === 1 
                                        ? styles.messageSend 
                                        : styles.message,  
    
                                        
                                        nextFromOther && message.user_id !== 1 
                                        && styles.messageNormal,
                                        !nextFromOther && message.user_id !== 1 
                                        && styles.messageLast, 
                                        !prevFromOther && message.user_id !== 1 
                                        && styles.messageFirst,
                                    ]}> 

                                    <Text style={styles.text}>{message.body}</Text>
                                </View>
                            )}
                           
                        </>
                    )

                })}
                </View>
            </ScrollView>
            <View style={styles.inputContainer}>
                <View style={text === '' ? styles.input : styles.inputActived }>
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
                    {text !== '' ? (
                        <TouchableHighlight  onPress={() => {sendMessage()}}>
                            <Text style={styles.sendText}>
                                Enviar
                            </Text>
                        </TouchableHighlight>
                    ):(
                        <></>
                    )}
                    
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000',
    },
    text:{
        color:'#fff' ,
    },
    sendText:{
        color: '#3ea6ff',
        fontWeight: 'bold',
    },
    messageContainer: {
        height: `${window.innerHeight - 128}px`,
        paddingHorizontal:'10px',
        paddingVertical: '10px'
    },
    message:{
        backgroundColor: '#494949',
        width: 'fit-content',
        marginVertical: '1px',
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px',
        paddingVertical: '5px',
        paddingHorizontal: '10px'
    },
    messageSend:{
        backgroundColor: '#494949',
        width: 'fit-content',
        marginLeft: 'auto',
        marginVertical: '1px',
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
        paddingVertical: '5px',
        paddingHorizontal: '10px'
    },
    messageSendNormal:{
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
    },
    messageSendFirst:{
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '5px',
    },
    messageSendLast:{
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '15px',
    },

    messageNormal:{
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
    },
    messageFirst:{
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '5px',
    },
    messageLast:{
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '15px',
    },
    inputContainer:{
        backgroundColor: '#000',
        position: 'absolute',
        top: '100%',
        position: 'absolute',
        width: '100%',
        height: '65px',
    
    },
    inputActived: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: '15px',
        border: '1px solid #434343',
        borderRadius: '25px',
        width:'90%',
        margin: 'auto',
        padding: '5px',
        color: '#fff',
        paddingVertical: '10px' ,
        backgroundColor: '#494949'
    },
    input: {

        border: '1px solid #434343',
        borderRadius: '25px',
        width:'90%',
        margin: 'auto',
        padding: '5px',
        color: '#fff',
        paddingVertical: '10px' ,
        backgroundColor: '#494949'
    }

})

export default Conversation