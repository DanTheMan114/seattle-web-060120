import React from 'react';
import paintings from "./paintings"
import NavBar from "./NavBar"
import 'semantic-ui-css/semantic.min.css'

function App() {
  console.log(paintings)
  return (
    <div >
      Hello from App!!
      <NavBar color="green" message="Welcome to our Paintings"/>
    </div>
  );
}

export default App;