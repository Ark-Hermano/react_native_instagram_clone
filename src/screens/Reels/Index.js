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


export default Reels