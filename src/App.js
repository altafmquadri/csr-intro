import React from 'react';
import './App.css';
import Dog from './Dog'
import Contact from './Contact'
import About from './About'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/dog' component={Dog} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
