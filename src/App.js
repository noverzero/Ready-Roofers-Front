import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/index.js'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import GetAQuote from './components/GetAQuote'
import LearnRoofing from './components/LearnRoofing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Post from './components/Post'




function App() {
  const counter = useSelector( state => state.counter)
  const isLogged = useSelector( state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Router>
        <Navigation/>
          <Switch>
            <Route path ="/" exact component={Home}/>
            <Route path ="/get-a-quote" component={GetAQuote}/>
            <Route path ="/learn-roofing" exact component={LearnRoofing}/>
            <Route path ="/learn-roofing/:id" exact component={Post}/>
            <Route path ="/about" component={About}/>
          </Switch>
      </Router>

      

      <h1>Counter: {counter} </h1>
      <button onClick={() => dispatch(increment(5))} > + </button>
      <button onClick={() => dispatch(decrement())} > - </button> 
      {isLogged ? 
      <h3> valuable information I shouldn't see if not logged in</h3> :
      <h3> not logged in</h3>
      }
    </div>
  );
}

export default App;
