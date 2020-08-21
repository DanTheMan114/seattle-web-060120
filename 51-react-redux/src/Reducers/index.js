import {increaseVote, decreaseVote} from '../Actions'

import babyBowie from '../assets/babyBowie.jpeg';
import hipsterBowie from '../assets/hipsterBowie.jpg';
import ziggieBowie from '../assets/ziggyBowie.jpg';
import goblinBowie from '../assets/goblinBowie.jpg';

 const initialState = {
        bowies: {
       
        }
 }
 
 const bowieReducer = (state=initialState,action) => {
    switch(action.type){
         case 'INCREASE_VOTE': {
             return {
                 ...state,
                bowies: {
                    ...state.bowies,
                    [action.payload.id]: {
                        ...state.bowies[action.payload.id],
                        votes: parseInt(state.bowies[action.payload.id].votes)+1
                    }
                }
             }
         }
         case 'DECREASE_VOTE': {
            return {
                ...state,
               bowies: {
                   ...state.bowies,
                   [action.payload.id]: {
                       ...state.bowies[action.payload.id],
                       votes: state.bowies[action.payload.id].votes+1
                   }
               }
            }
        }
        case 'RECEIVE_POSTS':{
            console.log(action)
            return {...state,bowies:action.payload}
        }
    
        default: 
        return state
    }
}

export default bowieReducer