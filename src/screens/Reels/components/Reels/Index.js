import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import example from '../../../assets/example.mp4'
import { Video, AVPlaybackStatus } from 'expo-av';

const Index = () => {
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
                    //status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }
            >
            </TouchableOpacity>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})