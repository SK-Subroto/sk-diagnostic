import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Check, CheckCircle } from 'react-bootstrap-icons';
import AboutImg from '../../images/about-test.png';

const About = () => {
    return (
        <Container style={{marginTop: 50}}>
            <Row className="pt-5">
                <Col lg="6">
                    <img className="img-fluid rounded-1" src={AboutImg} alt="" />
                </Col>
                <Col lg="6">
                    <h1 className="custom-color-blue mt-3">SK Diagnostic Private Laboratory Analytical Reports</h1>
                    <h5 className="my-4 card-details">
                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide.
                    </h5>
                    <Row>
                        <Col lg="6">
                            <p><CheckCircle className="custom-text-color" /> Unmatched Expertise</p>
                            <p><CheckCircle className="custom-text-color" /> Highest Quality Results</p>
                            <p><CheckCircle className="custom-text-color" /> Latest Equipment</p>
                        </Col>
                        <Col lg="6">
                            <p><CheckCircle className="custom-text-color" /> Led by Passionate Experts</p>
                            <p><CheckCircle className="custom-text-color" /> We Ensure Safe Diagnosis</p>
                            <p><CheckCircle className="custom-text-color" /> Affordable Health Packages</p>
                        </Col>
                    </Row>
                    <Button className="rounded-pill mt-4" style={{ backgroundColor: '#33D1CB'}}>LEARN MORE</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default About;