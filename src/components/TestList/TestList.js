import React, { useState } from 'react';
import { Col, Container, ListGroup, Row, Button } from 'react-bootstrap';
import useList from '../../hooks/useList';
import useServices from '../../hooks/useServices';
import { deleteFromDb } from '../../utilities/saveToLocal';

const TestList = () => {
    const [services] = useServices();
    const [list, setList] = useList(services);
    // const [list, setList] = useState([1, 2, 3, 4]);

    const handleRemove = key => {
        console.log(key)
        const newCart = list.filter(service => service.id !== key);
        setList(newCart);
        deleteFromDb(key)
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
                            list.map(l => <ListGroup.Item key={l.id} className="mb-3">
                                <Row>
                                    <Col lg="10">
                                        <h4>{l.title}</h4>
                                        <p>Cost ${l.price}</p>
                                        <p>date: {l.date}</p>
                                    </Col>
                                    <Col lg="2">
                                        <Button onClick={() => handleRemove(l.id)} className="float-end">X</Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>)
                        }
                    </ListGroup>
                </Col>
                <Col lg="4">
                    <div className="bg-white text-center p-3">
                        <h3>Diagnostic Summary</h3>
                        <p>Items Ordered: {totalQuantity}</p>
                        <p>Cost: ${total}</p>
                        <p>Collection Cost: ${collectionCost}</p>
                        <p>Tax: $20</p>
                        <p>Grand Total: ${grandTotal}</p>
                        <Button>Confirm</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TestList;