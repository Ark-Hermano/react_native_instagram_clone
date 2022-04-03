import React, {useRef} from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar'

import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
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


const Tab = createBottomTabNavigator();


function HomeStack() {

  const modalizeRefChangeRef = useRef(null)
  const modalizeRefSettings = useRef(null)
  const modalizeRefCreate = useRef(null)

  const onOpen = () => {

    modalizeRefChangeRef.current?.open();
  };


  const CancelButton = ({navigation}) => (
    <TouchableOpacity style={styles.accountHeaderButton} onPress={() => {navigation.goBack()}}>
      <AntDesign name="close" size={24} color="#fff" />
    </TouchableOpacity>
  )

  const ReturnButton = ({navigation}) => (
    <TouchableOpacity style={styles.accountHeaderButton} onPress={() => {navigation.goBack()}}>
      <Ionicons name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
  )

  const AcceptButton = ({navigationTitle, navigation}) => (
    <TouchableOpacity style={styles.accountHeaderButton} onPress={() => {handleUploadPhoto()}}>
      <Feather name="check" size={24} color="#458eff" />
    </TouchableOpacity>
  )

  const InfoButton = ({navigationTitle, navigation}) => (
    <TouchableOpacity style={styles.accountHeaderButton} onPress={() => {handleUploadPhoto()}}>
      <AntDesign name="infocirlceo" size={24} color="#fff" />
    </TouchableOpacity>
  )

  const SavedPosts = ({navigation}) => (
    <TouchableOpacity onPress={() => {}} style={styles.accountHeaderButton} >
      <MaterialCommunityIcons name="calendar-account-outline" size={30} color="#fff" />
    </TouchableOpacity>
  )

  const OpenStoreSettings = () => {

    modalizeRefChangeRef.current?.open();
  };

  const StoreSettings = ({navigation}) => (
    <TouchableOpacity onPress={() => {}} style={styles.accountHeaderButton} >
      <Octicons name="settings" size={30} color="#fff" />
    </TouchableOpacity>
  )

 

  const renderHeader = () => (
    <View style={modalSendStyles.header} >
        <View style={modalSendStyles.headerButton} ></View>
    </View>
  )
  

  const AccountHeader = () => (
    <View style={styles.accountHeader}>
      <View style={styles.accountHeaderLeft}>
        <TouchableOpacity onPress={() => {onOpen()}} style={styles.changeUser}>
          <Text style={styles.accountName}>hermano_sama</Text>

          <Entypo name="chevron-small-down" size={24} color="#fff" />
        </TouchableOpacity>  
      </View>

      <View style={styles.accountHeaderRight}>
        <TouchableOpacity onPress={() => {}} style={styles.accountHeaderButton} >
          <Feather name="plus-square" size={32} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {}} style={styles.accountHeaderButton} >
          <Foundation name="list" size={32} color="#fff" />
        </TouchableOpacity>
      </View>

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

    </View>
  )

  const CustomHeader = ({navigation}) => (
    <View style={styles.accountHeader}>
        <CancelButton navigation={navigation} />

        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText} >Editar perfil</Text>
        </View>
        
        <AcceptButton/>
    </View>
  )

  const InsightsHeader = ({navigation}) => (
    <View style={styles.accountHeader}>
        <ReturnButton navigation={navigation} />

        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText} >Insights</Text>
        </View>
        
        <InfoButton  navigation={navigation}  />
    </View>
  )

  const ShopHeader = ({navigation}) => (
    <View style={styles.headerType}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>Loja</Text>
        </View>

        <SavedPosts navigation={navigation} />
        
        <StoreSettings navigation={navigation} />
    </View>
  )

 
  return (
        <Tab.Navigator 
          tabBar={props=><CustomTabBar {...props} />}
          initialRouteName="Insights"
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
                name="Notifications" 
                component={Notifications} 
              />
       
        </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

    actionImg: {
      height: 25,
      width: 25
    },

    text:{
      color:'#fff',
      fontSize: 13
    },

    accountName:{
      fontSize: 25,
      color:'#fff',
      fontWeight:'bold'

    },

    accountHeader:{
      justifyContent:'space-between',
      flexDirection: 'row',
      backgroundColor: '#000',
      alignContent:'center',
      height: 70,
      padding: 15
    },

    headerType:{
      justifyContent:'space-between',
      flexDirection: 'row',
      backgroundColor: '#000',
      alignContent:'center',
      height: 70,
      padding: 20
    },

    accountHeaderButton:{
      alignContent:'center',
      justifyContent:'center',
      marginHorizontal: 10
    },

    accountHeaderLeft:{
      flexDirection: 'row',

    },

    changeUser:{
      flexDirection: 'row',
      alignItems: 'center'
    },

    accountHeaderRight:{
      flexDirection: 'row',
    },

    headerTitle:{
      width:'75%', 
      justifyContent: 'center'
    },
    
    headerTitleText:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 22
    }
    
});


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