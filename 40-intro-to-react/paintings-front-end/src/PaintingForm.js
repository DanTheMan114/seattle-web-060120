import React from "react"

function PaintingForm(props){
    function test(){
        console.log("Hello")
    }
    return(
        <div>
            <form onSubmit={(e) => props.addPainting(e)}>
                <input name="title" type="text" placeholder="please enter a title"/>
                <input name="author" type="text" placeholder="please enter a author name"/>
                <input name="image" type="text" placeholder="please enter a image url"/>
                <input type="submit"/>
            </form>
            {test()}
        </div>
    )
}

export default PaintingForm;