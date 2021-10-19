import React from 'react';
import { Container, Nav, Navbar, Button, Badge, Dropdown } from 'react-bootstrap';
import { BagPlus, ListUl, Person, Power } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Header.css'
import blankProfile from '../../images/blank-profile.png';
import useAuth from '../../hooks/useAuth';


const Header = () => {
 
    const { user, logOut } = useAuth();
    const history = useHistory();

    const handleHomePage = () => {
        history.push('/home');
    }

    const activeStyle = {
        fontWeight: "bold",
        color: "#33D1CB",
        borderBottom: "solid 2px #33D1CB"
    }

    return (

        <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
            <Container fluid>
                <Navbar.Brand onClick={handleHomePage} style={{ cursor: 'pointer' }}>
                    <img
                        alt=""
                        src="https://www.kindpng.com/picc/m/725-7255464_luckily-youngstown-has-an-incredible-resource-for-microscope.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className="fw-bold" style={{ color: '#1F3B64' }}>SK Diagnostic</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/services">Services</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/list"><BagPlus /> Review Test</Nav.Link>
                        {/* toggle loging logout  */}
                        {!user?.email ?
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/login">Login <Person /></Nav.Link>
                            :
                            <Dropdown>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    <img src={user.photoURL || blankProfile} alt="" style={{ height: 30, width: 30, borderRadius: 50 }} />
                                    <span> {user.displayName}</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={logOut}><Power /> Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;