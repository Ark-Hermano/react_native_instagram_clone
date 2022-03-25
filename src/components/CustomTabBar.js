import React, {useContext} from 'react';
import styled from 'styled-components/native'
import { View, TouchableOpacity, Image } from 'react-native'

import Home from '../../assets/invertedColors/home.png'
import Search from '../../assets/invertedColors/search.png'
import Reels from '../../assets/invertedColors/reels.png'
import Shop from '../../assets/invertedColors/shop.png'
import Account from '../../assets/invertedColors/account.png'

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

const Icon = styled.Image`
    width: 24px;
    height: 24px;

`

export default ({state, navigation}) => {


    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Feed')}> 
                <Icon source={Home} />
                {/*<HomeIcon style={{opacity: state:index === 0 ? 1 : 0.5}} width="24" heigth="24" fill="#FFFFFF" />*/}
            </TabItem>
            <TabItem onPress={()=>goTo('Search')}>
                <Icon source={Search} />
                {/*<SearchIcon style={{opacity: state:index === 1 ? 1 : 0.5}} width="24" heigth="24" fill="#FFFFFF" />*/}
            </TabItem>
            <TabItem onPress={()=>goTo('Reels')}>
                <Icon source={Reels} />
                {/*<TodayIcon width="32" heigth="32" fill="#4EADBE" />*/}
            </TabItem>
            <TabItem onPress={()=>goTo('Shop')}>
                <Icon source={Shop} />
                {/*<FavoriteIcon style={{opacity: state:index === 3 ? 1 : 0.5}} width="24" heigth="24" fill="#FFFFFF" />*/}
            </TabItem>
            <TabItem onPress={()=>goTo('Account')}>
                <Icon source={Account} />
               
            </TabItem>
        </TabArea>
    )
}
