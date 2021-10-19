import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signInUsingGoogle, processLogin, setIsLoading, error } = useAuth();
    const location = useLocation();
    // console.log('came from:', location.state?.from)
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';


    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleSimpleSignIn = (e) => {
        e.preventDefault();
        console.log(email, password);
        processLogin(email, password);
    }


    return (
        <Container className="mt-5">
            {/* <h4 className="text-secondary text-center mb-4">Log In to Your Account!</h4> */}
            <div className="py-3 px-5 mx-auto alert alert-danger" style={{ maxWidth: 400 }}>
                <h3 className="text-center mb-4">Login</h3>
                <Form onSubmit={handleSimpleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className="d-flex flex-column justify-content-center">
                        <Button variant="success" type="submit" style={{ backgroundColor: '#D32F2F', border: 0 }}>
                            Sign In
                        </Button>
                        <br />
                        <Link className="text-center" to="/registration">Create a new account</Link>
                        <hr />
                        <p className="text-center">OR</p>
                        <Button className="text-success" variant="light" onClick={handleGoogleSignIn}>
                            <Google /> <span className="fw-bold">Sign In With Google</span>
                        </Button>
                    </div>
                </Form>
                <p className="text-danger">{error}</p>
            </div>
        </Container>
    );
};

export default Login;