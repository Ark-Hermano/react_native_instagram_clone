import styled from 'styled-components/native';
 
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;


export const top = styled.View`
        height: 60px,
        flexDirection: row,
        height: 60px,
        justifyContent: space-around,
        alignItems: center,
      `


  top = styled.View`
    height: 60px,
    flexDirection: row,
    height: 60px,
    justifyContent: space-around,
    alignItems: center,
  `
  
  backIcon = styled.View`
    height: 30,
    width: 25,
  `
  sectionName = styled.View`
    width: 60%,
  `
  sendIcon = styled.View`
    height: 20,
    width: 20,
  `

  section = styled.View`
    zIndex:27,
  `
  sectionHeader = styled.View`
    width: 91%,
    alignSelf: center,
    marginTop: 15px,
    marginBottom: 10px,
    zIndex:28,
  `
  sectionTitleText = styled.View`
    color: #fff,
    fontSize: 18px,
    fontWeight: bold,
    zIndex:29,
  `

  