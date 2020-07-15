//Arrow functions

let foo = function(){
    console.log("foo")
}
// foo()

let boo = () => {
    console.log('boo')
}
// boo()

let woo = data => {
    console.log('woo', data)
}
// woo('rose')

let woo2 = (item, num) => {
    console.log('woo2', item, num)
}
// woo2('bubbles', 25)

let oneLine = coffee => coffee 
// console.log(oneLine('stumptown'))

let arr = [1,2,3,4]

let square = arr.map(num => num*num)
// console.log(square)
// let square = arr.map(function(num){
    // return num * num
//})
//Fetch

function sleep(time){
    const start = new Date()
    while(new Date() - start < time){}
}

// console.log('before')
// sleep(5000)
// console.log('after')

// fetches 
const fetchAll = () => {
    fetch('http://localhost:3000/cats')
    .then(res => res.json())
    .then(json => json.map(item => buildGuestItem(item) ))
}
fetchAll()

const fetchOneCat = (catId) => {
    console.log(catId)
    fetch(`http://localhost:3000/cats/${catId}`)
    .then(res => res.json())
    .then(json => selectedCat(json))
}

//Dom 

const buildGuestItem = (cat) =>{
    //make li
    let li = document.createElement('li')
    // put text in the li from the cats name
    li.innerText = cat.name
    li.addEventListener('click', (e)=> fetchOneCat(cat.id))
    //append the li to the dom
    let ul = document.querySelector('ul')
    ul.appendChild(li)
}

const selectedCat = (cat) => {
    //grab all of the selected_cat dom el
    let selectedCatContainer = document.getElementById('selected_cat_info')
    let h1 = selectedCatContainer.querySelector('h1')

    let p = selectedCatContainer.querySelector('p')
    let img = selectedCatContainer.querySelector('img')

    h1.innerText = cat.name
    p.innerText = cat.catchphrase
    img.src = cat.imgUrl

    //put the cats info in place of the current dom el content 
}

// function main = () => {
//     fetchAll()
//     fetchImg()
//     fetchAddress()
// }
// main()