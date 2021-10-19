import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { ArrowRightCircleFill, Plus } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';
import "./Service.css";

const Service = (props) => {
    const { id, title, description, price, photo } = props.service;
    const history = useHistory();

    const handleServiceDetails = () => {
        history.push(`/service/${id}`)
    }
    return (
        <Col>
            <Card className="card-container h-100">
                <Card.Img className="card-img" variant="top" src={photo} />
                <Card.Body>
                    <Card.Title className="custom-color-blue">{title}</Card.Title>
                    <Card.Text className="card-details">
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer">
                    <Button onClick={handleServiceDetails} variant="white" className="card-button fw-bold">FIND OUT DETAILS <ArrowRightCircleFill /></Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;