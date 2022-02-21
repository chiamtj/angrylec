import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, {useEffect, useState} from 'react';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';


export default function App() {

  return (
  
    <View style={styles.container}>
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
});
