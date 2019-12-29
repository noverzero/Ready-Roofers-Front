import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import allReducers from './reducers/index.js'
import { Provider } from 'react-redux'

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//React VVVVVVV

ReactDOM.render(
    <Provider store={store}>    
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*  Note from overview --- ...this code went after import {createStore} line and before ReactDOM.render.
//Create STORE -> globalized state

//ACTION -> give it a name that represents what you want the action to do (ex: increment).  Action is a function that returns an object

const increment = () => {

    return{
        type:'INCREMENT'
    }
}

const decrement = () => {

    return{
        type:'DECREMENT'
    }
}

//REDUCER -> updates the STORE

const counter = (state = 0, action) => {
    switch(action.type ){
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state -1
        default:
            console.log(`no reducer case set up for action.type: ${action.type}`)
    }
}
let store = createStore(counter)

//display it in the console  --> just for development...not part of the functionality
store.subscribe(() => console.log(store.getState()))


//DISPATCH - sends action to Reducer
store.dispatch(increment())

*/