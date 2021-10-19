import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { HouseDoor } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();

    const handleGoHome = () => {
        history.push('./home');
    }
    return (
        <Container className="pt-5" style={{ marginTop: 50}}>
            <div className="alert alert-info text-center" style={{ height: 400}}>
                <h2 style={{ marginTop: 100 }}>Page Not Found</h2>
                <h1>404</h1>
                <Button variant="info" className="text-white" onClick={handleGoHome}> <HouseDoor /> Go to homepage</Button>
            </div>
        </Container>
    );
};

export default NotFound;