import styled from 'styled-components/native';
 

  export const TabButton = styled.TouchableHighlight`
    width: '50%';
    alignContent: 'center';
    justifyContent: 'center';
    borderBottomColor: '#404040';
    borderBottomWidth:2;
    padding: 9
  `

  export const TabButtonSelected = styled.TouchableHighlight`
    width: '50%';
    alignContent: 'center';
    justifyContent: 'center';
    borderBottomColor: '#fff';
    borderBottomWidth:2
  `

  export const AdjustImage = styled.Image`
    height: 100;
    width: 100
  `

  export const TabButtonText = styled.Text`
    color:'#fff';
    textAlign:'center';
    fontSize: 18;
    fontWeight:'bold'
  `

  export const AdjustLists = styled.FlatList`
    padding: 5;
    paddingHorizontal: 10
  `

  export const BottomEditButtons = styled.View`
    flexDirection:'row'
  `

  export const StorieItemNext = styled.TouchableOpacity`
      backgroundColor:'transparent';
      position:'absolute';
      height: 20 ;
      justifyContent:'center';
      width: 20 ;
      top:Dimensions.get('window').height/3.25;  
      left:Dimensions.get('window').width - 40;
      zIndex: 9;
      elevation: 9;
  `

  export const Image = styled.Image`
      top:0; 
      height: Dimensions.get('window').height/1.6;
      width: Dimensions.get('window').width;
  `

  export const StorieItemPrev = styled.TouchableOpacity`
    backgroundColor:'transparent';
      position:'absolute';
      height: 20;
      justifyContent:'center';
      width: 20;
      top: Dimensions.get('window').height/3.25; 
      left:  15;
      zIndex: 9;
      elevation: 9;
  `

  export const BottomEdit = styled.View`
    backgroundColor:'#404040';
    height: (Dimensions.get('window').height - Dimensions.get('window').height/1.6);
    width: Dimensions.get('window').width;
    
  `

  export const AdjustItemText = styled.Text`
    fontWeight: 'bold';
    textAlign: 'center';
    color: '#787878';
    marginBottom: 3
  `

  export const AdjustSelectedText = styled.Text`
    fontWeight: 'bold';
    textAlign: 'center';
    color: '#fff';
    marginBottom: 3
  `

  export const Item = styled.TouchableOpacity`
      marginHorizontal:5;
      backgroundColor: '#404040'
  `

  export const Filter = styled.View`
    backgroundColor: 'rgba(127;187;227;.4)';
    
  `