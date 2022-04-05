import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, {useState} from 'react'
 import example from '../../../../../assets/example.mp4' 

import { Video } from 'expo-av';

const innerHeight = Dimensions.get('window').height;

const Index = () => {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
        <Video
            isMuted
            ref={video}
            shouldPlay
            style={styles.video}
            source={example}
            useNativeControls={false}
            height={innerHeight}
            usePoster={true}
            isLooping
            resizeMode="stretch"
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    
            <TouchableOpacity
                style={styles.touchScreen}
                title={status.isPlaying ? 'Pause' : 'Play'}
                onPressIn={() => {
                    video.current.pauseAsync()
                }}
                onPressOut={() => {
                    video.current.playAsync()
                }}
            >
            </TouchableOpacity>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      height: innerHeight,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 4,
    },
    container:{
      top: 0,
      zIndex: 1,
      height: innerHeight,
      justifyContent:'center'
    },
    video:{
      zIndex: 2,
      flexDirection: 'row',
      position: 'absolute',
      width: '100%',
      top: 0,
      height: innerHeight - 60,
      alignItems: 'flex-start',
    },
    touchScreen:{
      top: 0,
      zIndex: 3,
      height: innerHeight,
    },
  });
  