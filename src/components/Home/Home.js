import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();

    const handleBrowseService = () => {
        history.push('/services');
    }

    // fetch service
    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <Container fluid>
            <section className="home-container">
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

                        </Col>
                    </Row>
                </Container>
            </section>

            {/* services  */}
            <Container>
                <div className="text-center mt-5">
                    <p className="service-title">SERVICES</p>
                    <h1 className="custom-color-blue mb-5">Laboratory Diagnostics</h1>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.slice(0, 6).map(service => <Service key={service.id} service={service} />)
                    }
                </Row>
            </Container>
            
            {/* customer review  */}
            <section className="container px-lg-5 mt-5">
                <h1 className="text-center custom-color-blue mb-4">Happy Clients says</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-5">
                    <div className="col">
                        <div className="card rounded shadow-lg">
                            <img className="rounded-circle client-img" src="https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg" alt="..." />
                            <div className="card-body text-center">
                                <p className="text-secondary card-text px-3">One of the best service of the segment.Eyecache design is the most attractive part of the experience.The power delivery of the
                                    result.</p>
                                <small className="custom-text-color fw-bold fs-5 d-block">Thomas Miles</small>
                                <small className="card-details">Banker</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card rounded shadow-lg">
                            <img className="rounded-circle client-img" src="https://cdn.pixabay.com/photo/2015/08/25/10/40/ben-knapen-906550_960_720.jpg" alt="..." />
                            <div className="card-body text-center">
                                <p className="text-secondary card-text px-3">Your full service lab for clinical trials. Our mission is to ensure the generation of accurate and precise findings. Most statisfictions</p>
                                <small className="custom-text-color fw-bold fs-5 d-block">Brays Walker</small>
                                <small className="card-details">Banker</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card rounded shadow-lg">
                            <img className="rounded-circle client-img" src="https://s3.amazonaws.com/arc-authors/washpost/50eda441-600e-4fa5-9f0d-6cb1714ac367.png" alt="..." />
                            <div className="card-body text-center">
                                <p className="text-secondary card-text px-3">Should give 4.5 ratings to this lab because of their fasilities, safety, and comfort, thanks to you.I really
                                    love this very much. Keep it up.</p>
                                <small className="custom-text-color fw-bold fs-5 d-block">Perterson Mike</small>
                                <small className="card-details">Engineer</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact us  */}
            <Container className="mt-5  px-lg-5">
                <h1 className="text-center custom-color-blue mb-5">Contact Us</h1>
                <Row className="g-3">
                    <Col lg="6" className="px-3">
                        <h1 className="text-secondary">Testing by Our Expert Lab Scientists</h1>
                        <p className="text-secondary fs-4 mt-4">Bring to the table win-win survival strategies to ensure proactive domination and at the end of the day.</p>
                    </Col>
                    <Col lg="6">
                        <div className="px-lg-5" style={{ backgroundColor: "#59D7D3", color: "white", borderRadius: 10 }}>
                            <Form className="p-5">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="fs-4">Name</Form.Label>
                                    <Form.Control className="rounded-pill" type="email" placeholder="Enter Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="fs-4">Email</Form.Label>
                                    <Form.Control className="rounded-pill" type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="fs-4">Text</Form.Label>
                                    <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                                    </FloatingLabel>
                                </Form.Group>

                                <Button className="home-btn px-3" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Home;