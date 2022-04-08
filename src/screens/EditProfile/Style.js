import styled from 'styled-components/native';
 
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;


headerProfile = styled.View`
  justifyContent:'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  marginBottom: 24
`

headerSection = styled.View`
  paddingBottom: 15,
`  

inputsContainer = styled.View`
  paddingHorizontal: 20,
  borderBottomColor: '#404040',
  borderWidth: 1,
  paddingBottom: 6
`

sectionsContainer = styled.View`
  borderBottomColor: '#404040',
  borderWidth: 1,
  padding: 20
`

profileImage = styled.View`
  height: 120,
  width: 120,
  borderRadius: 1000,
  marginBottom: 14
`

infoSection = styled.TouchableOpacity`
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 15,
`

styledImage = styled.Image`
  height: 120,
  width: 120,
  borderRadius: 1000

`

changeProfileText = styled.Text`
  color: '#458eff',
  fontSize: 20
`

colorWhite = styled.Text`
  color: '#fff',
  fontSize: 18
`  

desc = styled.Text`
  color: '#404040',
  fontSize: 16,
  alignItems: 'center'
`

input = styled.TextInput`
  borderBottomWidth: 2,
  borderBottomColor: '#fff',
  color: '#fff',
  fontSize: 18,
  marginBottom: 24
`

theme = styled.SafeAreaView`
  backgroundColor: '#000',
`

label = styled.Text`
  color:'#404040',
  fontSize: 16,
  marginBottom: 3
`

configText = styled.Text`
  color: '#458eff',
  fontSize: 18,
  textAlign: 'left'

`

descContainer = styled.View`
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
  
`

configContainer = styled.View`
  padding: 20,
  borderBottomColor: '#404040',
  borderWidth: 1,
`