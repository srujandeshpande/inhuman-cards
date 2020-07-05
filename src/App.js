import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import GameRoom from './components/GameRoom';
import Lobby from './components/Lobby';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {Homepage}/>
        <Route path='/game/:id' component = {GameRoom}/>
        <Route path='/:id' component = {Lobby}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
