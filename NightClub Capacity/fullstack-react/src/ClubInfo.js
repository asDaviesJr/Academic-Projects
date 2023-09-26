import { Component } from "react";
import {Button, Row, Col, Modal, ModalHeader} from 'reactstrap'
import EditClub from "./EditClub";

class ClubInfo extends Component {
    constructor(props){
        super(props); 
        this.state = {
            id : this.props.id, 
            name : this.props.name, 
            city: this.props.city, 
            genre: this.props.genre, 
            occupancy : this.props.occupancy, 
            max_occ : this.props.max_occ, 
            thres_occ: this.props.thres_occ,
            color: 'greenyellow', 
            addButton: true, 
            subtractButton: false, 
            toggleState: false

        }

    }

    clubUpdate = (data) => {
        var id = this.props.id
        const requestOptions = {
            method: "put", 
            headers: {'content-type': "application/json"}, 
            body : JSON.stringify({
                name : data.name, 
                city: data.city, 
                genre: data.genre,
                max_occ : data.max_occ, 
                thres_occ: data.thres_occ 

            })
        }

        const path = '/clubs/' + id
        fetch(path, requestOptions)
        .then(response => response.json())

    }

    deleteClub = () => {
        var id = this.props.id; 
        fetch('/clubs?id=' + id, {method: 'DELETE'})
        window.location.reload(false);
    }

    addOccupancy = () => {
        var id = this.props.id; 
        fetch('/adding/' + id, {method: 'PUT'})
        window.location.reload(false);
        
    }

    subtractOccpancy = () => {
        var id = this.props.id; 
        fetch('/subtracting/' + id, {method: 'PUT'})
        window.location.reload(false);

    }

    showHide = () => {
        this.setState({toggleState: !this.state.toggleState}); 
    }

    saveEdit = (data) => {
        this.showHide(); 
        this.clubUpdate(data); 
        window.location.reload(false); 
    }

    componentDidMount() {
        if(this.state.occupancy > 0 && this.state.occupancy < this.state.max_occ){
            this.setState({subtractButton: true})
            this.setState({addButton: true})
        } else if (this.state.occupancy >= this.state.max_occ) {
            this.setState({addButton: false})
            this.setState({subtractButton: true})
        } else {
            this.setState({addButton: true})
            this.setState({subtractButton: false})
        }

        if(this.state.occupancy >= this.state.thres_occ && this.state.occupancy < this.state.max_occ){
            this.setState({color: 'yellow'})
        } else if (this.state.occupancy >= this.state.max_occ){
            this.setState({color: 'red'})
        } else {
            this.setState({color:'greenyellow'})
        }
    }

    

    render() {
        return (
            <div>
                <Row style={{backgroundColor: this.state.color}}>

                    <Col className="border" style={{backgroundColor: 'white'}}>{this.state.addButton ? <Button onClick={this.addOccupancy} color='success'>+</Button> : null}</Col>

                    <Col className='border'>{this.state.name}</Col>
                    <Col className='border'>{this.state.city}</Col>
                    <Col className='border'>{this.state.genre}</Col>
                    <Col className='border'>{this.state.occupancy}</Col>

                    <Col className="border" style={{backgroundColor: 'white'}}>{this.state.subtractButton ? <Button onClick={this.subtractOccpancy} color='danger'>-</Button> : null}</Col>
                    <Col className="border" style={{backgroundColor: 'white'}}><Button onClick={this.showHide} color='primary'>Edit</Button></Col>
                    <Col className="border" style={{backgroundColor: 'white'}}><Button onClick={this.deleteClub} color='danger'>Delete</Button></Col>

                    <Modal isOpen={this.state.toggleState} toggle={this.showHide}>
                        <ModalHeader toggle={this.showHide}>Edit Club</ModalHeader>
                        <EditClub name={this.state.name} city={this.state.city} genre={this.state.genre} max_occ={this.state.max_occ} thres_occ={this.state.thres_occ} updateClub={this.saveEdit} cancel={this.showHide}/>
                    </Modal>

                </Row>
            </div>
        ); 
    }


}

export default ClubInfo; 