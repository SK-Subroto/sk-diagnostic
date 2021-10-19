import React, { useState } from 'react';
import { Col, Container, ListGroup, Row, Button } from 'react-bootstrap';
import { Backspace } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';
import useList from '../../hooks/useList';
import useServices from '../../hooks/useServices';
import { deleteFromDb } from '../../utilities/saveToLocal';
import List from '../List/List';

const TestList = () => {
    const history = useHistory();
    const [services] = useServices();
    const [list, setList] = useList(services);

    const handleRemove = key => {
        const newCart = list.filter(service => service.id !== key);
        setList(newCart);
        deleteFromDb(key)
    }

    const handleConformation = () => {
        history.push('/conformation');
    }

    return (
        <Container style={{marginTop: 50}}>
            <Row className="g-4 m-5">
                <Col lg="8">
                    <ListGroup>
                        {!list.length ?
                            <div>
                                <h2 className="text-secondary text-center">List Is Empty</h2>
                            </div>
                            :
                            list.map(l => <ListGroup.Item key={l.id} className="mb-3 border rounded">
                                <Row>
                                    <Col lg="10">
                                        <h4 className="custom-color-blue">{l.title}</h4>
                                        <p>Cost <b>${l.price}</b></p>
                                        <p>date: <b>{l.date}</b></p>
                                    </Col>
                                    <Col lg="2">
                                        <Button onClick={() => handleRemove(l.id)} variant="light" className="text-danger float-end rounded-circle"><Backspace /></Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>)
                        }
                    </ListGroup>
                </Col>
                <Col lg="4">
                    <List list={list}>
                        {!list.length || <Button onClick={handleConformation} className="home-btn">Confirm</Button>}                       
                    </List>
                </Col>
            </Row>
        </Container>
    );
};

export default TestList;