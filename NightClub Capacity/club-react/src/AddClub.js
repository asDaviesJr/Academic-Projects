import { Component } from 'react';
import {Label, Input, ModalBody, ModalFooter, Button} from 'reactstrap';

function threshold(max){
    let thres = max * 0.8; 
    return thres
}

class AddClub extends Component{

    constructor(props){
        super(props); 
        let values = {club_name: "",city:"", music_genre:"", max_occ:0, thres_occ:0, curr_occ:0}; 
        this.state = {data: values}; 

    }

    updateClubName = (e) => {
        const dataCopy = this.state.data; 
        dataCopy.club_name = e.target.value; 
        this.setState({data: dataCopy});  
        
    }

    updateCity = (e) => {
        const dataCopy = this.state.data; 
        dataCopy.city = e.target.value; 
        this.setState({data: dataCopy});  
    }

    updateMusic = (e) => {
        const dataCopy = this.state.data; 
        dataCopy.music_genre = e.target.value; 
        this.setState({data: dataCopy});  
    }

    updateMaxOcc = (e) => {
        const dataCopy = this.state.data; 
        dataCopy.max_occ = e.target.value; 
        this.setState({data: dataCopy});  
    }

    updateThresOcc = (e) => {
        const dataCopy = this.state.data;
        dataCopy.thres_occ = e.target.value; 
        this.setState({data: dataCopy});  
    }


    onSave = () => {
        let thres = this.state.data.thres_occ; 
        if (thres === 0){
            let new_thres = threshold(this.state.data.max_occ); 
            const dataCopy = this.state.data;
            dataCopy.thres_occ = new_thres; 
            this.setState({data: dataCopy});

        }
        this.props.updateSave(this.state.data); 
    }

    


    render() {
        return (
            <div>
                <ModalBody>

                    <Label for="field1">Club Name</Label>
                    <Input id="field1"  name="club_name"  value={this.state.data.club_name}
                            type="text"   onChange={this.updateClubName}  /> {}
                    
                    <Label for="field2">City</Label>
                    <Input id="field2"  name="city"   value={this.state.data.city}
                            type="text"   onChange={this.updateCity}/>

                    <Label for="field3">Music Genre</Label>
                    <Input id="field3"  name="music_genre"   value={this.state.data.music_genre}
                            type="text"   onChange={this.updateMusic}/>
                    
                    <Label for="field4">Max Occupancy</Label>
                    <Input id="field4"  name="max_occ"   value={this.state.data.max_occ}
                            type="text"   onChange={this.updateMaxOcc}/>
                    
                    <Label for="field5">Threshold Occupancy *Default Threshold 80% of Max Occupancy*</Label>
                    <Input id="field5"  name="thres_occ"   value={this.state.data.thres_occ}
                            type="text"   onChange={this.updateThresOcc}/>

                </ModalBody>
                <ModalFooter>
                    <Button color='success' onClick={this.onSave}>Save</Button>
                </ModalFooter>

            </div>
        );
    }
}

export default AddClub; 