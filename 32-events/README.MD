# Browser Events

## SWBATS
### First Class Functions
- [] Implement Global and Function Scope
- [] Define a callback
- [] Pass functions as arguments to other functions 
- [] Implement forEach, map, filter and reduce in Js

### Events
- [] Define JavaScript Events
- [] Identify common event listeners 
- [] Attach event listeners to Dom Elements 
- [] Implement callback functions 
- [] Pass callbacks to Event listeners
- [] Identify important attributes on the event object 
- [] Make changes in the dom with event listeners 
- [] Prevent forms from refreshing on submit

### Common events
- click
- scroll
- keep press
- submit
- hover
- mouse over
- dbclick
- wheel

### Building Events
1. Grab the Dom element that triggers the event. 
```
let item = document.querySelector('#item')
```
2. Determine the event being used
```
    item.addEventListener('click', )
```
3. Tell Js what function runs when the event triggers

```
function callback(){
    console.log('hi')
}

item.addEventListener('click', callback)

```


### Activity (15 minutes)
code out the map, filter, forEach in JavaScript using the following array.
Do all of them in your breakout rooms but be prepared to present the assigned method:
```
let array [1,2,3,4,5]
Group1: map - return an in which every number is squared
Group2: filter - return an array with only odd numbers
Group3: forEach - console.log each number 
```