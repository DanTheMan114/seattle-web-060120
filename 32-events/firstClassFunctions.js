//Johns scope blog
//https://medium.com/@souzajohnlee/transition-baf9cfc03c0e
//global scope

//function scope
// const fish = 'Salmon'
// console.log(`lets go fishing for ${fish}`)
// function goFish(){
//   let fish = 'Tuna'
//   console.log(`lets go fishing for ${fish}`)
//   catchFish(fish)

// }

// function catchFish(caughtFish){
//   console.log(`I caught ${caughtFish}`)
// }


// goFish()

//callbacks

const stayHome = function(){
  console.log('lets stay in and watch netflix')
}

const makeCake = function(){
  console.log('lets make a cake')
}

const yardWork = function(){
  console.log('lets do yard work')
}

const weekendPlans = function(callback){
  //console.log(callback)
  callback()
}

weekendPlans(yardWork)


//map, filter, reduce, forEach
let cats = ['Rose', 'Tod', 'Bubbles', 'Tim', 'Tom']

cats.forEach(function(item){
  console.log(item)
})

let mapCats = cats.map(function(item){
  return item.toUpperCase()
})

// let mapCatsArrow = cats.map(item => item.toLowerCase())


let filterCat = cats.filter(function(cat){
  return cat[0] === 'T'
})

console.log(filterCat)

let num = [1,2,3,4]

let reducedArr = num.reduce(function(item1, item2){
  return item1+item2
},0)

console.log(reducedArr)


