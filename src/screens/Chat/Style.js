import styled from styled-components/native;
import {Dimensions} from "react-native";

let width = Dimensions.get(window).width;


Conversation = styled.View`
  flexDirection: row;
  paddingVertical: 15;
  paddingHorizontal: 15;
  backgroundColor: #000;
  color: #fff;
  justifyContent: space-between;
  alignItems: center
`


TabsContainer = styled.View`
  flexDirection: row;
  textAlign: center;
  fontFamily: sans-serif;
  height: 40;
  alignItems: center
`

TabButton = styled.View`
  width: 33.5%;
  padding: 10;
  backgroundColor: #000;
  height: -webkit-fill-available;
`

SelectedTabButton = styled.View`
  width: 33%;
  padding: 10;
  backgroundColor: #000;
  borderBottomColor: #fff;
  borderBottomWidth: 2;
  height: -webkit-fill-available;
`

TabText = styled.View`
  fontWeight: bold;
  fontSize: 13;
  color: #fff;
`   

Top = styled.View`
  height:60;
  backgroundColor:#000;
  flexDirection: row;
  justifyContent: space-between;
  paddingHorizontal: 15px;
  alignItems: center
`

ListsIcon = styled.View`
  height:20;
  width:20;
`

NewMessageIcon = styled.View`
  height:20;
  width:20;
`

ActiveUser = styled.View`
  width: 65%;
  color: #fff;
  fontFamily:sans-serif;
  fontWeight:bold;
`

SearchContainer = styled.View`
  height:40;
  backgroundColor:#000;
  justifyContent: center
`

ChatContainer = styled.View`
  backgroundColor: #000;
  height: 100%;
`

SearchBar = styled.View`
  flexDirection: row;
  backgroundColor:#000;
  marginHorizontal: 15;
  borderRadius:8;
  paddingVertical: 5;
  paddingHorizontal: 15;
  backgroundColor:rgb(61;61;61);
  justifyContent: space-between;
  alignItems: center;
`

BackIcon = styled.View`
  height:20;
  width:20;
`

TopBarTitle = styled.View`
  fontSize: 15;
  color: #fff;
`

SearchInput = styled.View`
`

SearchIcon = styled.View`
  height:20;
  width:20;
`

SettingsIcon = styled.View`
  height:20;
  width:20;
`

