import React from 'react';
import JoinRoom from './JoinRoom';

class Homepage extends React.Component {
    render(){
    return (
        <div>
          <br/>
          <h1>This is Inhuman Cards.</h1>
          <h6>How to play? You should know. You're the one who came here.</h6>
          <JoinRoom/>
        </div>
    )
    }

}
export default Homepage
