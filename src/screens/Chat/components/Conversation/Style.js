import styled from 'styled-components/native';
 
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;


  export const Conversation = styled.View`
    flexDirection: row;
    paddingVertical: 15;
    paddingHorizontal: 15;
    backgroundColor: #000;
    color: #fff;
    justifyContent: space-between;
    alignItems: center
  `

  export const ProfilePic = styled.Image`
    height:45;
    width:45;
    borderRadius: 100%;
    margin: 1px;
    border:1px solid #000 ;
  `

  export const Information = styled.View`
      width: 72%;
      fontFamily: sans-serif;
      font-size: 13;
      fontWeight: bold
  `

  export const ProfilePicContainer = styled.View`
      backgroundColor: #676767;
      borderRadius: 100%;
      padding: 0px;
  `

  export const Title = styled.View`

  `
  export const LastConversation = styled.View`

  `

