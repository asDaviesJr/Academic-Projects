import { Component } from "react";
import { Container} from 'reactstrap'; 
import ClubInfo from "./ClubInfo";
import { TableHeader } from "./TableHeader";

class ClubList extends Component {

    renderCols = () => {
        let tags = []; 

        let sorted = this.props.theList; 

        
        sorted.sort(function (a,b) {
            return a.id - b.id; 
        }) 

        for(var index = 0 ; index < this.props.theList.length; index++){
            const id = sorted[index].id; 
            const name = sorted[index].name; 
            const city = sorted[index].city; 
            const genre = sorted[index].genre; 
            const occupancy = sorted[index].occupancy; 
            const max_occ = sorted[index].max_occ; 
            const thres_occ = sorted[index].thres_occ;  

            tags.push(<ClubInfo id={id} name={name} city={city} genre={genre} occupancy={occupancy} max_occ={max_occ} thres_occ={thres_occ}/>)
        }

        return(tags); 
    }

    render() {
        return (
            <div>
                <Container className="mt-5 border">
                    <TableHeader/>
                    {this.renderCols()}
                </Container>
            </div>
        ); 
    }


}

export default ClubList; 