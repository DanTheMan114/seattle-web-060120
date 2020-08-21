import React from 'react';
import './App.css';
import Counter from './componenets/Counter'
import Number from './componenets/Number'
import {createStore} from 'redux'




  const initialState = {
    count:0,
    value:1,
    message:''
  }


const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'INCREASE':
      return {...state, count: state.count+state.value, message: action.payload}
    case 'DECREASE':
      return  {...state, count: state.count-state.value, message: action.payload}
    case 'SETVALUE':
      return  {...state, value: parseInt(action.payload)}
    default:
      return state
  }
}

export const store = createStore(reducer)



export class App extends React.Component {

  render(){
    store.subscribe(()=>{
      this.forceUpdate()
    })
  return (
    <div class="container">
      <Number />
      <Counter />
    </div>
    );
  } 
}

