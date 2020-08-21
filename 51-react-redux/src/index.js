import thunkMiddleware from 'redux-thunk'
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {fetchBowies} from './Actions'
import {createStore, applyMiddleware} from 'redux';
//a Provider provides everthing within 
//the store to your app
import {Provider} from 'react-redux'
import reducer from './Reducers'

const store = createStore(reducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
      )
)

ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchBowies())
