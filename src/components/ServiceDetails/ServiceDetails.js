import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
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
                    <img className="" style={{height: 300, width: 400, borderRadius: 5}} src={service?.photo} alt="" />
                </Col>
                <Col lg="6">
                    <h2 className="custom-color-blue">{service?.title}</h2>
                    <p className="card-details">{service?.description}</p>
                    <div className="my-3">
                        <p className="home-details"><CheckCircleFill className="custom-text-color" /> Control blood presure</p>
                        <p className="home-details"><CheckCircleFill className="custom-text-color" /> Without take meal</p>
                        <p className="home-details"><CheckCircleFill className="custom-text-color" /> Control diabetics</p>
                    </div>
                    <Form.Label>Select Date</Form.Label>
                    <input className="form-control" style={{maxWidth: 215}} onFocus={updateTestDate} type="date" name="" id="test-date" required />
                    <h3 className="text-success mt-2">Cost: ${service?.price}</h3>
                    <Button className="mt-2 home-btn" onClick={handleAddToList}>Add To List</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetails;