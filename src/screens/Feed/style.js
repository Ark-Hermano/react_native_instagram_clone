import styled from 'styled-components/native';
import Theme from '../../Theme';
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;


      Scroll = styled.FlatList`
        flexDirection: 'row',
        marginVertical: '15px'
      `

      background = styled.SafeAreaView`
        backgroundColor:'#000',
      `
    
      top = styled.View`
        height:60,
        backgroundColor:'#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '15px',
        alignItems: 'center'
      ` 
    
      logoContainer = styled.View`
        height:'50px',
        width:'170px',
        justifyContent: 'center'
      `
    
      logo = styled.Image`
        width:'60%',
        height: '30px'
      `
    
      headerIcon = styled.Image`
        width:'25px',
        height: '25px'
      `
