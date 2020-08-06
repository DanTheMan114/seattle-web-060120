import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  createPets = () => {
    return this.props.pets.map(pet => {
      return <Pet pet={pet} key={pet.id} adoptPet={this.props.adoptPet}/>
    })
  }
  render() {
    return <div className="ui cards">{this.createPets()}</div>
  }
}

export default PetBrowser
