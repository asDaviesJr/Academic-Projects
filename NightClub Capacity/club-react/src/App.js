import Heading from './Heading';
import {Modal, ModalHeader, Button} from 'reactstrap';
import React from 'react';
import './App.css';
import ClubList from './ClubList';
import AddClub from './AddClub';



class App extends React.Component {

  constructor(props){
    super(props); 
    this.state = {toggleState: false, theList: [],
      modal_club_name: "", modal_city: "", modal_music_genre: "", modal_state: ""}; 
  }

  showHide = () => {
    this.setState({toggleState: !this.state.toggleState}); 
  }

  saveSignup = (data) => {
    this.state.theList.push(data); 
    this.showHide(); 
    this.setState({theList: this.state.theList}); 
  }


  
  render() {

    return (
      <div class="App">
        <Heading/>
        <Button onClick={this.showHide}>Add Club</Button>
        <br></br>
        <ClubList theList={this.state.theList}/>
        <Modal isOpen={this.state.toggleState} toggle={this.showHide}>
          <ModalHeader toggle={this.showHide}>New Club</ModalHeader>
          <AddClub updateSave={this.saveSignup}/>
        </Modal>
        
        
      </div>
      

    );
  }
}

export default App;
