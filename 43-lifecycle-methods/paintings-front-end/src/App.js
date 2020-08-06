import React, {Component} from 'react';
import paintings from "./paintings"
import NavBar from "./NavBar"
import 'semantic-ui-css/semantic.min.css'
import PaintingContainer from "./PaintingContainer"
import PaintingForm from "./PaintingForm"

class App extends Component {
  constructor(){
    console.log("APP CONSTRUCTOR")
    super()
    this.state = {
      clicked: false,
      paintings: [],
      isLoading: true
    }
  }

  // state = {
  //   clicked: false,
  //   paintings: paintings
  // }

  clickedTriggered = () => {
    this.setState({
      clicked: true
    })
  }

  addPainting = (e) => {
    e.preventDefault()
    let newPainting = {
      title: e.target.title.value,
      name: e.target.author.value,
      image: e.target.image.value
    }

    let newArr = [...this.state.paintings, newPainting]

    this.setState({
      paintings: newArr,
      clicked: false
    })

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.paintings !== this.state.paintings) {
      console.log('Paintings have changed')
    }
  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED APP")
    fetch("http://localhost:3000/paintings")
    .then( resp => resp.json())
    .then(data => {
      this.setState({
        paintings: data,
        isLoading: false
      })
    })
  }

  render(){
    console.log("APP RENDER")
    return (
      <div >
        <button onClick={this.clickedTriggered}>Create Painting!!</button>
        <NavBar color="green" message="Welcome to our Paintings"/>
        {
          this.state.clicked
          ?
          <PaintingForm addPainting={this.addPainting}/>
          :
          this.state.isLoading ? <h2>Loading......</h2> : <PaintingContainer paintings={this.state.paintings}/>
        }
      </div>
    );
  }
}

export default App;