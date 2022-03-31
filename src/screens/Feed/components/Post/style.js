import styled from 'styled-components/native';
import Theme from '../../Theme';
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;



  firstLikesContainer = styled.FlatList`
    width: 'auto'
  `

  likesContainer = styled.View`
    color: '#fff';
    flexDirection: 'row';
    width: 'auto';
    marginTop:0;
    alignItems: 'center'
  `

  likes = styled.FlatList`
    color: '#fff';
    whiteSpace: 'nowrap';
    height: 'auto'
  `

  comments = styled.Text`
    color: '#666';
    marginTop: 2
  `

  inputContainer = styled.TouchableOpacity`
    flexDirection: 'row';
    marginTop: 5
  `

  profilePicComment = styled.Image`
    width: 25;
    height: 25;
    borderRadius:'100%';
    marginRight: 5
  `

  post = styled.View`
    marginVertical: 15
  `

  postHeader = styled.View`
    flexDirection: 'row';
    justifyContent: 'space-between';
    paddingHorizontal: 15;
    alignItems: 'center';
    marginBottom: 15;
  `

  postOptions = styled.View``

  userInfo = styled.View``

  author = styled.TouchableOpacity`
    fontSize: 14;
    color: '#fff';
    fontFamily:'sans-serif';
    fontWeight: 'bold'
  `

  place = styled.Text`
    fontSize: 12;
    color: '#666';
  `

  picture_url = styled.Image`
    width: '100%';
    height: 400
  `

  footer = styled.View`
    paddingHorizontal: 15
  `

  actions = styled.View`
    flexDirection: 'row';
    justifyContent: 'space-between';
    paddingVertical: 10;

  `

  action = styled.TouchableOpacity`
    marginRight: 8
  `

  actionImg = styled.View`
    height: 25;
    width: 25;
  `

  leftActions = styled.View`
    flexDirection: 'row'
  `

  likes = styled.Text`
    fontWeight: 'bold';
    fontSize: 12;
  `

  description = styled.Text`
    color: '#fff';
    lineHeight: 18;
  `

