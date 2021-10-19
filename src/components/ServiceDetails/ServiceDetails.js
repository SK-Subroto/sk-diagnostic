import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { ArrowBarLeft, CheckCircleFill } from 'react-bootstrap-icons';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useList from '../../hooks/useList';
import useServices from '../../hooks/useServices';
import { addToDb } from '../../utilities/saveToLocal';
import List from '../List/List';

const ServiceDetails = () => {
    const history = useHistory();
    // router key
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const [testDate, setTestDate] = useState("");


    // custom hook 
    const [services] = useServices();
    const [list, setList] = useList(services);

    useEffect(() => {
        // find single service
        setService(services.find(s => s.id === serviceId));
    }, [services]);

    const updateTestDate = () => {
        setTestDate(document.getElementById("test-date").value);
    }
 
    const handleAddToList = () => {
        // check existing 
        const exists = list.find(sv => sv.id === serviceId);
        let newList = [];
        if (exists) {
            const rest = list.filter(sv => sv.id !== serviceId);
            exists.quantity = exists.quantity + 1;
            newList = [...rest, service];
        }
        else {
            service.quantity = 1;
            newList = [...list, service];
        }
       
        // save to local storage (for now)
        if(testDate){
            setList(newList);
            addToDb(serviceId, testDate);
        }
    }

    const handleReviewList = () => {
        history.push('/list');
    }
    return (
        <Container style={{marginTop: 50}}>
            <Row className="pt-5 g-3">
                <Col lg="5" className="d-flex justify-content-between flex-column">
                    <img className="" style={{height: 270, width: 380, borderRadius: 5}} src={service?.photo} alt="" />
                    <Link to="/services">
                        <Button className="rounded-pill mt-4 fw-bold" style={{ backgroundColor: '#33D1CB', width: 200 }}><ArrowBarLeft /> All Service</Button>
                    </Link>
                </Col>
                <Col lg="4">
                    <h2 className="custom-color-blue">{service?.title}</h2>
                    <p className="card-details">{service?.description}</p>
                    <div className="my-3">
                        <p className="home-details"><CheckCircleFill className="custom-text-color" /> Control blood presure</p>
                        <p className="home-details"><CheckCircleFill className="custom-text-color" /> Without take meal</p>
                        <p className="home-details"><CheckCircleFill className="custom-text-color" /> Control diabetics</p>
                    </div>
                    <Form.Label>Select Date</Form.Label>
                    <input className="form-control" style={{maxWidth: 215}} onBlur={updateTestDate} type="date" name="" id="test-date" placeholder="mm/dd/yy" required />
                    <h3 className="mt-2" style={{ color: '#33D1CB'}}>Cost: ${service?.price}</h3>
                    <Button className="mt-2 home-btn" onClick={handleAddToList}>Add To List</Button>
                </Col>
                <Col lg="3">
                    <List list={list}>
                        <Button onClick={handleReviewList} className="home-btn">Review</Button>
                    </List>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetails;