import Matter from 'matter-js';
import Wall from "../components/Wall";
import * as ScreenOrientation from 'expo-screen-orientation';
import Floor from '../components/Floor';
import Ball from '../components/Ball';
import Roof from '../components/Roof';

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false})

    let world = engine.world

    world.gravity.y = 0.4;

    return {
        physics: {engine, world},

        Floor: Floor(world,'floor','black', {x: 100, y:250}, {height: 10, width: 200}),
        Wall1: Wall(world,'wall1','blue', {x: 50, y:200}, {height: 40, width: 10}),
        Wall2: Wall(world,'wall2','blue', {x: 100, y:200}, {height: 40, width: 10}),
        Wall3: Wall(world,'wall2','blue', {x: 160, y:200}, {height: 40, width: 10}),
        
        Ball1: Ball(world,'ball1', 'red', {x: 80, y:150}, 18),
        Ball2: Ball(world,'ball2', 'red', {x: 130, y:150}, 18),

        Roof1: Roof(world,'roof1','green', {x: 100, y:100}, {height: 10, width: 150}),    
        
        Ball3: Ball(world,'ball3', 'red', {x: 80, y:70}, 18),
        Ball4: Ball(world,'ball4', 'red', {x: 130, y:70}, 18),

    }
}