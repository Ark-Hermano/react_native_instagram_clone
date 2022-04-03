import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, Image, ScrollView, SafeAreaView } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Host, Portal } from 'react-native-portalize';
import ImageBrowser from './ImageBrowserScreen';
import { Dimensions } from 'react-native';


export default function MainScreen({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
    const [done, setDone] = useState(false)
  const [photos, setPhotos] = useState([])
 
  const modalizeRef = React.createRef();
  
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {
    // const {params} = this.props.route;
    // if (params) {
    //   const {photos} = params;
    //   if (photos) this.setState({photos});
    //   delete params.photos;
    // }
  },[])

  function renderImage (item, i) {
    return (
      <Image
        style={{ height: 100, width: 100 }}
        source={{ uri: item.uri }}
        key={i}
      />
    )
  }


    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Button
          title="Open image browser"
          //onPress={() => { navigation.navigate('Gallery') }}
        />
        <ScrollView>
          {photos.map((item, i) => renderImage(item, i))}
        </ScrollView>

        <Portal>
          <Modalize 
            ref={modalizeRef}
            modalHeight={windowHeight * 1.0}  
            snapPoint={windowHeight * 1.0}  
          >
            <View style={{height:windowHeight * 0.4, width:windowWidth, backgroundColor:'#000', justifyContent:'center', alignItems:'center'}}>

              {/*/ <TouchableHighlight  
              //   onPress={() => { modalizeRef.current?.close();}} 
              //   style={{position:'absolute',top:20, left: windowWidth - 20}} 
              // >
              //   <Text>{photos.length}</Text>
              // </TouchableHighlight>*/}

              <Image resizeMode="contain" style={{height: windowHeight * 0.4}} source={photos[photos.length - 1]} />         


            </View>
            <ImageBrowser style={{height:windowHeight * 0.6}} setPhotos={setPhotos} setDone={setDone} />
          </Modalize>
        </Portal>
      </SafeAreaView>
    );
  }

