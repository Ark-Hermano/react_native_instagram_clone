import styled from 'styled-components/native';
 
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;


      followerContainer = styled.View`
        flexDirection: row;
        alignItems: center;
        justifyContent: space-between;
        marginBottom: 10;
      `

      followerPicContainer = styled.View`
    
      `

      followerPic = styled.Image`
        height: 35px;
        width: 35px;
        borderRadius: 100%;
      `

      followerName = styled.Text`
        color: #fff;
        fontSize: 12
      `

      followerSurname = styled.Text`
        color: #ddd;
        fontSize: 11;
      `

      information = styled.View`
        width: auto;
        paddingLeft: 10px;
        marginRight: auto;
      `

      sengButton = styled.TouchableOpacity`
        height: 25px;
        width: auto;
        paddingHorizontal: 35;
        backgroundColor: #0095f6;
        borderRadius: 3px;
        textAlign: center;
        alignItems: center;
        justifyContent: center;
      `

      sendText = styled.Text`
        color: #fff;
        fontSize: 13;
        fontWeight: bold;
      `
