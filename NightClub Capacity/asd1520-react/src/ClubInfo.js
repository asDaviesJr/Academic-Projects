import React from 'react';
import './App.css';
import { validateColor } from './Script';
import { validateMessage } from './Script';
import { validateOccupancy } from './Script';

class ClubInfo extends React.Component{

    render() {
        let occupancy = validateOccupancy(this.props.occupancy, this.props.max)
        var message = validateMessage(occupancy,this.props.max,this.props.thres)
        var color = validateColor(occupancy, this.props.max, this.props.thres ); 
        return(
            <div >
                    <div className= 'gap'></div>
                    <div className ='infoBox' style = {{backgroundColor: color}}>  
                        <h2 className = 'centered'>{this.props.name}</h2>
                        <div className = 'vertical-gap'></div>
                        <h3 className = 'centered'>{message}</h3>
                        <div className = 'vertical-gap'></div>
                        <h2 className = 'centered'>{occupancy}</h2>
                    </div>
                </div>
        ); 
    }


}

export default ClubInfo;
