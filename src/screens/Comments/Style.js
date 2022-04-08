import styled from 'styled-components/native';
import {Dimensions} from "react-native";

let width = Dimensions.get(window).width;

  export const Top = styled.View`
    height: 60px;
    flexDirection: row;
    height: 60px;
    justifyContent: space-around;
    alignItems: center;
  `
  export const BackIcon = styled.View`
    height: 30;
    width: 25;
  `

  export const SectionName = styled.View`
    width: 60%;
  `

  export const SendIcon = styled.View`
    height: 20;
    width: 20;
  `
  
  export const PostBodyContainer = styled.View`
    padding: 20px;
    zIndex:12;
    flexDirection: row;
    borderBottomWidth: 1px;
    borderColor: #515151;
  `

  export const ProfilePicContainer = styled.View`
    height: 35px;
    width: 35px;
    zIndex:13;
  `

  export const ProfilePic = styled.Image`
    borderRadius: 10000;
    height: 35px;
    width: 35px;
    zIndex:14;
    flexDirection: row;
  `

  export const PostBody = styled.View`
    zIndex:15;
    width: 80%;
    marginLeft: 20px;
  `

  export const PostAuthor = styled.Text`
    zIndex:16;
    fontWeight: bold;
    color: #fff;
  `

  export const CommentsSection = styled.FlatList`
    zIndex:18;
    padding: 20px;
  `

  export const PostText = styled.Text`
    zIndex:19;
    color: #fff;
  `
