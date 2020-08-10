## Flatiron Stock Exchange

Welcome to the Flatiron Stock Exchange!
Today, you are a broker who is trying to better organize the stocks available on the Flatiron Stock Market.
The database of stocks can be found in a JSON-server, so before you start your React server, make sure to start your JSON-server on `http://localhost:3000/stocks`.

```
TO INSTALL: npm install -g json-server
TO START: json-server --watch db.json
```

After the stocks are fetched, your job is to:
* [x] Render all the stocks onto the page. The styling of how a Stock should look like is already in the `Stock.js` component.
* [x] allow a user to buy a stock by clicking on it and when it is bought, it should be added to `My Portfolio`.
* [x] allow a user to sell a stock in their `Portfolio` by clicking on the stock and it should be removed from their `Portfolio`.
* [x] allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.
* [x] allow a user to filter stocks based on the type of the stock.

Best of luck!

```
let arr = [1,2,3,4]
// let arr2 = arr
let arr2 = [...arr, 5]

// arr2.push(5)
console.log(arr)
console.log(arr2)

let hacker = {name:'hal'}
let hacker2 = {...hacker,pet:'river'}

// hacker2.pet = {pet:"beans"}
console.log(hacker)
console.log(hacker2)
```