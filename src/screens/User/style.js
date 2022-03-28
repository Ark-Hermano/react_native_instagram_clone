import styled from 'styled-components/native';
import Theme from '../../Theme';
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;


  item = styled.View`
    alignItems: "center",
    backgroundColor: "#dcda48",
    flexBasis: 0,
    flexGrow: 1,
    margin: 4,
    padding: 20
  `
  
  itemEmpty = styled.View`
    backgroundColor: "transparent"
  `

  text = styled.Text`
    color: "#333333"
  `




  