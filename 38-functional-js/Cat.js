const pirateShip = {
    captain: 'Jean-luc Picard',
    firstMate: 'William Riker',
    cook: 'Deanna Troi',
    navigator: 'Geordi La Forge'
}

const {captain} = pirateShip
const {cook} = pirateShip
const {firstMate} = pirateShip
const {deckHand} = pirateShip
// console.log(captain)
// console.log(cook, firstMate,deckHand)

// class Ship{
//     constructor(pirateShip){
//         this.captain = pirateShip.captain,
//         this.firstMate = pirateShip.firstMate,
//         this.cook = pirateShip.cook,
//         this.navigator = pirateShip.navigator
//     }
// }

class Ship{
    constructor({captain, firstMate, cook, navigator}){
        this.captain = captain,
        this.firstMate = firstMate,
        this.cook = cook,
        this.navigator = navigator
    }
}

// console.log(new Ship(pirateShip))

let form = document.querySelector('form')
form.addEventListener('submit',(e) => {
    e.preventDefault()
    let {name, catchphrase, imgUrl} = e.target
    console.log(name.value)
    console.log(catchphrase.value)
    console.log(imgUrl.value)
})

let arr = ['rose', 'bubbles', 'tom']
let [cat3, cat2, cat1] = arr
console.log(cat1, cat2, cat3)

const title = 'cracking the coding interview'
const author = 'Gayle Lakman McDowell'

let book = {title, author}
console.log(book)


const game = {
    name:'night in the woods',
    genera: 'horror'
}
// let game2 = game

// let game2 = Object.assign({}, game)

let game2 = {...game, genera:'spooky', price:'$35'}

// game2.genera = 'indie'

console.log('game:', game)
console.log('game2:', game2)

let num = [1,2,3,4]

let num2 = [...num]
num2.push(10)
console.log(num)
console.log(num2)

class CrewMember{
    constructor(name, role, ship){
        this.name = name,
        this.role = role,
        this.ship = ship
    }
}

const picard = new CrewMember('Jean-luc Picard', 'Captain', 'Next-gen-enterprise')
const bones = new CrewMember('Leonard McCoy', 'Doctor', 'Enterprise')

const intro = ({name, role}) => {
    return `Hi, I'm ${name}, and I'm a ${role}`
}

console.log(intro(bones))

const addPay = (crew, pay) => {
    return {...crew, pay:pay}
}
console.log(addPay(picard,7500))

const awayMission = (planet, crew, transportation) => {
    let {role, name} = crew
    return `The away mission will be on ${planet}, with ${role} ${name}, we will get there with the ${transportation} `
}

const shuttleMission = (planet, crew) => {
    let crewWithEquipment = {...crew, equipment:'phasers'}
    return awayMission(planet, crewWithEquipment, 'Shuttle')
}

console.log(shuttleMission('Saturn', picard))
