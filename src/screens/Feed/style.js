import styled from 'styled-components/native';
import Theme from '../../Theme';
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;
export const Container = styled.View`
  background-color:${Theme.white};
  flex:1;
  padding:15px;
`;

export const Header = styled.View`
    flex-direction:row;
    justify-content:space-between;
    padding:10px 0px;
`;

export const ClearFilterGroup = styled.TouchableOpacity`
`;

export const ClearFilterText = styled.Text`
    font-family: ${Theme.font};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: ${Theme.not_authorized};
`;


export const Title = styled.Text`
    font-family: ${Theme.font};
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    color: ${Theme.primary};
    border-bottom-color:${Theme.primary};
    border-bottom-width:1px;
    padding:10px 0px;
    margin-bottom:20px;
`;


export const LabelField = styled.Text`
    font-family: ${Theme.font};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.88);
    margin-bottom:20px;
`;

export const UnitSelected = styled.View`
    background-color:${Theme.white};
    padding:20px;
    elevation: 2;
    margin-top:10px;
`;

export const UnitSelectedText = styled.Text``;

export const CalendaButton = styled.TouchableOpacity`
    border-radius:100px;
    background-color:${Theme.primary};
    padding:13px 18px;
    flex:0;
    justify-content:flex-end;
    align-items:center;
    width:150px;
`;
export const CalendaButtonText = styled.Text`
    color:${Theme.white};
`;

export const BoxCalendar = styled.View`
    background-color:${Theme.white};
    padding:0px;
    margin-top:-10px;
    width: 100%;
`;
