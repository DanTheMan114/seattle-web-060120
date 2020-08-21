import React from 'react'
import {store} from '../App'

const Number = () => {

   const handleChange = (e) => {
       store.dispatch({type:'SETVALUE', payload: e.target.value})
   }
 
    return (
        <div>
        <div class="profile" id='profile'>{store.getState().value}</div> 
       <input type="number" name="number" min="0" onChange={handleChange}></input>
       </div>
    );
};
export default Number