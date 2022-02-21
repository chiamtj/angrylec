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

        Wall1: Wall(world,'wall1','blue', {x: 30, y:220}, {height: 40, width: 10}),
        Wall2: Wall(world,'wall2','blue', {x: 90, y:220}, {height: 40, width: 10}),
        Wall3: Wall(world,'wall3','blue', {x: 120, y:220}, {height: 40, width: 10}),
        Wall4: Wall(world,'wall4','blue', {x: 180, y:220}, {height: 40, width: 10}),
        
        Ball1: Ball(world,'ball1', 'red', {x: 60, y:200}, 18),
        Ball2: Ball(world,'ball2', 'red', {x: 150, y:200}, 18),

        Roof1: Roof(world,'roof1','green', {x: 60, y:190}, {height: 10, width: 80}),    
        Roof2: Roof(world,'roof2','green', {x: 150, y:190}, {height: 10, width: 80}),    
        
        Ball3: Ball(world,'ball3', 'red', {x: 60, y:150}, 18),
        Ball4: Ball(world,'ball4', 'red', {x: 150, y:150}, 18),

    }
}