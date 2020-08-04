import React from "react"
import PaintingCard from "./PaintingCard"

function PaintingsContainer(props){
    return(
        props.paintings.map( (painting, index) => {
            return <PaintingCard painting={painting} key={index}/>
        })
    )
}

export default PaintingsContainer;