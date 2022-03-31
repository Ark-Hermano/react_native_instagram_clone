import React, {useContext} from 'react';
import styled from 'styled-components/native'
import { View, TouchableOpacity, Image } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

const TabArea = styled.View`
    height: 60px;
    flex-direction: row;
    background-color: #000;
`

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;
`;

export default ({state, navigation}) => {


    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
            <TabItem onPress={() => {goTo('Feed')}}> 
                <Feather name="home" size={24} color="#fff" />
            </TabItem>
            <TabItem onPress={() => {goTo('Search')}}>
                <AntDesign name="search1" size={24} color="#fff" />
            </TabItem>
            <TabItem onPress={() => {goTo('Reels')}}>
                <Entypo name="folder-video" size={24} color="#fff" />
            </TabItem>
            <TabItem onPress={() => {goTo('Shop')}}>
                <Entypo name="shop" size={24} color="#fff" />
            </TabItem>
            <TabItem onPress={() => {goTo('Account')}}>
                <MaterialCommunityIcons name="account-circle-outline" size={24} color="#fff" />
            </TabItem>
        </TabArea>
    )
}
