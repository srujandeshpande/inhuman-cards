import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Navbar from './components/page/Navbar';
import Room from './components/game/Room';
import JoinRoom from './components/dash/JoinRoom';
import NewRoom from './components/dash/NewRoom';
import Homepage from './components/dash/Homepage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/' component = {Homepage}/>
        <Route path='/room/:id' component = {Room}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
