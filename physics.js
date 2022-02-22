import Matter from "matter-js";

import { Dimensions } from 'react-native'

const Physics = (entities, {touches, time, dispatch}) => {
    let engine = entities.physics.engine
    Matter.Engine.update(engine, time.delta)
    
    touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
        Matter.Body.setVelocity(entities.Bird.body, {
          x: 8,
          y: -8,
        });
    //   Matter.Body.applyForce(
    //       entities.Bird.body, , 1)
    
    });
    return entities;
}

export default Physics;