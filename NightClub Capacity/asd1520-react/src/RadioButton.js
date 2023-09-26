import React from 'react';
import './App.css';

class RadioButton extends React.Component{
    selected = () => {
        this.props.newSelected(this.props.value); 
    }
    render(){
        return(
            <div className='radio-button'><label ><input type="radio" value={this.props.value} name="clubs" onChange={this.selected}/>{this.props.name}</label></div>
        ); 
    }
    
}


export default RadioButton; 