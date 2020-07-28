
///
//destructuring
const pirateShip = {
    captain: 'Jean-luc Picard',
    firstMate: 'William Riker',
    cook: 'Deanna Troi',
    navigator: 'Geordi La Forge'
}

const {captain} = pirateShip
console.log(captain)

// class Ship{
//     constructor(pirateShip){
//         this.captain = pirateShip.captain,
//         this.firstMate = pirateShip.firstMate,
//         this.cook = pirateShip.cook
//         this.navigator = pirateShip.navigator
//     }
  
// }


class Ship {
    constructor({captain, firstMate, cook, navigator}){
        this.captain = captain,
        this.firstMate = firstMate,
        this.cook = cook
        this.navigator = navigator
    }
}
console.log(new Ship(pirateShip))

let form = document.querySelector('form')
console.log(form)
form.addEventListener('submit',(e)=>{
    e.preventDefault()
   let {name, catchphrase, imgUrl} = e.target
    console.log(name.value)
    console.log(catchphrase.value)
    console.log(imgUrl.value)
})

let arr = ['rose','bubbles','tom']
let [cat1, cat2, cat3] = arr

console.log(cat1)


const title = 'cracking the coding interview'
const author = 'Gayle Laakmann McDowell'

let book = {title, author}
console.log(book)

const game = {
    name:'night in the woods',
    genera: 'horror'
}





//spread 

// const game2 = game
// game2.genera = 'indie'

// const game2 = Object.assign({}, game)


const game2 = {...game, genera:'spookie', price:'$25'}
// game2.genera = 'indie'
console.log(game)
console.log(game2)

// const cards = [1,2,3,4]
// const card2 = cards

const cards = [1,2,3,4]
const card2 = [...cards]

card2.push(10)
console.log(cards)
console.log(card2)


//examples using what we learned

class CrewMember{
    constructor(name, role, ship){
        this.name = name,
        this.role = role,
        this.ship = ship
    }
}

const picard = new CrewMember('Jean-luc Picard', 'captain', 'next-gen-enterprise')
console.log(picard)
const bones = new CrewMember('Leonard McCoy', 'Doctor', 'enterprise')

const intro = function({name, role}){
    return `Hi, I'm ${name}, and I'm a ${role}`
}
console.log(intro(picard))

const addPay = function(crew){
    return {...crew, pay:70000}
}
console.log(addPay(bones))

const awayMission = (planet, crew, transportation) => {
    let {role, name} = crew
    return `The away mission will be on ${planet}, with ${role} ${name}, we will take the ${transportation}`
}

const shuttleMission = (planet,crew) => {
    let crewWithEquipment = {...crew, equipment:'phasers'}
    return awayMission(planet,crewWithEquipment,'Shuttle')
}

console.log(shuttleMission('Saturn', picard))

//remote survey
// /https://docs.google.com/forms/d/e/1FAIpQLScXnKDoUj7CzBLc3KNFpP8tBoLB_0T6o3yLOOLk1fKCApnqQQ/viewform