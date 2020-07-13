//DOM
//Read 

//const catchphrase = document.querySelector('#catchphrase')
const catchphrase = document.querySelector('p')
const li = document.querySelectorAll('li')
const selectedCat = document.querySelector('#selected_cat_info')
const selectedCatDiv = selectedCat.querySelectorAll('div')
const getId = document.getElementById('inner_cat_info')
const getContainer = document.getElementsByClassName('container')
const allDivs = document.getElementsByTagName('div')

console.log(catchphrase.textContent)
console.log(catchphrase.innerText)
console.log(selectedCat.innerHTML)
//Update
catchphrase.textContent = 'Party time!!!'
catchphrase.classList.add('blue')
catchphrase.classList.remove('blue')
catchphrase.className = 'green'

//Delete
catchphrase.remove()
//Create 

const guestList = document.querySelector('#guest_list')
const guestUL = guestList.querySelector('ul')

// let benLi = document.createElement('li')
// benLi.textContent = 'Ben'
// benLi.className = 'guest'

// guestUL.appendChild(benLi)

let guestArr = ['Ben', 'Bubbles', 'Mittens', 'Laura']

function buildGuestList(){
    guestArr.forEach(item => {
        let newLi = document.createElement('li')
        newLi.textContent = item
        newLi.className = 'guest'
        guestUL.appendChild(newLi)
    })
}

buildGuestList()
