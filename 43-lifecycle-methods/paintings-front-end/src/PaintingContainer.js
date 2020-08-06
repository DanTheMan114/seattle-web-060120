import React from "react"
import PaintingCard from "./PaintingCard"

function PaintingContainer(props){
    return (
        <div>
            {
            props.paintings.map( (painting)  => {
                 return <PaintingCard 
                            title={painting.title} 
                            name={painting.name} 
                            image={painting.image}
                            key={painting.painting_id}
                         />
            }       
        )
        }
        </div>
    )
}

export default PaintingContainer;