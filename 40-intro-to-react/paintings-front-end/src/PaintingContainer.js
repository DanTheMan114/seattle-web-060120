import React from "react"
import PaintingCard from "./PaintingCard"

function PaintingContainer(props){
    console.log(props)
    return (
        <div>
            {/* <h1> Painting Container</h1> */}
            {
            props.paintings.map( (painting)  => {
                 return <PaintingCard 
                            title={painting.title} 
                            name={painting.artist.name} 
                            image={painting.image}
                         />
            }       
        )
        }
        </div>
    )
}

export default PaintingContainer;