import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      displayedPets: [],
      filters: {
        type: 'all'
      }
    }
  }

  componentDidMount(){
    fetch('/api/pets')
      .then(res => res.json())
      .then(json => {
        this.setState({
          pets: json,
          displayedPets: json
        })
      })
  }

  fetchPets = () => {
    // debugger
    // console.log("Fetch Pets")
    // if(this.state.filters.type === "all"){
    //   fetch('/api/pets')
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       pets: json
    //     })
    //   })
    // } else {
      // debugger
      // fetch('/api/pets?type=' + this.state.filters.type)
      // .then(res => res.json())
      // .then(json => {
      //   this.setState({
      //     pets: json
      //   })
      // })
    // }
    let displayedPets = [ ]
    this.state.filters.type === "all" ?
      displayedPets = this.state.pets
      :
      displayedPets = this.state.pets.filter(pet => pet.type  === this.state.filters.type)
    this.setState({
      displayedPets
    })
  }

  adoptPet = (id) => {
    console.log("ID", id)
    let pets = this.state.pets.map(pet => {
      if(pet.id === id){
        pet.isAdopted = true
      }
      return pet
    })
    
    this.setState({
      pets
    })
  }

  handleFilterChange = (e) => {
    console.log(e.target.value)
    let newFilter = {
      type: e.target.value
    }
    this.setState({
      filters: newFilter
    })
  }

  // handleFindPets = () => {
  //   console.log("FIND PETS")
  // }

  render() {
    // this.fetchPets()
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters handleFilterChange={this.handleFilterChange} handleFindPets={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.displayedPets} adoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
