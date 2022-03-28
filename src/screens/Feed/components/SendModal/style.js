import styled from 'styled-components/native';
import Theme from '../../Theme';
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;


  inputContainer = styled.View`
    marginLeft: '10px';
    flexDirection: 'row';
    alignItems: 'center';
    justifyContent: 'center';
  `

  sendPostPic = styled.Image`
    width: '35px';
    height: '35px';
    borderRadius: '5px';
  `

  searchContainer = styled.View`
    borderRadius: '10px';
    backgroundColor: '#000';
  `

  search = styled.View`
    width: '15px';
    height: '15px';
    marginLeft: '10px';
    marginRight: '15px';

  `
    
  createGroupContainer = styled.TouchableOpacity`
    flexDirection: 'row';
    justifyContent: 'space-between';
    alignItems: 'center';
    marginBottom: '10px'
  `

  createGroupIcon = styled.View`
    height: '35px';
    width: '35px';
    borderRadius: '100%';
  `

  createGroupText = styled.Text`
    color: '#fff';
    fontWeight: 'bold';

  `

  createGroupTextContainer = styled.View`
    marginRight: 'auto';
    paddingLeft: '10px'
  `

  sendStoryContainer = styled.View`
    flexDirection: 'row';
    alignItems: 'center';
    marginBottom: 10
  `

  profilePic = styled.Image`
    height: '35px';
    width: '35px';
    borderRadius: '100%';
  `

  sendStoryTextContainer = styled.TouchableOpacity`
    paddingLeft: '10px';
  `

  sendStoryText = styled.Text`
    color: '#0095f6'
  `


  searchContainer = styled.View`
    flexDirection: 'row';
    marginBottom: 10;
    borderRadius: '5px';
    backgroundColor: '#494949';
    paddingTop: '5px';
    paddingBottom: '5px';
  `

  sendWithTextContainer = styled.View`
    flexDirection: 'row';
    marginBottom: 20
  `
