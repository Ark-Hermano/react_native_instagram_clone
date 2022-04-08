import styled from styled-components/native;
import {Dimensions} from "react-native";

let width = Dimensions.get(window).width;

  Container = styled.View`
      backgroundColor:  #000 ;
  `
  
  StyledText = styled.Text`
      color: #fff  ;
  `
  
  SendText = styled.Text`
      color:  #3ea6ff ;
      fontWeight:  bold ;
  `
  
  MessageContainer = styled.ScrollView`
      height: ${window.innerHeight - 128}px;
      paddingHorizontal: 10px ;
      paddingVertical:  10px ;
  `
  
  Message = styled.View`
      backgroundColor:  #494949 ;
      width:  auto ;
      marginVertical:  1px ;
      borderTopRightRadius:  15px ;
      borderBottomRightRadius:  15px ;
      paddingVertical:  5px ;
      paddingHorizontal:  10px ;
  `
  
  MessageSend = styled.View`
      backgroundColor:  #494949 ;
      width:  auto ;
      marginLeft:  auto ;
      marginVertical:  1px ;
      borderTopLeftRadius:  15px ;
      borderBottomLeftRadius:  15px ;
      paddingVertical:  5px ;
      paddingHorizontal:  10px ;
  `
  
  MessageSendNormal = styled.View`
      borderTopRightRadius:  5px ;
      borderBottomRightRadius:  5px ;
  `
  
  MessageSendFirst = styled.View`
      borderTopRightRadius:  15px ;
      borderBottomRightRadius:  5px ;
  `
  
  MessageSendLast = styled.View`
      borderTopRightRadius:  5px ;
      borderBottomRightRadius:  15px ;
  `
 
  MessageNormal = styled.View`
      borderTopLeftRadius:  5px ;
      borderBottomLeftRadius:  5px ;
  `
  
  MessageFirst = styled.View`
      borderTopLeftRadius:  15px ;
      borderBottomLeftRadius:  5px ;
  `

  MessageLast = styled.View`
      borderTopLeftRadius:  5px ;
      borderBottomLeftRadius:  15px ;
  `

  InputContainer = styled.View`
      backgroundColor:  #000 ;
      position:  absolute ;
      top:  100% ;
      position:  absolute ;
      width:  100% ;
      height:  65px ;
  
  `

  InputActived = styled.View`
      justifyContent:  space-between ;
      flexDirection:  row ;
      paddingHorizontal:  15px ;
      border:  1px solid #434343 ;
      borderRadius:  25px ;
      width: 90% ;
      margin:  auto ;
      padding:  5px ;
      color:  #fff ;
      paddingVertical:  10px  ;
      backgroundColor:  #494949 
  `

  Input = styled.View`
      border:  1px solid #434343 ;
      borderRadius:  25px ;
      width: 90% ;
      margin:  auto ;
      padding:  5px ;
      color:  #fff ;
      paddingVertical:  10px  ;
      backgroundColor:  #494949 
  `
