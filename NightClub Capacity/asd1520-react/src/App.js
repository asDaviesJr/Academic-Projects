import React from 'react';
import ClubInfo from './ClubInfo'; 
import RadioButton from './RadioButton';
import SubmitButton from './SubmitButton';
import Heading from './Heading';
import { changeOccupancy } from './Script';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {current_club: '', arcane:0, under:0, soda:0, studio:0}; 
  }

  newSelected = (value) => {
    this.setState({current_club: value}); 
  }

  submit = (operation) => {
    if(this.state.current_club === 'arcane'){
      let occ = this.state.arcane; 
      this.setState({arcane: changeOccupancy(occ,operation)})
    } else if (this.state.current_club === 'under'){
      let occ = this.state.under; 
      this.setState({under: changeOccupancy(occ,operation)})
    } else if (this.state.current_club === 'soda') {
      let occ = this.state.soda; 
      this.setState({soda: changeOccupancy(occ,operation)})
    } else if (this.state.current_club === 'studio'){
      let occ = this.state.studio; 
      this.setState({studio: changeOccupancy(occ,operation)})
    }
  }


  render(){  
    return(
      <div>
        <div className="App"><Heading/></div>
        <ClubInfo  name="Club Arcane" max={100} thres={70} occupancy={this.state.arcane}/>
        <ClubInfo name="Club Underground" max={50} thres={30} occupancy={this.state.under}/>
        <ClubInfo name="Club Soda" max={20} thres={12} occupancy={this.state.soda}/>
        <ClubInfo name="Studio 52"max={52} thres={32} occupancy={this.state.studio}/>
        <div className="bottom-middle">
          <RadioButton value="arcane" name="Club Arcane" newSelected={this.newSelected}/>
          <RadioButton value="under" name="Club Underground" newSelected={this.newSelected}/>
          <RadioButton value="soda" name="Club Soda" newSelected={this.newSelected}/>
          <RadioButton value="studio" name="Club Studio" newSelected={this.newSelected}/>
          <div>
            <SubmitButton value="subtract" submit={this.submit} operation = "-"/>
            <SubmitButton value="add" submit={this.submit} operation = "+"/>
          </div>
        </div>

      </div>

      );
    
  }
    }
    












export default App;
