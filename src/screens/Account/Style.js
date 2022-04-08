import styled from 'styled-components/native';
 
import { Dimensions } from 'react-native';

const innerWidth = Dimensions.get('window').width;


  export const ScreenContainer = styled.ScrollView`
    backgroundColor: #000;
  ` 

  export const TextWhite = styled.Text`
    color:#FFF;
    fontWeight: bold;
  ` 

  export const SubTitle = styled.Text`
    color:#404040;
    fontWeight: bold;

  ` 

  export const ProfileData = styled.View`
    paddingVertical: 15;
    paddingHorizontal: 10;

  ` 

  export const Topbar = styled.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    borderTopColor: #404040;
    borderTopWidth  : 1;
    borderBottomColor: #404040;
    borderBottomWidth: 1;
    paddingVertical: 10;
    paddingHorizontal: 15
  ` 

  export const ProfileResume = styled.View`
    flexDirection: row;
    alignItems: center ;
    justifyContent: space-between;
    marginBottom: 16
  ` 

  export const ProfileImage = styled.View`
    height: 100;
    width: 100;
    borderRadius: 1000
  ` 

  export const Image = styled.Image`
    height: 100;
    width: 100;
    borderRadius: 1000

  ` 

  export const InfoContainer = styled.View`

  ` 

  export const InfoContainerTextData = styled.Text`
    fontWeight: bold;
    color: #fff ;
    textAlign:center;
    fontSize: 22
  ` 

  export const InfoContainerLabel = styled.Text`
    color: #fff ;
    fontSize: 16
  ` 

  export const BioContainer = styled.View`
    marginBottom: 16

  ` 

  export const BioContainerTitle = styled.View`


  ` 

  export const BioContainerBody = styled.View`

  ` 

  export const ButtonActionsContainer = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    marginBottom: 16
  ` 

  export const ButtonActionButton = styled.TouchableOpacity`
    width: 32%;
    backgroundColor: transparent;
    borderWidth: 2;
    borderColor: #404040;
    borderRadius: 6;
    alignItems: center;
    paddingVertical: 5
  ` 

  export const ButtonText = styled.Text`
    fontSize: 16;
    color: #fff;
    fontWeight: bold
  ` 

  export const StoriesHighlightsContainer = styled.View`
    marginBottom: 25
  ` 

  export const StorieTopBar = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    marginBottom: 10
  ` 

  export const StoriesHighlightTopbar = styled.View`

  ` 

  export const StoriesHighlightTopbarTitle = styled.View`
  ` 

  export const StoriesHighlightTopbarText = styled.View`

  ` 

  export const StorieHighlightCreate = styled.View`
    height: 72;
    width: 72;
    borderRadius: 1000;
    borderWidth: 1;
    borderColor: #fff;
    justifyContent: center;
    alignItems: center
  ` 

  export const StorieHighlight = styled.View`
    backgroundColor: #404040;
    height: 76;
    width: 76;
    borderRadius: 1000
  ` 

  export const PostsContainer = styled.View`

  ` 

  export const PostSection = styled.SafeAreaView`
    width: ${innerWidth};
    marginRight: 400
  ` 
  
  export const ScrollPostSections = styled.View`
    flexDirection: row;

  ` 

  export const TabsHeader = styled.View`
    flexDirection: row;
    justifyContent: space-between
  ` 

  export const TabsButton = styled.TouchableOpacity`
    width: 33%;
    alignItems: center;
    textAlign: center
  ` 

  export const Post = styled.View`
    alignItems:  center ;
    flexGrow: 1;
    margin: 2;
    flexBasis: 0;
  ` 

  export const PostImage = styled.Image`
    height: 125;
    width: 100%
  ` 

  export const Text = styled.View`
    color:  #333333 
  ` 

  export const PostEmpty = styled.View`
    backgroundColor:  transparent 
  ` 

