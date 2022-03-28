import styled from styled-components/native;
import {Dimensions} from "react-native";

let width = Dimensions.get(window).width;

  Top = styled.View`
    height: '60px';
    flexDirection: 'row';
    height: '60px';
    justifyContent: 'space-around';
    alignItems: 'center';
  `
  BackIcon = styled.View`
    height: 30;
    width: 25;
  `

  SectionName = styled.View`
    width: '60%';
  `

  SendIcon = styled.View`
    height: 20;
    width: 20;
  `
  
  PostBodyContainer = styled.View`
    padding: '20px';
    zIndex:12;
    flexDirection: 'row';
    borderBottomWidth: '1px';
    borderColor: '#515151';
  `

  ProfilePicContainer = styled.View`
    height: '35px';
    width: '35px';
    zIndex:13;
  `

  ProfilePic = styled.Image`
    borderRadius: '100%';
    height: '35px';
    width: '35px';
    zIndex:14;
    flexDirection: 'row';
  `

  PostBody = styled.View`
    zIndex:15;
    width: '80%';
    marginLeft: '20px';
  `

  PostAuthor = styled.Text`
    zIndex:16;
    fontWeight: 'bold';
    color: '#fff';
  `

  CommentsSection = styled.FlatList`
    zIndex:18;
    padding: '20px';
  `

  PostText = styled.Text`
    zIndex:19;
    color: '#fff';
  `
