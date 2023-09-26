import { Component } from "react";
import { Container} from 'reactstrap'
import ClubInfo from "./ClubInfo";
import Filter from "./Filter";
import { TableHeader } from "./TableHeader";


class ClubList extends Component {

    constructor(props){
        super(props); 
        this.state = {
            filter : ''
        }
    }

    filterList = (e) => {
        this.setState({filter:e}); 

    }

    renderCols=()=>{
        let tags = []; 

        for(var i=0; i < this.props.theList.length; i++){
            const club_name = this.props.theList[i].club_name; 
            const city = this.props.theList[i].city;
            const music_genre = this.props.theList[i].music_genre; 
            let max = this.props.theList[i].max_occ; 
            let thres = this.props.theList[i].thres_occ;
            tags.push(<ClubInfo club_name={club_name} city={city} music_genre={music_genre} max={max} thres={thres}/>) 
            
        }
         
        return(tags); 
    }

    
    render(){
        
        return(
            <div>
                <br></br>
                <Filter updateFilter={this.filterList}/>
                <TableHeader/>
                <Container className='mt-5 border'>
                    {this.renderCols()}
                </Container>
            </div>
            
        );
    }


}

export default ClubList; 