import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
 import example from '../../../../../assets/example.mp4' 

import { Video, AVPlaybackStatus } from 'expo-av';

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
            height={window.innerHeight}
            usePoster={true}
            isLooping
            resizeMode="stretch"
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    
            <TouchableOpacity
                style={styles.touchScreen}
                title={status.isPlaying ? 'Pause' : 'Play'}
                onPressIn={() =>
                    video.current.pauseAsync()
                    //status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }
                onPressOut={() =>
                    video.current.playAsync()
                }
            >
            </TouchableOpacity>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
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
  