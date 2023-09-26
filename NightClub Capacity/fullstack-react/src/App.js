import ClubList from './ClubList';
import './App.css';
import React from 'react'; 
import { Button } from 'reactstrap';
import { Modal } from 'reactstrap';
import AddClub from './AddClub';
import { ModalHeader } from 'reactstrap';
import Heading from './Heading';

class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {theList: [], toggleState: false}
  }

  updateData = (apiResponse) => {
    this.setState({theList: apiResponse})
  }

  fetchData = () => {
    fetch('/clubs')
    .then(
      response => response.json()
    )
    .then(jsonOutput => {this.updateData(jsonOutput)})
  }

  componentDidMount(){
    this.fetchData(); 
  }

  showHide = () => {
    this.setState({toggleState: !this.state.toggleState}); 
  }

  addClub = (data) => {
    const requestOptions = {
      method: "post",
      headers: {'content-type': "application/json"}, 
      body : JSON.stringify({
          name : data.name, 
          city: data.city, 
          genre: data.genre,
          max_occ : data.max_occ, 
          hres_occ: data.thres_occ
      })

    }
    const path = '/clubs'
    fetch(path, requestOptions)
    .then(response => response.json())
  }

  saveSignup = (data) => {
    this.showHide(); 
    this.addClub(data); 

  }

  render() {
    return(
      <div className='App'>
        <Heading/>
        <Button onClick={this.showHide}>Add Club</Button>
        <ClubList theList={this.state.theList}/>
        <Modal isOpen={this.state.toggleState} toggle={this.showHide}>
          <ModalHeader toggle={this.showHide}>New Club</ModalHeader>
          <AddClub updateSave={this.saveSignup}/>
        </Modal>
        
      </div>
    )
  }
  
}

export default App;
