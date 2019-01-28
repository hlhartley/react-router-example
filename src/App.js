import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Unicorns from './Unicorns';
import Puppies from './Puppies';
import Sharks from './Sharks';
import CreatureDetails from './CreatureDetails';
import unicornData from './data/unicorn-data.js';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='header-section'>
          <header>
            <NavLink to='/unicorns' className='nav'> Unicorns </NavLink>
            <NavLink to='/puppies' className='nav'> Puppies </NavLink>
            <NavLink to='/sharks' className='nav'> Sharks </NavLink>
          </header>
        </div>
        <Route exact path='/' component={Home} />
        <Route exact path='/unicorns' component={Unicorns} />
        <Route exact path='/puppies' component={Puppies} />
        <Route exact path='/sharks' component={Sharks} />
        <Route path='/unicorns/:id' render={({ match }) => {
          const { id } = match.params
          const creature = unicornData.find(uni => uni.id === parseInt(id))
          if (creature) {
            return <CreatureDetails {...creature} />
          }
        }} />
      </div>
    );
  }
}
