import React from "react";
import {Card} from './style'



const CardRest = (props)=>{
    return(
        <div>
            <Card>
                <img src={props.logo} alt={props.name}/>
                <h1>{props.name}</h1>
                <p>{props.time}</p>
                <p>{props.description}</p>
            </Card>
        </div>
    )
}
export default CardRest