import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import { addToDb } from '../../utilities/saveToLocal';

const ServiceDetails = () => {
    // router key
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const [testDate, setTestDate] = useState("");

    // console.log(serviceId);
    // custom hook 
    const [services] = useServices();

    useEffect(() => {
        // find single service
        // console.log(services.find(s => s.id === serviceId))
        setService(services.find(s => s.id === serviceId));
    }, [services]);

    const updateTestDate = () => {
        setTestDate(document.getElementById("test-date").value);
    }
 
    const handleAddToList = () => {
        // const d = new Date(testDate)
        // console.log(d.toLocaleDateString("en-US"))
        addToDb(serviceId, testDate);
    }
    return (
        <Container style={{marginTop: 50}}>
            <Row className="pt-5">
                <Col lg="6" className="d-flex justify-content-center">
                    <img className="" style={{height: 350}} src={service?.photo} alt="" />
                </Col>
                <Col lg="6">
                    <h2>{service?.title}</h2>
                    <p>{service?.description}</p>
                    <h3>Cost: ${service?.price}</h3>
                    <input onFocus={updateTestDate} type="date" name="" id="test-date" required />
                    <br />
                    <br />
                    <Button onClick={handleAddToList}>Add To List</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetails;