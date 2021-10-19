import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    const history =useHistory();

    const handleBrowseService =() => {
        history.push('/services');
    }
 
    // fetch course
    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <Container fluid>
            <div className="home-container">
                <Container>
                    <Row className="">
                        <Col lg="6">
                            <div className="" style={{ marginTop: 100 }}>
                                <h1 className="mt-5 home-text"><span className="custom-text-color">SK Diagnostic</span> for Medical Testing</h1>
                                <div className="my-5">
                                    <p className="home-details"><CheckCircleFill className="custom-text-color" /> Led by Passionate Experts</p>
                                    <p className="home-details"><CheckCircleFill className="custom-text-color" /> Safe diagnoses and effective therapies</p>
                                    <p className="home-details"><CheckCircleFill className="custom-text-color" /> Affordable Health Packages</p>
                                </div>
                                <Button
                                    className="py-2 mb-4 home-btn"
                                onClick={handleBrowseService}
                                >Browse Service</Button>
                            </div>
                        </Col>
                        <Col lg="6">
                            {/* <img className="img-fluid" src="https://novalab.bold-themes.com/nova-a/wp-content/uploads/sites/7/2020/06/hero-home-01.jpg" alt="" /> */}
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <div className="text-center mt-5">
                    <p className="service-title">SERVICES</p>
                    <h1 className="custom-color-blue mb-5">Laboratory Diagnostics</h1>
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