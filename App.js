import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React, {useEffect, useState} from 'react';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';
import zoom from './images/zoom.jpg'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default function App() {

  return (
    <View style={styles.container}>
      <Image source={zoom} style={styles.backgroundImage} resizeMode="cover"/>
      <GameEngine
        systems={[Physics]}
        entities = {entities()}
        running = {true}>
          
        <StatusBar style="auto" hidden={true}/>
      </GameEngine>
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left:0,
    bottom: 0,
    right: 0,
    width: windowWidth,
    height: windowHeight,
  }
});
