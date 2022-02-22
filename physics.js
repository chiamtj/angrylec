import Matter from "matter-js";

import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Physics = (entities, {touches, time, dispatch}) => {
    let engine = entities.physics.engine
    Matter.Engine.update(engine, time.delta)

    Matter.Events.on(engine, 'collisionStart', (event) => {
        let pairs = event.pairs
        for (const pair of pairs) {
          if (pair.bodyA.label === 'Stone' && pair.bodyB.label === 'Ball') {
            console.log("target hit");
          }
        }
      })
    
    return entities;
}

export default Physics;