import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  HorizontalScrollView,
  ScrollView,
  Dimensions,
  TextInput
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import { Video, AVPlaybackStatus } from 'expo-av';
const innerWidth = Dimensions.get('window').width;


function EditProfile(){

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [site, setSite] = useState('')
  const [bio, setBio] = useState('')

  useEffect(() => {
    setName('Hermano Fernandes')
    setUserName('hermano_sama')
    setBio(
      'bboy calistênico programador'
    )

  },[])
  function createRows(data, columns) {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;
  
    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1;
    }

    return data;
  }

  return (
    <SafeAreaView style={styles.theme}>
      <ScrollView style={styles.screenContainer}>

        <View style={styles.headerProfile}>
          <View style={styles.profileImage} >
            <Image esizeMode="cover" style={styles.image} source={require('./../../../assets/profile.jpg')} />
          </View>

          <TouchableOpacity style={styles.changeProfile}>
            <Text style={styles.changeProfileText}>Alterar foto do perfil</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputsContainer} >
          <View>
            <Text style={styles.label} >Nome</Text>
            <TextInput changeProfile
              style={styles.input}
              value={name}
              onChange={(e) => {setName(e.target.value)}}
            />
          </View>

          <View>
            <Text style={styles.label}>Nome de usuário</Text>
            <TextInput 
              style={styles.input}
              value={userName}
              onChange={(e) => {setUserName(e.target.value)}}
            />
          </View>

          <View>
            <Text style={styles.label}>Site</Text>
            <TextInput 
              style={styles.input}
              value={site}
              onChange={(e) => {setSite(e.target.value)}}
            />
          </View>

          <View>
            <Text style={styles.label}>Bio</Text>
            <TextInput 
              style={styles.input}
              value={bio}
              onChange={(e) => {setBio(e.target.value)}}
            />
          </View>

        </View>

        <View style={styles.sectionsContainer}>
          <View style={styles.headerSection}>
            <Text style={styles.colorWhite}>Informações do perfil</Text>
          </View>

          <TouchableOpacity style={styles.infoSection}>
            <View>
              <Text style={styles.colorWhite}>Página</Text>
            </View>

            <View styles={styles.descContainer}>
              <View>
                <Text style={styles.desc}>
                  Conectar ou criar   
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoSection}>
            <View>
              <Text style={styles.colorWhite}>Categoria</Text>
            </View>

            <View styles={styles.descContainer} >
              <Text style={styles.desc}>
                Atleta 
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoSection}>
            <View>
              <Text style={styles.colorWhite}>Opções de contato</Text>
            </View>

            <View styles={styles.descContainer}>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoSection}>
            <View>
              <Text style={styles.colorWhite}>Exibição do perfil</Text>
            </View>

            <View styles={styles.descContainer}>
              <Text  style={styles.desc}>
                Tudo oculto
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.configContainer} >
          <TouchableOpacity>
            <Text style={styles.configText}>Configurações de informações pessoais</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )

}



const styles = StyleSheet.create({

  headerProfile:{
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 24
  },

  headerSection:{
    paddingBottom: 15,
  },  

  inputsContainer:{
    paddingHorizontal: 20,
    borderBottomColor: '#404040',
    borderWidth: 1,
    paddingBottom: 6
  },

  sectionsContainer:{
    borderBottomColor: '#404040',
    borderWidth: 1,
    padding: 20
  },

  profileImage:{
    height: 120,
    width: 120,
    borderRadius: 1000,
    marginBottom: 14
  },

  infoSection:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },

  image:{
    height: 120,
    width: 120,
    borderRadius: 1000

  },

  changeProfileText:{
    color: '#458eff',
    fontSize: 20
  },

  colorWhite:{
    color: '#fff',
    fontSize: 18
  },  

  desc:{
    color: '#404040',
    fontSize: 16,
    alignItems: 'center'
  },

  input:{
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    color: '#fff',
    fontSize: 18,
    marginBottom: 24
  },

  theme:{
    backgroundColor: '#000',
  },

  label:{
    color:'#404040',
    fontSize: 16,
    marginBottom: 3
  },

  configText:{
    color: '#458eff',
    fontSize: 18,
    textAlign: 'left'

  },

  descContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },

  configContainer:{
    padding: 20,
    borderBottomColor: '#404040',
    borderWidth: 1,
  }

});
export default EditProfile