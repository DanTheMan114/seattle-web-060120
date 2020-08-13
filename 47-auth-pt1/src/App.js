import React from 'react';
import ArtBlog from './components/ArtBlog'
import Login from './components/Login'
import ArtistList from './components/ArtistList'
import NotFound from './components/NotFound'
import Home from './components/Home'
import OnePainting from './components/OnePainting'

import PaintingContainer from './containers/PaintingContainer'
import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom'
import './App.css'

class App extends React.Component{

  state={
    user:{
      id:0,
      username:""
    },
    allArt:[]
  }

  componentDidMount(){
    fetch('http://localhost:3000/art')
    .then(res => res.json())
    .then(json => this.setState({allArt:json}))
  }

  renderPaintings = () => <PaintingContainer allArt={this.state.allArt} />

  renderArtist = () => <ArtistList allArt={this.state.allArt}/>


  renderOnePainting = (id) => {
    console.log(id)
  return <OnePainting id={id} />
}
 
handleLogin = (e, userInfo) =>{
   e.preventDefault()

   fetch('http://localhost:3000/login',{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(userInfo)
  })
  .then(res => res.json())
  .then(json => {
    if(!json.error){
      this.setState({user:{id:json.id, username:json.username}, allArt:json.arts}, () => {
        this.props.history.push('/paintings')
      })
    }else {
      alert(json.error)
    }
  })
  .catch(err => console.log(err))
 }

 handleSignup = (e,userInfo) => {
  e.preventDefault()
   fetch('http://localhost:3000/users',{
     method:"POST",
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify(userInfo)
   })
   .then(res => res.json())
   .then(console.log)
 }

 renderLoginPage = () => <Login handleLoginOrSignup={this.handleLogin}/>

 renderSignUpPage = () =>  <Login handleLoginOrSignup={this.handleSignup}/>


  render(){
    console.log(this.state)
  return (
    <div className="App">
      <header>
        <h3>Art Appreciators Incorporated</h3>
       <ul>
         <li>
           <NavLink to='/' exact>Home</NavLink>
         </li>
         <li>
           <NavLink to='/login'>Login</NavLink>
         </li>
         <li>
           <NavLink to='/signup'>Sign up</NavLink>
         </li>
         <li>
           <NavLink to='/blog'>Blog</NavLink>
         </li>
         <li>
           <NavLink to='/paintings'>All Paintings</NavLink>
         </li>
         <li>
           <NavLink to='/artists'>All Artists</NavLink>
         </li>
       </ul>
      </header>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/blog' component={ArtBlog}/>
        <Route path='/login' render={this.renderLoginPage}/>
        <Route path='/signup' render={this.renderSignUpPage}/>
        <Route path='/paintings' exact render={this.renderPaintings}/>
        <Route path='/paintings/:id' render={this.renderOnePainting}/>
        <Route path='/artists' render={this.renderArtist}/>
        <Route component={NotFound}/>
      </Switch>

    </div>
  );
}
}
export default withRouter(App);
