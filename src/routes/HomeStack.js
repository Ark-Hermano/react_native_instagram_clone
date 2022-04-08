import React, {useRef} from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar'

import { Feather, MaterialCommunityIcons} from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

import CreateStack from './CreateStack'
import Search from '../screens/Search/Index'
import Reels from '../screens/Reels/Index'
import Shop from '../screens/Shop/Index'
import Account from '../screens/Account/Index'
import Insights from '../screens/Insights/Index'
import Notifications from '../screens/Notifications/Index'
import EditProfile from '../screens/EditProfile/Index'
import Feed from '../screens/Feed/Index';
import Tools from '../screens/Tools/Index'

import {AccountHeaderButton, AccountHeaderLeft, ChangeUser, AccountName, AccountHeaderRight} from './Style.js'

const Tab = createBottomTabNavigator();


function HomeStack() {

  const modalizeRefChangeRef = useRef(null)
  const modalizeRefSettings = useRef(null)
  const modalizeRefCreate = useRef(null)

  const onOpen = () => {

    modalizeRefChangeRef.current?.open();
  };


  const CancelButton = ({navigation}) => (
    <AccountHeaderButton onPress={() => {navigation.goBack()}}>
      <AntDesign name="close" size={24} color="#fff" />
    </AccountHeaderButton>
  )

  const ReturnButton = ({navigation}) => (
    <AccountHeaderButton  onPress={() => {navigation.goBack()}}>
      <Ionicons name="arrow-back" size={24} color="#fff" />
    </AccountHeaderButton>
  )

  const AcceptButton = ({navigationTitle, navigation}) => (
    <AccountHeaderButton onPress={() => {handleUploadPhoto()}}>
      <Feather name="check" size={24} color="#458eff" />
    </AccountHeaderButton>
  )

  const InfoButton = ({navigationTitle, navigation}) => (
    <AccountHeaderButton onPress={() => {handleUploadPhoto()}}>
      <AntDesign name="infocirlceo" size={24} color="#fff" />
    </AccountHeaderButton>
  )

  const SavedPosts = ({navigation}) => (
    <AccountHeaderButton onPress={() => {}}>
      <MaterialCommunityIcons name="calendar-account-outline" size={30} color="#fff" />
    </AccountHeaderButton>
  )

  const OpenStoreSettings = () => {

    modalizeRefChangeRef.current?.open();
  };

  const StoreSettings = ({navigation}) => (
    <AccountHeaderButton onPress={() => {}}>
      <Octicons name="settings" size={30} color="#fff" />
    </AccountHeaderButton>
  )

 

  const renderHeader = () => (
    <View style={modalSendStyles.header} >
        <View style={modalSendStyles.headerButton} ></View>
    </View>
  )
  

  const AccountHeader = () => (
    <AccountHeader>
      <AccountHeaderLeft>
        <ChangeUser onPress={() => {onOpen()}} >
          <AccountName>hermano_sama</AccountName>

          <Entypo name="chevron-small-down" size={24} color="#fff" />
        </ChangeUser>  
      </AccountHeaderLeft>

      <AccountHeaderRight>
        <AccountHeaderButton onPress={() => {}}>
          <Feather name="plus-square" size={32} color="#fff" />
        </AccountHeaderButton>
        
        <AccountHeaderButton onPress={() => {}}>
          <Foundation name="list" size={32} color="#fff" />
        </AccountHeaderButton>
      </AccountHeaderRight>

      <Portal>
        <Modalize
          handleStyle={{ width: 35, backgroundColor: '#75777a' }}
          withHandle={false}
          modalStyle={{marginTop: 0}}
          HeaderComponent={renderHeader}  
          snapPoint={window.innerHeight - 100} 
          ref={modalizeRefChangeRef}
        >

        </Modalize>
      </Portal>

    </AccountHeader>
  )

  const CustomHeader = ({navigation}) => (
    <AccountHeader>
        <CancelButton navigation={navigation} />

        <HeaderTitle>
          <HeaderTitleText >Editar perfil</HeaderTitleText>
        </HeaderTitle>
        
        <AcceptButton/>
    </AccountHeader>
  )

  const InsightsHeader = ({navigation}) => (
    <AccountHeader>
        <ReturnButton navigation={navigation} />

        <HeaderTitle>
          <HeaderTitleText>Insights</HeaderTitleText>
        </HeaderTitle>
        
        <InfoButton  navigation={navigation}  />
    </AccountHeader>
  )

  const ShopHeader = ({navigation}) => (
    <HeaderType>
        <HeaderTitle>
          <HeaderTitleText>Loja</HeaderTitleText>
        </HeaderTitle>

        <SavedPosts navigation={navigation} />
        
        <StoreSettings navigation={navigation} />
    </HeaderType>
  )

  const ToolsHeader = ({navigation}) => (
    <ToolsHeader>
        <ReturnButton navigation={navigation} />

        <HeaderTitle>
          <HeaderTitleText>Ferraments para anúncios</HeaderTitleText>
        </HeaderTitle>
        
    </ToolsHeader>
  )

 
  return (
        <Tab.Navigator 
          tabBar={props=><CustomTabBar {...props} />}
          initialRouteName="Account"
        >
              <Tab.Screen 
                name="Feed" 
                component={Feed} 
                options={{ headerShown: false  }} 
              />

              <Tab.Screen 
                name="Me" 
                component={Feed} 
              />

              <Tab.Screen 
                name="Search" 
                component={Search} 
                options={{ headerShown: false  }} 
              />

              <Tab.Screen 
                name="Reels" 
                component={Reels} 
              />

              <Tab.Screen 
                name="Shop" 
                component={Shop} 
                options={{
                  headerMode: 'screen',
                  headerStyle: {
                    paddingHorizontal:30,
                    height: 80,
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    backgroundColor: "#000"
                  },
                  header:({ scene, previous, navigation }) => {
                    return (
                      <ShopHeader navigation={navigation} />
                    );
                  } 
                }}
              />
              

              <Tab.Screen 
                name="EditProfile" 
                component={EditProfile} 
                options={{
                  headerMode: 'screen',
                  headerStyle: {
                    paddingHorizontal:30,
                    height: 80,
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    backgroundColor: "#000"
                  },
                  header:({ scene, previous, navigation }) => {
                    return (
                      <CustomHeader navigation={navigation} />
                    );
                  } 
                }}
              />

              <Tab.Screen 
                name="Account" 
                component={Account} 
                options={{
                  headerMode: 'screen',
                  headerStyle: {
                    paddingHorizontal:30,
                    height: 80,
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    backgroundColor: "#000"
                  },
                  header:({ scene, previous, navigation }) => {
                    return (
                      <AccountHeader/>
                    );
                  } 
                }}
              />

              <Tab.Screen 
                name="Insights" 
                component={Insights} 
                options={{
                  headerMode: 'screen',
                  headerStyle: {
                    paddingHorizontal:30,
                    height: 80,
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    backgroundColor: "#000"
                  },
                  header:({ scene, previous, navigation }) => {
                    return (
                      <InsightsHeader navigation={navigation} />

                    );
                  } 
                }}
              />

              <Tab.Screen 
                name="Tools" 
                component={Tools} 
                options={{
                  headerMode: 'screen',
                  headerStyle: {
                    paddingHorizontal:30,
                    height: 80,
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    backgroundColor: "#000"
                  },
                  header:({ scene, previous, navigation }) => {
                    return (
                      <ToolsHeader navigation={navigation} />

                    );
                  } 
                }}
              />

              <Tab.Screen 
                name="Notifications" 
                component={Notifications} 
              />
       
        </Tab.Navigator>
  );
}

const modalSendStyles = StyleSheet.create({
  header:{
    backgroundColor:'#272727',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 25,
  },


  headerButton:{
    backgroundColor:'#ddd',
    width: 35,
    height: 6,
    borderRadius: 25,
  }, 

})

export default HomeStack;