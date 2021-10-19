import React, { useState } from 'react';
import { Col, Container, ListGroup, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useList from '../../hooks/useList';
import useServices from '../../hooks/useServices';
import { deleteFromDb } from '../../utilities/saveToLocal';

const TestList = () => {
    const [services] = useServices();
    const [list, setList] = useList(services);
    const history = useHistory();
    // const [list, setList] = useState([1, 2, 3, 4]);

    const handleRemove = key => {
        console.log(key)
        const newCart = list.filter(service => service.id !== key);
        setList(newCart);
        deleteFromDb(key)
    }

    const handleConformation = () => {
        history.push('/conformation');
    }

    let totalQuantity = 0;
    let total = 0;
    for (const service of list) {
        // if (!product.quantity) {
        //     product.quantity = 1;
        // }
        total = total + service.price;
        totalQuantity = list.length;
    }

    const collectionCost = total > 0 ? 150 : 0;
    const tax = (total + collectionCost) * .10;
    const grandTotal = total + collectionCost + tax;

    return (
        <Container style={{marginTop: 50}}>
            <Row className="g-4 m-5">
                <Col lg="8">
                    <ListGroup>
                        {
                            list.map(l => <ListGroup.Item key={l.id} className="mb-3 border rounded">
                                <Row>
                                    <Col lg="10">
                                        <h4 className="custom-color-blue">{l.title}</h4>
                                        <p>Cost <b>${l.price}</b></p>
                                        <p>date: <b>{l.date}</b></p>
                                    </Col>
                                    <Col lg="2">
                                        <Button onClick={() => handleRemove(l.id)} variant="light" className="text-danger float-end">X</Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>)
                        }
                    </ListGroup>
                </Col>
                <Col lg="4">
                    <div className="bg-white text-center p-3 shadow-lg sticky-lg-top">
                        <h3 className="custom-color-blue">Diagnostic Summary</h3>
                        <p>Items Ordered: <b>{totalQuantity}</b></p>
                        <p>Cost: <b>${total}</b></p>
                        <p>Collection Cost: <b>${collectionCost}</b></p>
                        <p>Tax: <b>$20</b></p>
                        <p>Grand Total: <b>${grandTotal}</b></p>
                        <Button onClick={handleConformation} className="home-btn">Confirm</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TestList;