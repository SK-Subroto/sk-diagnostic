import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
    const { registerNewUser, error, setError } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        else {
            registerNewUser(email, password, name);
            history.push('/login');
        }
    }

    return (
        <Container style={{ marginTop: 50 }}>
            {/* <h4 className="text-secondary text-center mb-4">Log In to Your Account!</h4> */}
            <div className="pt-5">
                <div className="py-3 px-5 mx-auto alert alert-success" style={{ maxWidth: 400 }}>
                    <h3 className="text-center mb-4">Registration</h3>
                    <Form onSubmit={handleRegistration}>
                        <Form.Group className="mb-3" controlId="formBasicFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onBlur={handleNameChange} type="text" placeholder="Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="d-flex flex-column justify-content-center">
                            <Button className="rounded-pill mt-4" style={{ backgroundColor: '#33D1CB' }} type="submit">
                                Sign Up
                            </Button>
                            <Link to="/login" className="text-center mt-2">Already have an account</Link>
                            <hr />
                            <p className="text-center">OR</p>
                            <Button className="text-white" variant="success">
                                <Google /> <span className="fw-bold">Sign In With Google</span>
                            </Button>
                        </div>
                    </Form>
                    <p className="text-danger">{error}</p>
                </div>
            </div>
        </Container>
    );
};

export default Registration;