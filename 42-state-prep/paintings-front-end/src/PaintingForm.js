import React from "react"

function PaintingForm(props){
    console.log(props)
    return (
        <form onSubmit={(e) => props.add(e) }>
            <input name="title" type="text" placeholder="Please enter a title"/>
            <input name="imageUrl" type="text" placeholder="URL Please"/>
            <input name="artistName" type="text" placeholder="artist name please"/>
            <input type="submit" placeholder="artist name please"/>
        </form>
    )
}

export default PaintingForm;