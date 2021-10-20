import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { clearTheCart } from '../../utilities/saveToLocal';
import ThubmsUp from '../../images/Thumbs-Up.gif'

const Conformation = () => {
    const {user} = useAuth();
    const history = useHistory();

    // pop up modal state 
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        history.push('/home');
    }
    const handleShow = () => setShow(true);

    const handleConformForm = (e) => {
        e.preventDefault();
        clearTheCart();
        handleShow();
    }

    return (
        <Container style={{ marginTop: 50 }}>
            <div className="bg-light p-5">
                <h3 className="text-center custom-color-blue mb-5">Please Fill The Form</h3>
                <Form onSubmit={handleConformForm}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Fullname</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" value={user.displayName} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={user.email} />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Gender</Form.Label>
                            <select className="form-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </select>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder="+8801*********" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>


                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className="rounded-pill mt-4" style={{ backgroundColor: '#33D1CB' }} type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

            {/* conformation modal  */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="custom-color-blue">Done</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <img height="200" src={ThubmsUp} alt="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Conformation;