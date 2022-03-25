import React, {useRef, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';


import Reel from './components/Reels/Index'

import Carousel from 'react-native-snap-carousel';


function Reels(){

  const stories = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]

  const carousel = useRef(null)
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect(() =>{

    video.current?.presentFullscreenPlayer()

  },[])


  function renderItem({item, index, carousel}){

    return(
      <Reel/>
    )
  }

  return (

    <Carousel
      vertical
      ref={(c) => {carousel.current = c }}
      data={stories}
      renderItem={({item, index}) => {
          if(carousel !== undefined){
          
            return(
                renderItem({item, index, carousel, stories})
            )
          } 
      }} 
      sliderWidth={window.innerWidth}
      itemWidth={window.innerWidth}
      sliderHeight={window.innerHeight}
      itemHeight={window.innerHeight}
    />
  )

}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    height: window.innerHeight,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 4,
  },
  container:{
    top: 0,
    zIndex: 1,
    height: window.innerHeight,
    justifyContent:'center'
  },
  video:{
    zIndex: 2,
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    top: 0,
    height: window.innerHeight - 60,
    alignItems: 'initial',
  },
  touchScreen:{
    top: 0,
    zIndex: 3,
    height: window.innerHeight,
  },
});

export default Reels