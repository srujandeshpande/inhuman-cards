import React from 'react';
import Button from '@material-ui/core/Button';
import Fireapp from '../../config/firebaseConfig'


class JoinRoom extends React.Component {
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state)
    //firebase save
    const db = Fireapp.firestore()
    const ref = db.collection('test_collection');

    ref.add({
      test:'hi',
    })
    .then(
      (docRef) => {
        console.log(docRef.id)
      }
    )
    .catch((error)=> {
      console.log("Some error occured")
    })
  }

  render(){
    return (
      <div>
        <form onSubmit ={this.handleSubmit}>
          <input type="text" id="room-code" placeholder="Room Code." />
          <br/>
          <input type="text" id="name" placeholder="Your Name." />
          <br/>
           <Button type="submit" variant="outlined">Join Room.</Button>
           <Button variant="outlined">Get A Room.</Button>
        </form>
      </div>
    )
    }

}
export default JoinRoom
