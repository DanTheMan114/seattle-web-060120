//Debugging 
//Console.log
// console.log("Never gonna give you up")
// console.log("Never gonna let you down")
// console.log("Never gonna run around and desert you")
//debugger tool

// debugger
// console.log("Never gonna make you cry")
// console.log("Never gonna say goodbye")
// console.log("Never gonna tell a lie and hurt you")
// let singer = "rick"
// debugger

// Types

let arr = [1,2,3]

//def numberPush arr, num
// arr << num
//end

function numberPush(arr,num){
  arr.push(num)
  return arr
}

console.log(numberPush(arr,4))

function sayHi(){
  console.log('hi')
}
sayHi()

let alsoArr = arr
alsoArr.push(10)
console.log(arr)

//Hoisting 

myCat()
function myCat(){
  let cat = "rose"
  console.log(`my cats is name ${cat}`)
}




const fish = "fred"


const myDog = function(){
  console.log('woof')
}
myDog()

myDog = 'ben'