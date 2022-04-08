import styled from 'styled-components/native';
 
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;


  notificationContainer = styled.View`
    zIndex:1,
    justifyContent: space-between,
    alignItems: center,
    flexDirection: row,
    marginVertical: 10px,
    paddingRight: 15px,
    paddingLeft: 15px,

  `

  profilePicContainer = styled.View`
    zIndex:2,
  `

  profilePic = styled.Image`
    zIndex:3,
  `

  author = styled.Text`
    fontWeight: bold,
    color: #fff,
    marginRight: 6px,
     zIndex:6,
  `

  postImage = styled.Image`
    height: 40px,
    zIndex: 20,
    width: 40px,
    borderRadius: 0px,

  `
  postContainer = styled.View`
    width: 60px,
    zIndex:21,
    alignItems: center,
  `

  followText = styled.Text`
    zIndex:22,
    color: #fff,
  `

  followButton = styled.TouchableOpacity`
    backgroundColor: #0095f6,
    paddingVertical: 5px,
    paddingHorizontal: 10px,
    borderRadius: 5px,
    zIndex:23,
  `

  notificationTime = styled.Text`
    marginLeft: 5px,
    fontSize: 12px,
    color: #7d7d7d,
    zIndex:24,
  `

  notificationText = styled.Text`
    color: #fff,
    zIndex:25,
  `
  
  notificationBody = styled.View`
    zIndex:26,
    width: 65%,
  `
