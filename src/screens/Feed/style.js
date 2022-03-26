import styled from 'styled-components/native';
import Theme from '../../Theme';
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;

export const Scroll = styled.FlatList`
      flexDirection: 'row',
      marginVertical: '15px'
    `

export const Background = styled.SafeAreaView`
      backgroundColor:'#000',
    `
  
export const Top = styled.View`
      height:60,
      backgroundColor:'#000',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '15px',
      alignItems: 'center'
   ` 
  
export const LogoContainer = styled.View`
      height:'50px',
      width:'170px',
      justifyContent: 'center'
   `
  
export const Logo = styled.Image`
      width:'60%',
      height: '30px'
   `