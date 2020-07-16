document.addEventListener('DOMContentLoaded', () => {
  //call fetch all pokemon
  //add addEventListener to add pokemon form
    const pokemonForm = document.querySelector('#pokemon-post-form')
    pokemonForm.addEventListener('submit', (e) => postNewPokemon(e))
    fetchAllPokemon()
  })
 
//GET, POST, PATCH, PUT, DELETE
const fetchAllPokemon = () =>{
  fetch(`http://localhost:3000/pokemon`)
  .then(res => res.json())
  .then(json => json.forEach(item => renderPokemonCard(item)))  
}

const fetchOne = (id) => {
  console.log(id.target)
  fetch(`http://localhost:3000/pokemon/${id}`)
  .then(res => res.json())
  .then(json => editPokemon(json))
  
}

const postNewPokemon = (e) => {
  e.preventDefault()
  let data = {
        height: 0,
        weight: 0,
        name: e.target[0].value,
        abilities: [],
        moves: [],
        stats: [],
        types: [],
        sprites: {
          front: e.target[1].value,
          back:  e.target[1].value
        }
  }

  fetch('http://localhost:3000/pokemon',{
    method:'POST',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(json => renderPokemonCard(json))

  //.then(function(res){
    // return res.json()
  //})


  
}

const patchPokemon = (e,pokemon) =>{
// optimistic 
  let currentOnDomPokemon = document.getElementById(`${pokemon.id}`)
    let h2 = currentOnDomPokemon.querySelector('h2')
    let img = currentOnDomPokemon.querySelector('img')
    h2.textContent = e.target[0].value
    img.src = e.target[1].value

  let data = {
    name: e.target[0].value,
    sprites: {
      front: e.target[1].value,
      back:  e.target[1].value
    }
}
  fetch(`http://localhost:3000/pokemon/${pokemon.id}`,{
    method:'PATCH',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(json => {
// pessimistic 
    // let currentOnDomPokemon = document.getElementById(json.id)
    // let h2 = currentOnDomPokemon.querySelector('h2')
    // let img = currentOnDomPokemon.querySelector('img')
    // h2.textContent = json.name
    // img.src = json.sprites.front
  })

}

const deletePokemon = (id) => {
  fetch(`http://localhost:3000/pokemon/${id}`,{
    method:'DELETE'
  })
  .then(res => res.json())
  .then(json=>{
    let currentOnDomPokemon = document.getElementById(id)
    currentOnDomPokemon.innerHTML = ''

    const pokemonForm = document.querySelector('#pokemon-post-form')
    const pokemonName = document.getElementById('name-input')
    const pokemonSprite = document.getElementById('sprite-input')
    pokemonName.value = ''
    pokemonSprite.value = ''
    let btn = pokemonForm.querySelector('button')
    btn.remove()
  })
}


//Dom manipulation 

const editPokemon = (pokemon) => {
  const pokemonForm = document.querySelector('#pokemon-post-form')
  const pokemonName = document.getElementById('name-input')
  const pokemonSprite = document.getElementById('sprite-input')
  pokemonName.value = pokemon.name
  pokemonSprite.value = pokemon.sprites.front
  pokemonForm.removeEventListener('submit', (e) => postNewPokemon(e))
  pokemonForm.addEventListener('submit', (e)=> patchPokemon(e,pokemon))
  let p = pokemonForm.querySelector('p')
  p.textContent = 'Edit Pokemon'

  //add delete button 
  const btn = document.createElement('button')
  btn.textContent = 'DELETE'
  btn.addEventListener('click', (e) => deletePokemon(pokemon.id))
  pokemonForm.appendChild(btn)
}

const renderPokemonCard = (pokemon) => {
  const pokemonContainer = document.querySelector('#pokemon-container')
  let card = document.createElement('div')
  card.innerHTML = `
    <div class='card' id='${pokemon.id}'>
    <h2>${pokemon.name}</h2>
    <img src='${pokemon.sprites.front}'/>
    </div>
  `
  card.addEventListener('click',(e)=> fetchOne(pokemon.id))
  pokemonContainer.appendChild(card)

}