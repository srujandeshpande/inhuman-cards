import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import GameRoom from './components/GameRoom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {Homepage}/>
        <Route path='/:id' component = {GameRoom}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
