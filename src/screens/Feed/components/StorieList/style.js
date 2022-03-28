import styled from 'styled-components/native';
import Theme from '../../Theme';
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;



  storieContainer = styled.TouchableOpacity`
    marginHorizontal: '5px',
    alignItems: 'center',
    justifyContent: 'center',
  `
  
  closeFriend = styled.View`
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: '54px',
    width: '54px',
    backgroundColor:'#1d9b21',
    padding: '2px',
  `

  visualized = styled.View`
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: '54px',
    width: '54px',
    backgroundColor:'#ddd',
    padding: '1px',
  `

  noVisualizedContainer = styled.View`
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px',
    borderRadius: 100,
    height: '55px',
    width: '55px',
  
  `  

  profilePic = styled.Image`
    height: '100%',
    width: '100%',
    borderWidth: 4,
    borderColor: '#000',
    borderRadius: 100,
  `
  textContainer = styled.View`

  `

  text = styled.Text`
    fontSize: 13,
    marginTop: '5px',
    color: '#FFFFFF',
    textAlign: 'center',
  `
