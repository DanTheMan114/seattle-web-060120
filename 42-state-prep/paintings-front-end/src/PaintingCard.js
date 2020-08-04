import React from "react"

function PaintingCard(props){
    return(
        <div>
            <h1> {props.painting.title}</h1>
            <img src={props.painting.image}/>
            <h4> {props.painting.artist.name}</h4>
        </div>
    )
}

export default PaintingCard;