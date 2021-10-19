import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);

    // fetch course
    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <Container fluid>
            <Row className="">
                {/* <Col lg="6">
                    <div className="mx-5" style={{ marginTop: 100 }}>
                        <h1>Welcome To Sk Academy</h1>
                        <p className="fs-5 my-4">Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.</p>
                        <Button
                            className="py-2 mb-4"
                            // onClick={handleBrowseCourse}
                            style={{ backgroundColor: '#D32F2F', border: 0 }}
                        >Browse Course</Button>
                    </div>
                </Col> */}
                <Col lg="12">
                    <img className="img-fluid" src="https://novalab.bold-themes.com/nova-a/wp-content/uploads/sites/7/2020/06/hero-home-01.jpg" alt="" />
                </Col>
            </Row>
            <Container>
                <div className="text-center mt-5">
                    <p>SERVICES</p>
                    <h1>Laboratory Diagnostics</h1>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.slice(0,6).map(service => <Service key={service.id} service={service} />)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default Home;