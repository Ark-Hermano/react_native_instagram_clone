import React, { Component, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, Switch } from 'react-native';
import { Dimensions } from 'react-native';


export default function MainScreen() {

  const modalizeRef = React.createRef();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  // let photos = route?.params?.photos;

  let photos = [
    {id :1, src:'./../../../assets/3.jpg'},
    {id :2, src:'./../../../assets/3.jpg'},
    {id :3, src:'./../../../assets/2.jpg'},
    {id :4, src:'./../../../assets/2.jpg'},

  ]

  const DATA = [
    { id: 1, title:'Hermano - Criar'},
    { id: 2, title:'Hermano - Criar'},
    { id: 3, title:'Hermano - Criar'},
    { id: 4, title:'Hermano - Criar'},
    { id: 5, title:'Hermano - Criar'},
    { id: 6, title:'Hermano - Criar'},
  ]
 
  const [text, setText] = useState('')
  const [selectedId, setSelectedId] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);


  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {

  },[])

    async function handleUploadPhoto(){
      const formData = new FormData();

      formData.append('image', photos[0]) 
      formData.append('post_id', 1) 

      fetch("",{
          body: formData,
          method: "post"
      }).then(
        response => setText('json')
      ).then(
        success => setText('sucess') 
      ).catch(
        error => {
          setText('error')
          alert(error)  
        }
      );

      photos.map(async (photo) => {})
    }

    const Item = ({ item, onPress, index }) => (
      <TouchableOpacity key={index} onPress={onPress} style={[styles.item, {backgroundColor: '#404040'}]}>
        <Text style={styles.musicItem}>Hermano Criar</Text>
      </TouchableOpacity>
    );

    const renderItem = ({ item, index }) => {
      const backgroundColor = "#5c5c5c";
      const color = '#5c5c5c';
  
      return (
        <Item
          item={item}
          key={item.key}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{ backgroundColor:backgroundColor }}
          textColor={{ color:color }}
        />
      );
    };


    return (
      <SafeAreaView style={{ flex: 1 }}>     
            {/* <View style={{height:windowHeight, width:windowWidth, backgroundColor:'#000'}}>

              <View style={styles.addPostInformationContainer}>
                <View style={styles.row}>
                  <View>
                    <Image resizeMode="cover" style={styles.account} source={require('./../../../assets/3.jpg')} />           
                  </View>
                  
                  <View>
                    <TextInput style={{color:'#fff'}} type="text" name="name"  plachedolder="Escreva uma legenda..." /> 
                  </View>

                  <View>
                      <Image resizeMode="cover" style={styles.imageReview} source={require('./../../../assets/3.jpg')} />           
                  </View>
                </View>

                <View style={styles.row}>
                  <Text style={styles.colorWhite}>Marcar pessoas</Text>

  
                </View>

                <View style={styles.row}>
                  <Text style={styles.colorWhite}>Adicionar localização</Text>

                </View>

                <View style={styles.row}>
                  <Text style={styles.colorWhite}>Adicionar música</Text>


                </View>

                <View style={styles.row}>
               
                    {/* <FlatList
                      data={DATA}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{flexGrow: 1 , justifyContent: 'space-around'}}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.id}
                      extraData={selectedId}
                      horizontal={true}
                    /> 
               
                </View>
              </View>

              <View style={styles.publicAlsoContainer}>
                <View style={styles.rowSeconday}>
                  <Text style={styles.colorWhite}>Publicar também</Text>

                  <View>
                    <Switch
                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                      thumbColor={isEnabled ? "#458eff" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </View>

                <View style={styles.rowSeconday}>
                  <Text style={styles.colorWhite}>Facebook</Text>

                  <View>
                    <Switch
                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                      thumbColor={isEnabled ? "#458eff" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </View>

                <View style={styles.rowSeconday}>
                  <Text style={styles.colorWhite}>Twitter</Text>

                  <View>
                    <Switch
                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                      thumbColor={isEnabled ? "#458eff" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </View>

                <View style={styles.rowSeconday}>
                  <Text style={styles.colorWhite}>Twitter</Text>

                  <View>
                    <Switch
                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                      thumbColor={isEnabled ? "#458eff" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </View>

              </View>

              <View style={styles.advancedContainer}>
                <View style={styles.sectionTitle}>
                  <Text style={styles.sectionTitleText}>Configurações avançadas</Text>
                </View>

              </View>

            </View>    */}
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  sectionTitleText:{
    color: '#5c5c5c',
    fontWeight: 'bold'
  },

  button:{
    position:"absolute",
    top: 20,
  },

  addPostInformationContainer:{

  },

  publicAlsoContainer:{
    borderBottomWidth: 1,
    borderBottomColor: '#5c5c5c',
    paddingVertical: 15
  },

  advancedContainer:{
    paddingVertical: 15,
    paddingHorizontal: 25
  },
  
  account:{
    width:50,
    height:50,
    borderRadius: 200
  },

  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#5c5c5c',
    alignItems:'center',
    paddingVertical: 15,
    paddingHorizontal: 25
  },

  rowSeconday:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: 25
  },

  imageReview:{
    width: 60,
    height: 60
  },

  colorWhite:{
    color:'#fff',
    fontSize: 17
  },

  item:{
    height:30,
    minWidth: 150,
    backgroundColor: '#404040',
    borderRadius: 2,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  musicItem:{
    fontWeight: 'bold',
    color: '#787878'

  }

})

