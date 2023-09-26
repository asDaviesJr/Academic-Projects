import { Col, Row, Container } from "reactstrap"

export function TableHeader(){
    return(
    <Container className='mt-5 border'>
    <Row>
                    <Col className='border'></Col>
                    <Col className='border'><h5>Club Name</h5></Col>
                    <Col className='border'><h5>City</h5></Col>
                    <Col className='border'><h5>Music Genre</h5></Col>
                    <Col className='border'><h5>Current Occupancy</h5></Col>
                    <Col className='border'></Col>
                    <Col className='border'></Col>
                    <Col className='border'></Col>
    </Row>
    </Container>
    )
}