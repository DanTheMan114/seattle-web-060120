import React from "react"

function PaintingCard(props){
    return (
        <div>
            <h1> {props.title}</h1>
            <img src={props.image} />
            <h4> {props.name}</h4>
        </div>
    )
}

export default PaintingCard

PaintingCard.defaultProps = {
    title: "Water",
    image:"https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg",
    name: "Internet"
}