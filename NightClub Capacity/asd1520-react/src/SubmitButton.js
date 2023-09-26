import React from 'react';
import './App.css';

class SubmitButton extends React.Component{

    handleClick = () => {
        this.props.submit(this.props.value); 
    }

    render(){
        return(
            <button type="submit" value={this.props.value} onClickCapture={this.handleClick}>{this.props.operation}</button>
        );
    }

}

export default SubmitButton; 