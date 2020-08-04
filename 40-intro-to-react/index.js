console.log("Hello from our  JS file :D!!")
// 1. Create out Javascript Element
// 2. Set our text
// Attached it to the DOM
let p = document.createElement("p")
p.innerText = "What is life???"
let div = document.getElementById("main")
div.appendChild(p)

// Original source we want to recreate:
{
    /* <div class="ui inverted red menu">
          <a class='item'>
            <h2 class="ui header">
              <i class="bug icon">
                <div class="content">
                    bugger
                </div>
              </i>
            </h2>
          </a>
        </div> */
}

const Navbar = () => {
    return (
        React.createElement("div", { className: "ui inverted red menu" },
            React.createElement("a", { className: 'item' },
                React.createElement("h2", { className: "ui header" },
                    React.createElement("i", { className: "bug icon" },
                        React.createElement("div", { className: "content" }, "Bugger")
                    )
                )
            )
        )
    )
}

const NavbarJSX = (props) => { 
    console.log("Message in NavbarJSX", props.message)
    console.log("Color in NavBarJSX", props.color)
    return (
            <div className={`ui inverted ${props.color} menu`}>
                <a className="item">
                    <h2 className="ui header">
                        <i className="bug icon"/>
                            <div className="content">
                                {`${props.message}`}
                            </div>
                    </h2>
                </a>
            </div>
    )
}

// 1. Create out React Component
// 2. Set our text
// 3. Attached it to the DOM
const Message = () => {
    //null stand for props currently we are not passing anything into this.
    return React.createElement("p", null, "What is Life from out React Component!!!")
}

const App = () => {
    return (
        <div>
            <NavbarJSX color="red" message="Welcome to React!!!"/>
            <Message/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("main"))

