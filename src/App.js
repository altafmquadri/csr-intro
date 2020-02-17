import React from 'react';
import './App.css';
import Dog from './Dog'
import Contact from './Contact'
import About from './About'
import { Route, Switch, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
        <NavLink exact activeClassName="active-link" to='/'> Home </NavLink>
        <NavLink activeClassName="active-link" to='/dog'> Dog </NavLink>
        <NavLink activeClassName="active-link" to='/contact'> Contact </NavLink>
      </nav>
      <Switch>
        <Route path='/dog' render={(routerProps) => <Dog {...routerProps} />} />
        <Route path='/contact' component={Contact} />
        <Route exact path='/' component={About} />
      </Switch>
    </div>
  );
}

export default App;
