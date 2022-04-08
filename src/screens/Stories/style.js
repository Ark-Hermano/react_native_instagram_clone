import styled from 'styled-components/native';
 
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;


  button = styled.Image`
    position: absolute ;
    top: 20;
    zIndex: 200
  `

  storieContainer = styled.View`
      top: -window.innerHeight + 192 ; 
      height: window.innerHeight ;
      width: window.innerWidth ;
  `
  
  image = styled.Image`
      zIndex: 9;
      top: 0;
      position: absolute;
      height: window.innerHeight ;
      width: window.innerWidth ;
  `

  storieItemNext = styled.TouchableOpacity`
      position:relative;
      height: window.innerHeight * 0.7 ;
      justifyContent:center;
      width: window.innerWidth/2 ;
      top:window.innerHeight * 0.1; 
      left: window.innerWidth/2;
      zIndex: 9;
      elevation: 9;
  `

  storieItemPrev = styled.TouchableOpacity`
      position:absolute;
      height: window.innerHeight * 0.7 ;
      justifyContent:center;
      width: window.innerWidth/2 ;
      top:window.innerHeight * 0.1; 
      left:  0;
      zIndex: 9;
      elevation: 9;
  `

  userHeader = styled.View`
      marginTop: 15px;
      alignSelf: flex-start;
      display: flex;
      flexDirection: row;
      paddingLeft: 15px;
      zIndex: 10; 
  `

  profilePicContainer = styled.View`
      zIndex: 11; 
  `

  profilePic = styled.Image`
      height:35;
      width:35;
      zIndex: 12; 
      borderRadius: 100%;
  `

  userHeaderBody = styled.View`
    justifyContent: center; 
    flexDirection: column;
    marginLeft: 15px;
    zIndex: 14;
  `

  userNameContainer = styled.View`
    zIndex: 15;
  `

  userName = styled.Text`
    fontWeight: bold;
    color: #fff;
    zIndex: 16;
  `

  storieInformation = styled.View`
    zIndex: 17;
  `

  storieInformatioText = styled.Text`
    color: #fff;
    fontWeight: bold;
    zIndex: 19;
  `

  userBottom = styled.View`
    zIndex: 20;
    marginBottom: 15px;
    flexDirection: row;
    justifyContent: space-around;
    top: innerHeight - 105;
    width: 95%;
  `

  inputBottom = styled.View`
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

  storieVisualiztionsContainer = styled.View`
    marginLeft: 15px;
    zIndex: 21;
  `

  bottomActionSecond = styled.View`
    alignItems: center;
    marginLeft: auto;
    alignItems: center;
    zIndex: 23;
  `

  bottomActionThird = styled.View`
    alignItems: center;
    marginLeft: 15px;
    alignItems: center;
    zIndex: 23;
  `

  bottomActionLast = styled.View`
    alignItems: center;
    marginLeft: 15px;
    alignItems: center;
    zIndex: 23;
  `

  actionIcon = styled.View`
    zIndex: 24;
    height: 20px;
    width: 20px;
  `

  actionText = styled.Text`
    zIndex: 25;
    color: #fff;
    fontWeight: bold;
  `

  visualizations = styled.FlatList`
    flexDirection: row;
    zIndex: 26;
    height: 20px;
  `

  postLikeContainer = styled.View`
    
  `

  postLikeProfile = styled.Image`
    height: 20px;
    width: 20px;
    borderRadius: 100%;
    borderWidth: 1px;
    borderColor: #000;
  `
