
import styled from 'styled-components/native';
 
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;

  container = styled.View`
    top: 0,
    zIndex: 1,
    height: window.innerHeight,
    justifyContent:center
  `

  video = styled.View`
    zIndex: 2,
    flexDirection: row,
    position: absolute,
    width: 100%,
    top: 0,
    height: window.innerHeight - 60,
    alignItems: flex-start,
  `

  touchScreen = styled.TouchableOpacity`
    top: 0,
    zIndex: 3,
    height: window.innerHeight,
  `

  backgroundVideo = styled.TouchableOpacity`
    position: absolute,
    height: innerHeight,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 4,
  `