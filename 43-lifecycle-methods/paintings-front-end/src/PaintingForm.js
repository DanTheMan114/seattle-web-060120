import React from "react"

class PaintingForm extends React.Component {
    constructor(){
        console.log("PAINTING CONSTRUCTOR")
        super()
        this.state = {
            clicked: false
        }
    }
    componentDidMount(){
        console.log("COMPONENT MOUNTED PAINTING")
    }

    componentWillUnmount(){
        console.log("I have died ...PaintingForm")
    }

    render(){
        console.log("PAINTING RENDER")
        return(
            <div>
                <form onSubmit={(e) => this.props.addPainting(e)}>
                    <input name="title" type="text" placeholder="please enter a title"/>
                    <input name="author" type="text" placeholder="please enter a author name"/>
                    <input name="image" type="text" placeholder="please enter a image url"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}


export default PaintingForm;