import React from 'react';
import Button from '@material-ui/core/Button';
import Fireapp from '../../config/firebaseConfig'


class JoinRoom extends React.Component {

  state = {
    roomcode:'',
    name:'',
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleNewRoom = (e) =>{
    e.preventDefault();
    console.log(this.state)
    //firebase save
    const db = Fireapp.firestore()
    const ref = db.collection('test_collection');

    ref.add(
      this.state
    )
    .then(
      (docRef) => {
        console.log(docRef.id);
        console.log("new room")
      }
    )
    .catch((error)=> {
      console.log("Some error occured")
    })
  }

  handleJoinRoom = (e) =>{
    e.preventDefault();
    console.log(this.state)
    //firebase save
    const db = Fireapp.firestore()
    const ref = db.collection('test_collection');

    ref.add(
      this.state
    )
    .then(
      (docRef) => {
        console.log(docRef.id);
        console.log("join room")
      }
    )
    .catch((error)=> {
      console.log("Some error occured")
    })
  }

  render(){
    return (
      <div>
        <form>
          <input
            type="text"
            id="roomcode"
            placeholder="Room Code."
            onChange={(e) => this.handleChange(e)}
          />
          <br/>
          <input
            type="text"
            id="name"
            placeholder="Your Name."
            onChange={(e) => this.handleChange(e)}
          />
          <br/>
          </form>
          <form onSubmit ={this.handleJoinRoom}>
           <Button type="submit" variant="outlined">Join Room.</Button>
          </form>
         <form onSubmit ={this.handleNewRoom}>
           <Button type="submit" variant="outlined">Get A Room.</Button>
        </form>
      </div>
    )
    }

}
export default JoinRoom
