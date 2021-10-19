import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    // fetch course
    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <Container className="px-lg-5" style={{marginTop: 50}}>
            <h2 className="custom-color-blue text-center py-5">All Diagnostics</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </Row>
        </Container>
    );
};

export default Services;