import React, {useRef, useEffect} from 'react';
import Reel from './components/Reels/Index'
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from "react-native";

const innerWidth = Dimensions.get('window').width;
const innerHeight = Dimensions.get('window').height;

function Reels(){

  const stories = [
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
      sliderWidth={innerWidth}
      itemWidth={innerWidth}
      sliderHeight={innerHeight}
      itemHeight={innerHeight}
    />
  )

}


export default Reels