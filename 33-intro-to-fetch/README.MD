# Async JS and Fetch

## SWBATS

### Arrow Functions () => 
- [] Implement arrow functions 

### Fetch
- [] Understand the problem with asynchronous code
- [] Use `fetch` to communicate with APIs
- [] Use `then` to defer function calls until promises resolve
- [] Manipulate the DOM based off asynchronous data
- [] use `catch` to handle errors 

### JSON-SERVER
[JSON server](https://github.com/typicode/json-server)

Install JSON server
```
npm install -g json-server
```

Create a db.json file with some data

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```
start JSON server

```
json-server --watch db.json
```

### Fetch Methods 
```
  fetch(`api_url_here`)
  .then(res => res.json())
  .then(json => dostuff(json))
```

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