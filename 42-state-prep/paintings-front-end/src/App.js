import React from 'react';
import paintings from "./paintings"
import NavBar from "./NavBar"
import PaintingsContainer from "./PaintingsContainer"
import PaintingForm from "./PaintingForm"
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     paintings: paintings
  //   }
  //   console.log("I am in Constructor!! :D")
  // }

  state = {
    isForm: false,
    paintings : paintings
  }

  setFormValue = () => {
    this.setState({
      isForm: !this.state.isForm //should set to true
    })
  }

  addPainting = (e) => {
    e.preventDefault()
    console.log("I am in add Painting!!!")
    console.log(e.target)

    let newObj = {
      title: e.target.title.value,
      image: e.target.imageUrl.value,
      artist: {
        name: e.target.artistName.value
      }
    }

    let newArr = [...this.state.paintings, newObj]

    this.setState({
      paintings: newArr,
      isForm: !this.state.isForm
    })
  }

  render(){
    console.log("I am render HII!!!")
    return (
      <div >
        <NavBar color="green" message="Welcome to our Paintings"/>
        {
          this.state.isForm 
          ?
          <PaintingForm add={this.addPainting} />
          :
          <div>
            <PaintingsContainer paintings={this.state.paintings}/>
            <button onClick={this.setFormValue}>Create a new Painting </button>
          </div>
        }
      </div>
    );
  }
}

export default App;