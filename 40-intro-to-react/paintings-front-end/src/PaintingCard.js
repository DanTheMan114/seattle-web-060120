import React from "react"

function PaintingCard(props){
    return (
        // <h1> Painting Container </h1>
        <div>
            <h1> {props.title}</h1>
            <img src={props.image} />
            <h4> {props.name}</h4>
        </div>
    )
}

export default PaintingCard