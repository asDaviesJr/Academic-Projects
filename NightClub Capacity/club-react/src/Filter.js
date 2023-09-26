import { Component } from "react";

class Filter extends Component {

    constructor(props){
        super(props); 
        this.state = {
            filter : ''
        }
    }

    handleChange = (e) =>{
        this.setState({filter: e.target.value}); 
    } 
    

    onSubmit = () => {
        this.props.updateFilter(this.state.filter); 
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Enter city name..." onChange={this.handleChange}/>
                <input type="submit" value="filter"/>
            </form>
        ); 
    }
}

export default Filter;