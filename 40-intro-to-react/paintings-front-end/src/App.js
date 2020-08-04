import React, {Component} from 'react';
import paintings from "./paintings"
import NavBar from "./NavBar"
import 'semantic-ui-css/semantic.min.css'
import PaintingContainer from "./PaintingContainer"
import PaintingForm from "./PaintingForm"

class App extends Component {
  // constructor(){
  //   console.log("I am in constructor!!")
  //   super()
  //   this.state = {
  //     paintings: paintings
  //   }
  // }

  state = {
    clicked: false,
    paintings: paintings
  }

  clickedTriggered = () => {
    console.log("Button has been clicked!!")
  }

  addPainting = (e) => {
    e.preventDefault()
    console.log(e.target)
    let newPainting = {
      title: e.target.title.value,
      artist: {
        name: e.target.author.value
      },
      image: e.target.image.value
    }

    let newArr = [...this.state.paintings, newPainting]

    this.setState({
      paintings: newArr
    })

    // console.log(newPainting)
  }

  // console.log(paintings)
  render(){
    console.log("I have rendered!!")
    return (
      <div >
        <button onClick={this.clickedTriggered}>Button Clicked!!</button>
        <NavBar color="green" message="Welcome to our Paintings"/>
        <PaintingForm addPainting={this.addPainting}/>
        <PaintingContainer paintings={this.state.paintings}/>
      </div>
    );
  }
}

export default App;