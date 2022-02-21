import Matter from "matter-js"
import React  from "react"
import { View, Image} from 'react-native'
import tennisBall from '../images/tennis-ball.png'

const Ball = props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody /2
    const yBody = props.body.position.y - heightBody /2

    const color = props.color

    return (

        // <View style = {{
        //     // borderWidth: 1,
        //     // borderColor: color,
        //     backgroundColor: color,
        //     borderStyle: 'solid',
        //     position: 'absolute',
        //     left: xBody,
        //     top: yBody,
        //     width: widthBody,
        //     height: heightBody
        // }}/>
        <Image
            style={{
                position: 'absolute',
                left: xBody,
                top: yBody,
                width: widthBody,
                height: heightBody,

            }}
            source = {tennisBall}
        />
    )
}

export default (world, label, color, pos, radius) => {
    const initialBall = Matter.Bodies.circle(pos.x, pos.y, radius,  {   
        label,
        density: 0.005,
        frictionAir: 0.3,
    }
    );
    
    Matter.World.add(world, initialBall)

    return {
        body: initialBall,
        color,
        pos,
        renderer: <Ball/>
    }
}