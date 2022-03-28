import styled from 'styled-components/native';
import Theme from '../../Theme';
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;


  Conversation = styled.View`
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#000',
    color: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center'
  `

  ProfilePic = styled.Image`
    height:45,
    width:45,
    borderRadius:'100%',
    margin: '1px',
    border:'1px solid #000' ,
  `

  Information = styled.View`
      width: '72%',
      fontFamily: 'sans-serif',
      fontSize: '13px',
      fontWeight: 'bold'
  `

  ProfilePicContainer = styled.View`
      backgroundColor: '#676767',
      borderRadius: '100%',
      padding: '0px',
  `

  Title = styled.View`

  `
  LastConversation = styled.View`

  `

