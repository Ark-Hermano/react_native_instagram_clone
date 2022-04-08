import styled from 'styled-components/native';

  export const FirstLikesContainer = styled.FlatList`
    width: auto
  `

  export const LikesContainer = styled.View`
    color: #fff;
    flexDirection: row;
    width: auto;
    marginTop:0;
    alignItems: center
  `

  export const Likes = styled.FlatList`
   
  `

  export const Comments = styled.Text`
    color: #666;
    marginTop: 2
  `

  export const InputContainer = styled.TouchableOpacity`
    flexDirection: row;
    marginTop: 5 
  `

  export const ProfilePicComment = styled.Image`
    borderRadius: 10000;
    width: 25;
    height: 25;
    margin-right: 5;
  `

  export const ProfilePic = styled.Image`
    height: 100%;
    width: 100%;
    borderWidth: 4;
    borderColor: #000;
    borderRadius: 100;
  `

  export const Post = styled.View`
    margin-vertical: 15
  `

  export const StorieContainer = styled.TouchableOpacity`
    marginHorizontal: 5;
    alignItems: center;
    justifyContent: center;
  `

  export const AuthorTitle = styled.Text`
    color: #fff;
    fontSize: 18;
    fontWeight: bold
  `

  export const PostHeader = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    paddingHorizontal: 15;
    alignItems: center;
    marginBottom: 15;
  `

  export const PostOptions = styled.View``

  export const UserInfo = styled.View``

  export const Author = styled.TouchableOpacity`
    fontSize: 14;
    color: #fff;
    font-family: sans-serif;
    font-weight: bold;
  `

  export const Place = styled.Text`
    fontSize: 12;
    color: #666;
  `

  export const Picture_url = styled.Image`
    width: 100%;
    height: 400
  `

  export const Footer = styled.View`
    paddingHorizontal: 15
  `

  export const Actions = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    paddingVertical: 10;

  `

  export const Action = styled.TouchableOpacity`
    marginRight: 8
  `

  export const ActionImg = styled.View`
    height: 25;
    width: 25;
  `

  export const LeftActions = styled.View`
    flexDirection: row
  `

  export const LikesNumber = styled.Text`
    fontWeight: bold;
    fontSize: 12;
  `

  export const Description = styled.Text`
    color: #fff;
    lineHeight: 18;
    height: auto
  `

