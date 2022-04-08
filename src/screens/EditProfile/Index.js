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
    <Theme>
      <ScreenContainer>

        <HeaderProfile>
          <ProfileImage>
            <Image  resizeMode="cover" source={require('./../../../assets/profile.jpg')} />
          </ProfileImage>

          <ChangeProfile>
            <ChangeProfileText>Alterar foto do perfil</ChangeProfileText>
          </ChangeProfile>
        </HeaderProfile>

        <InputsContainer>
          <View>
            <Label>Nome</Label>
            <Input
              value={name}
              onChange={(e) => {setName(e.target.value)}}
            />
          </View>

          <View>
            <Label>Nome de usuário</Label>
            <Input 
              value={userName}
              onChange={(e) => {setUserName(e.target.value)}}
            />
          </View>

          <View>
            <Label>Site</Label>
            <Input 
              value={site}
              onChange={(e) => {setSite(e.target.value)}}
            />
          </View>

          <View>
            <Label>Bio</Label>
            <Input 
              value={bio}
              onChange={(e) => {setBio(e.target.value)}}
            />
          </View>

        </InputsContainer>

        <SectionsContainer>
          <HeaderSection>
            <ColorWhite>Informações do perfil</ColorWhite>
          </HeaderSection>

          <InfoSection>
            <View>
              <ColorWhite>Página</ColorWhite>
            </View>

            <DescContainer>
              <View>
                <Desc>
                  Conectar ou criar   
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
                </Desc>
              </View>
            </DescContainer>
          </InfoSection>

          <InfoSection>
            <View>
              <ColorWhite>Categoria</ColorWhite>
            </View>

            <DescContainer>
              <Desc>
                Atleta 
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </Desc>
            </DescContainer>
          </InfoSection>

          <InfoSection>
            <View>
              <ColorWhite>Opções de contato</ColorWhite>
            </View>

            <DescContainer>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
            </DescContainer>
          </InfoSection>

          <InfoSection>
            <View>
              <ColorWhite>Exibição do perfil</ColorWhite>
            </View>

            <DescContainer>
              <Desc>
                Tudo oculto
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </Desc>
            </DescContainer>
          </InfoSection>
        </SectionsContainer>

        <ConfigContainer>
          <TouchableOpacity>
            <ConfigText>Configurações de informações pessoais</ConfigText>
          </TouchableOpacity>
        </ConfigContainer>

      </ScreenContainer>
    </Theme>
  )

}


export default EditProfile