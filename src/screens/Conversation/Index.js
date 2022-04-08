import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import {View, TextInput, StyleSheet, TouchableHighlight, Image, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
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
        <Container>
            <View style={{height:60, width:100}}>

            </View>

            <MessageContainer   
                onScroll={(e) => handleScroll(e)}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
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
    
                                    <StyledText>{message.body}</StyledText>
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

                                    <StyledText>{message.body}</StyledText>
                                </View>
                            )}
                           
                        </>
                    )

                })}
                </View>
            </MessageContainer>
            <InputContainer>
                <View style={text === '' ? styles.input : styles.inputActived }>
                    <TextInput 
                        placeholder="Messagem..."
                        value={text} 
                        onChange={(e) => {
                            setText(e.target.value)
                        }} 
                        style={{
                            width: '65%',
                            background: 'none',
                            borderRadius: '0px',
                            border: '0px',
                            outline: 'none',
                            color: 'rgb(255, 255, 255)',
                            marginLeft: 0,
                        }}
                    />
                    {text !== '' ? (
                        <TouchableHighlight  onPress={() => {sendMessage()}}>
                            <SendText>
                                Enviar
                            </SendText>
                        </TouchableHighlight>
                    ):(
                        <></>
                    )}
                    
                </View>
            </InputContainer>
        </Container>
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
        height: window.innerHeight - 128,
        paddingHorizontal: 10,
        paddingVertical: '10px'
    },
    message:{
        backgroundColor: '#494949',
        width: 'auto',
        marginVertical: 1,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        paddingVertical: '5px',
        paddingHorizontal: 10
    },
    messageSend:{
        backgroundColor: '#494949',
        width: 'auto',
        marginLeft: 'auto',
        marginVertical: 1,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        paddingVertical: '5px',
        paddingHorizontal: 10
    },
    messageSendNormal:{
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    messageSendFirst:{
        borderTopRightRadius: 15,
        borderBottomRightRadius: 5,
    },
    messageSendLast:{
        borderTopRightRadius: 5,
        borderBottomRightRadius: 15,
    },

    messageNormal:{
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    messageFirst:{
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 5,
    },
    messageLast:{
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 15,
    },
    inputContainer:{
        backgroundColor: '#000',
        position: 'absolute',
        top: '100%',
        position: 'absolute',
        width: '100%',
        height: 65,
    
    },
    inputActived: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#434343',
        borderRadius: 25,
        width:'90%',
        margin: 'auto',
        padding: 5,
        color: '#fff',
        paddingVertical: '10px' ,
        backgroundColor: '#494949'
    },
    input: {
        borderWidth: 1,
        borderColor: '#434343',
        borderRadius: 25,
        width:'90%',
        margin: 'auto',
        padding: 5,
        color: '#fff',
        paddingVertical: '10px' ,
        backgroundColor: '#494949'
    }

})

export default Conversation