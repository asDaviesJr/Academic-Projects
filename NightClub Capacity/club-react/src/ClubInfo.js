import { Component } from "react";
import {Button, Row, Col, Modal, ModalHeader} from 'reactstrap'
import EditClub from "./EditClub";


class ClubInfo extends Component{
    constructor(props){
        super(props); 
        this.state = {
            occ: 0, 
            addButton: true, 
            subtractButton: false,
            color: 'greenyellow',
            delete: false,
            club_name: this.props.club_name,
            city: this.props.city, 
            music_genre: this.props.music_genre,
            thres: this.props.thres,
            max: this.props.max,
            toggleState: false

        }
    
    }

    addOccupancy = () => {
        let new_occ = this.state.occ + 1;
        if (new_occ >= this.state.thres && new_occ < this.state.max){
            this.setState({color: 'yellow'})
        } else if(new_occ >= this.state.max){
            new_occ = this.state.max; 
            this.setState({color:'red'})
            this.setState({addButton: false})
            
        } else {
            this.setState({color: 'greenyellow'})
            
        }
        this.setState({subtractButton: true})
        
        this.setState({occ:new_occ}); 

    }

    subtractOccupancy = () => {
        let new_occ = this.state.occ - 1;
        if(new_occ >= this.state.thres && new_occ <= this.state.max){
            this.setState({color: 'yellow'})
        } else if(new_occ <= 0){
            new_occ = 0;
            this.setState({subtractButton: false})
            
        } else {
            this.setState({color:'greenyellow'})
            
        }
        this.setState({addButton: true})
        this.setState({occ:new_occ}); 

    }

    delete = () => {
        this.setState({delete: true}); 
    }

    showHide = () => {
        this.setState({toggleState: !this.state.toggleState}); 
    }

    saveEdit = (data) => {
        
        this.showHide(); 
        this.setState({club_name: data.club_name});
        this.setState({city: data.city});
        this.setState({music_genre: data.music_genre});
        this.setState({thres: data.thres_occ});
        this.setState({max: data.max_occ});
    }
    
    render() {
        return(
            <div>
            {!this.state.delete ? 
            <Row style={{backgroundColor: this.state.color}}>
                <Col>{this.state.addButton ? <Button color='success' onClick={this.addOccupancy}>+</Button> : null}</Col>
                <Col className='border'>{this.state.club_name}</Col>
                <Col className='border'>{this.state.city}</Col>
                <Col className='border'>{this.state.music_genre}</Col>
                <Col className='border'>{this.state.occ}</Col>
                <Col>{this.state.subtractButton ? <Button color='danger' onClick={this.subtractOccupancy}>-</Button> : null}</Col>
                <Col><Button color='primary' onClick={this.showHide}>Edit</Button></Col>
                <Col><Button color='dark' onClick={this.delete}>Delete</Button></Col>
                <Modal isOpen={this.state.toggleState} toggle={this.showHide}>
                    <ModalHeader toggle={this.showHide}>Edit Club</ModalHeader>
                    <EditClub club_name={this.state.club_name} city={this.state.city} music_genre={this.state.music_genre} max={this.state.max} thres={this.state.thres} updateClub={this.saveEdit}/>
                </Modal>
            </Row> : null}
            <br></br>
            </div>
        ); 
    }
}

export default ClubInfo; 