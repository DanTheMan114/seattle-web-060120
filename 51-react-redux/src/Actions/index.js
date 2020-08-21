import fetch from 'cross-fetch'

import babyBowie from '../assets/babyBowie.jpeg';
import hipsterBowie from '../assets/hipsterBowie.jpg';
import ziggieBowie from '../assets/ziggyBowie.jpg';
import goblinBowie from '../assets/goblinBowie.jpg';

export const increaseVote = (id) => {
    return {
        type: "INCREASE_VOTE",
        payload: {
            id
        }
    }
}

export const decreaseVote = (id) => {
    return {
        type: "DECREASE_VOTE",
        payload: {
            id
        }
    }
}


 const receivePosts = (json) => {
  return {
    type: "RECEIVE_POSTS",
    payload:json
  }
}

    
export const fetchBowies = () => {
        return function(dispatch){
            fetch('http://localhost:3000/bowies')
            .then(res => res.json())
            .then(json => {
               json[1].image = babyBowie
               json[2].image = hipsterBowie
               json[3].image = ziggieBowie
               json[4].image = goblinBowie

             return   dispatch(receivePosts(json))
            })
            .catch(error => {
                console.log(error.messages)
            })
        }
    }

  