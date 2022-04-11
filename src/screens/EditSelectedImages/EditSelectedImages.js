import React, {useState, useEffect, useRef } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { AntDesign } from '@expo/vector-icons'; 
import { useSelector } from "react-redux";

export default function SelectedImages() {
  
  let photos = useSelector((state) => state.users);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [tabIndex, setTabIndex] = useState(1)
  const [selectedId, setSelectedId] = useState(null);
  const carousel = useRef(null)

  let editFuncs = [
    {title: 'Ajuste'},
    {title: 'Brilho'},
    {title: 'Contraste'},
    {title: 'Estrutura'},
  ]

  let filterFuncs = [
    {
      title: 'Normal',
    },
    {
      title: 'Maven',
    },
    {
      title: 'Mayfair',
    },
    {
      title: 'Moon',
    },
    {
      title: 'Nashville',
    },
    {
      title: 'Perpetua',
    },
    {
      title: 'Reyes',
    },
    {
      title: 'Rise',
    },
    {
      title: 'Slumber',
    },
  
  ];

  useEffect(() => {

  },[])

  
    const renderItem = ({index, carousel}) => {

        return (
          <View >
              <TouchableOpacity  
                style={styles.storieItemNext}   
                onPress={() => { 
                  carousel.current.snapToNext()
                }}> 
                  <AntDesign name="arrowright" size={24} color="#fff" />
             
              </TouchableOpacity>
  
              <Image resizeMode="contain" style={styles.image}  source={photos[index].source}/>

              <TouchableOpacity  
                style={styles.storieItemPrev}  
                onPress={() => { 
                  carousel.current.snapToPrev()
                }}> 
                  
                  <AntDesign name="arrowleft" size={24} color="#fff" />
                 
              </TouchableOpacity>
          </View>
        );
    }

    const Item = ({ item, onPress, index }) => (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text style={selectedId === index ? styles.adjustSelectedText : styles.adjustItemText}>{item.title}</Text>

        <View style={styles.filter}>
          <Image resizeMode="cover" style={styles.adjustImage}  source={require('./../../../assets/3.jpg')}/>
        </View>
      </TouchableOpacity>
    );

    const renderAdjust = ({ item, index }) => {
      const backgroundColor = "#5c5c5c";
      const color = '#5c5c5c';

      return (
        <Item
          item={item}
          index={index}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{ backgroundColor:backgroundColor }}
          textColor={{ color:color }}
        />
      );
    };



    return (
      <SafeAreaView style={{ flex: 1 }}>     
        <View style={{height:windowHeight, width:windowWidth, backgroundColor:'#000', justifyContent:'center', alignItems:'center'}}>
            <Carousel
              scrollEnabled={false}
              ref={(c) => {carousel.current = c }}
              data={photos}
              renderItem={({item, index}) => {
                  if(carousel !== undefined){
                  
                    return(
                        renderItem({item, index, carousel, photos})
                    )
                  } 
              }} 
              sliderWidth={windowWidth}
              itemWidth={windowWidth}
            />

            <View style={styles.bottomEdit}>
                <View>
                  {tabIndex === 2 ? (
                    <FlatList
                      data={filterFuncs}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{flexGrow: 1 , justifyContent: 'space-around'}}
                      renderItem={renderAdjust}
                      keyExtractor={(item) => item.id}
                      extraData={selectedId}
                      horizontal={true}
                      style={styles.adjustLists}
                    />
                  ):(
                    <FlatList
                      data={editFuncs}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{flexGrow: 1 , justifyContent: 'space-around'}}
                      renderItem={renderAdjust}
                      keyExtractor={(item) => item.id}
                      extraData={selectedId}
                      horizontal={true}
                      style={styles.adjustLists}
                    />
                  )}
                </View>

                <View style={styles.bottomEditButtons}>
                  <TouchableHighlight style={tabIndex === 2 ? styles.tabButtonSelected : styles.tabButton} onPress={() => {setTabIndex(2)}}>
                    <Text style={styles.tabButtonText}>Filtro</Text>
                  </TouchableHighlight>

                  <TouchableHighlight style={tabIndex === 1 ? styles.tabButtonSelected : styles.tabButton} onPress={() => {setTabIndex(1)}}>
                    <Text style={styles.tabButtonText}>Editar</Text>
                  </TouchableHighlight>  
                </View>
            </View>

        </View>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
    tabButton:{
      width: '50%',
      alignContent: 'center',
      justifyContent: 'center',
      borderBottomColor: '#404040',
      borderBottomWidth:2,
      padding: 9
    },

    tabButtonSelected:{
      width: '50%',
      alignContent: 'center',
      justifyContent: 'center',
      borderBottomColor: '#fff',
      borderBottomWidth:2
    },

    adjustImage:{
      height: 100,
      width: 100
    },

    tabButtonText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 18,
      fontWeight:'bold'
    },

    adjustLists:{
      padding: 5,
      paddingHorizontal: 10
    },

    bottomEditButtons:{
      flexDirection:'row'
    },

    storieItemNext:{
        backgroundColor:'transparent',
        position:'absolute',
        height: 20 ,
        justifyContent:'center',
         width: 20 ,
        top:Dimensions.get('window').height/3.25,  
        left:Dimensions.get('window').width - 40,
        zIndex: 9,
        elevation: 9,
    },

    image:{
        top:0, 
        height: Dimensions.get('window').height/1.6,
        width: Dimensions.get('window').width,
    },

    storieItemPrev:{
       backgroundColor:'transparent',
        position:'absolute',
        height: 20,
        justifyContent:'center',
        width: 20,
        top: Dimensions.get('window').height/3.25, 
        left:  15,
        zIndex: 9,
        elevation: 9,
    },

    bottomEdit:{
      backgroundColor:'#404040',
      height: (Dimensions.get('window').height - Dimensions.get('window').height/1.6),
      width: Dimensions.get('window').width,
      
    },

    adjustItemText:{
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#787878',
      marginBottom: 3
    },

    adjustSelectedText:{
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
      marginBottom: 3
    },

    item:{
        marginHorizontal:5
    },

    filter:{
      backgroundColor: 'rgba(127,187,227,.4)',
      
    }
})


