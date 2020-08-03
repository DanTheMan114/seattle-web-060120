console.log("Hello from our  JS file :D!!")
// 1. Create out Javascript Element
// 2. Set our text
// Attached it to the DOM
let p = document.createElement("p")
p.innerText = "What is life???"
let div = document.getElementById("main")
div.appendChild(p)

{
    /* <div class="ui inverted red menu">
          <a class='item'>
            <h2 class="ui header">
              <i class="bug icon"></i>
              <div class="content">
                bugger
              </div>
            </h2>
          </a>
        </div> */
}

const Navbar = () => {
    return (
        React.createElement("div", {className= "ui inverted red menu"}, 
            React.createElement("a", {className= "item"} )
        )
    )
}

// 1. Create out React Component
// 2. Set our text
// 3. Attached it to the DOM
const Message = () => {
    //null stand for props currently we are not passing anything into this.
    return React.createElement("p", null, "What is Life from out React Component!!!")
}
ReactDOM.render(Message(), document.getElementById("main"))

