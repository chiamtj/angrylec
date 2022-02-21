import Matter from "matter-js"
import React from "react"
import { View, Image } from 'react-native'
import horiwood from '../images/horiwood.png'

const Roof = props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody /2
    const yBody = props.body.position.y - heightBody /2

    const color = props.color

    return (

        <Image style = {{
            // borderWidth: 1,
            // borderColor: color,
            //backgroundColor: color,
            //borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
            }}
            source = {horiwood}
        />
    )
}

export default (world, label, color, pos, size) => {
    const initialRoof = Matter.Bodies.rectangle(
      pos.x,
      pos.y,
      size.width,
      size.height,
      {
        label,
        isStatic: true,
        density: 0.01,
        frictionAir: 0.05,
        restitution: 0.3,
        friction: 0.01,
        }
    )
    Matter.World.add(world, initialRoof)

    return {
        body: initialRoof,
        color,
        pos,
        renderer: <Roof/>
    }
}
