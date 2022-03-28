import styled from styled-components/native;
import {Dimensions} from "react-native";

let width = Dimensions.get(window).width;

commentContainer = styled.View`
  flexDirection: 'row',
  zIndex:1,
  marginBottom: '25px',
`

profilePicContainer = styled.View`
  zIndex:2,
`

profilePic = styled.Image`
  zIndex:3,
`

textContainer = styled.View`
  width: '85%',
  justifyContent: 'space-between',
  marginLeft: '15px',
  flexDirection: 'row',
`

commentBody = styled.View`
  width: '90%',
  flexDirection: 'row',
   zIndex:5,
`

author = styled.Text`
  fontWeight: 'bold',
  color: '#fff',
  zIndex:6,
`

commentText = styled.Text`
  color: '#fff',
   zIndex:7,
`

