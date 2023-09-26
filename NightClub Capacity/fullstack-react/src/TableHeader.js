import { Row, Col } from "reactstrap";

export function TableHeader() {
    return(
        <Row style={{backgroundColor: 'black', color: 'white'}}>
            <Col className="border" style={{backgroundColor:'white'}}></Col>

            <Col className='border'>Club Name</Col>
            <Col className='border'>City</Col>
            <Col className='border'>Music Genre</Col>
            <Col className='border'>Current Occupancy</Col>

            <Col className="border" style={{backgroundColor:'white'}}></Col>
            <Col className="border" style={{backgroundColor:'white'}}></Col>
            <Col className="border" style={{backgroundColor:'white'}}></Col>
        </Row>
    );
}