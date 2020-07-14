// Events
let catArr = ['Tod', 'Rose', 'Mittens']
let button = document.querySelector('button')
const buildLi = function(cat){
    let li = document.createElement('li')
    li.innerText = cat
    guestUL.appendChild(li)
}

console.log(button)
const handleClick = function(e){
 
    console.log('hi')
}
button.addEventListener('click',handleClick)
// /button.addEventListener('click',function(e){
//    console.log('hi')
//})

let form = document.querySelector('form')
const handleSubmit = function(e){
    e.preventDefault()
    console.log('submit')
    console.log(e.target.name.value)
    buildLi(e.target.name.value)
}
form.addEventListener('submit', handleSubmit)
// handleSubmit(e)
// function addEventListener(type,callback){
    // let e = {...}
    // if(type === click){
    // callback(e)
  //  }
//}

let guestArr = ['Tod', 'Rose', 'Mittens']

 let guestUL = document.querySelector('ul')



 guestArr.forEach(function(cat){
     buildLi(cat)
    })