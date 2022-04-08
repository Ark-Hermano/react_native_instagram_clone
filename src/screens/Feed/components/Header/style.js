import styled from 'styled-components/native';
 
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;

  header = styled.View`
    backgroundColor:#272727;
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    borderTopLeftRadius: 10px;
    borderTopRightRadius: 10px;
    height: 25px;
  `

  headerButton = styled.View`
    backgroundColor:#ddd;
    width: 35px;
    height: 6px;
    borderRadius: 25px;
  `