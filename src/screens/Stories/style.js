import styled from 'styled-components/native';
 
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;


  export const button = styled.Image`
    position: absolute ;
    top: 20;
    zIndex: 200
  `

  export const storieContainer = styled.View`
      top: -window.innerHeight + 192 ; 
      height: window.innerHeight ;
      width: window.innerWidth ;
  `
  
  export const image = styled.Image`
      zIndex: 9;
      top: 0;
      position: absolute;
      height: window.innerHeight ;
      width: window.innerWidth ;
  `

  export const storieItemNext = styled.TouchableOpacity`
      position:relative;
      height: window.innerHeight * 0.7 ;
      justifyContent:center;
      width: window.innerWidth/2 ;
      top:window.innerHeight * 0.1; 
      left: window.innerWidth/2;
      zIndex: 9;
      elevation: 9;
  `

  export const storieItemPrev = styled.TouchableOpacity`
      position:absolute;
      height: window.innerHeight * 0.7 ;
      justifyContent:center;
      width: window.innerWidth/2 ;
      top:window.innerHeight * 0.1; 
      left:  0;
      zIndex: 9;
      elevation: 9;
  `

  export const userHeader = styled.View`
      marginTop: 15px;
      alignSelf: flex-start;
      display: flex;
      flexDirection: row;
      paddingLeft: 15px;
      zIndex: 10; 
  `

  export const profilePicContainer = styled.View`
      zIndex: 11; 
  `

  export const profilePic = styled.Image`
      height:35;
      width:35;
      zIndex: 12; 
      borderRadius: 100%;
  `

  export const userHeaderBody = styled.View`
    justifyContent: center; 
    flexDirection: column;
    marginLeft: 15px;
    zIndex: 14;
  `

  export const userNameContainer = styled.View`
    zIndex: 15;
  `

  export const userName = styled.Text`
    fontWeight: bold;
    color: #fff;
    zIndex: 16;
  `

  export const storieInformation = styled.View`
    zIndex: 17;
  `

  export const storieInformatioText = styled.Text`
    color: #fff;
    fontWeight: bold;
    zIndex: 19;
  `

  export const userBottom = styled.View`
    zIndex: 20;
    marginBottom: 15px;
    flexDirection: row;
    justifyContent: space-around;
    top: innerHeight - 105;
    width: 95%;
  `

  export const inputBottom = styled.View`
    zIndex: 20;
    marginBottom: 15px;
    flexDirection: row;
    alignItems: center;
    justifyContent: space-around;
    top: innerHeight - 125;
    width: 95%;
    marginHorizontal:auto;
    padding: 10px;
    borderRadius: 15px;
  `

  export const storieVisualiztionsContainer = styled.View`
    marginLeft: 15px;
    zIndex: 21;
  `

  export const bottomActionSecond = styled.View`
    alignItems: center;
    marginLeft: auto;
    alignItems: center;
    zIndex: 23;
  `

  export const bottomActionThird = styled.View`
    alignItems: center;
    marginLeft: 15px;
    alignItems: center;
    zIndex: 23;
  `

  export const bottomActionLast = styled.View`
    alignItems: center;
    marginLeft: 15px;
    alignItems: center;
    zIndex: 23;
  `

  export const actionIcon = styled.View`
    zIndex: 24;
    height: 20px;
    width: 20px;
  `

  export const actionText = styled.Text`
    zIndex: 25;
    color: #fff;
    fontWeight: bold;
  `

  export const visualizations = styled.FlatList`
    flexDirection: row;
    zIndex: 26;
    height: 20px;
  `

  export const postLikeContainer = styled.View`
    
  `

  export const postLikeProfile = styled.Image`
    height: 20px;
    width: 20px;
    borderRadius: 100%;
    borderWidth: 1px;
    borderColor: #000;
  `
