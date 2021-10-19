import React, { useEffect } from 'react';
import { Container, Nav, Navbar, Button, Badge } from 'react-bootstrap';
import { ListUl, Person, Power } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Header.css'
import blankProfile from '../../images/blank-profile.png';
import useAuth from '../../hooks/useAuth';
import useServices from '../../hooks/useServices';
import useList from '../../hooks/useList';

const Header = () => {
    const [services] = useServices();
    const [list, setList] = useList(services);
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
    // useEffect(() => {
    //     console.log(Object.keys(getStoredCart()).length)
    // }, [list])
    return (

        <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
            <Container>
                <Navbar.Brand onClick={handleHomePage} style={{ cursor: 'pointer' }}>
                    <img
                        alt=""
                        src="https://www.pngitem.com/pimgs/m/292-2923379_undergraduate-education-logo-for-education-png-transparent-png.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className="fw-bold" style={{ color: 'goldenrod' }}>SK Diagnostic</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/services">Services</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/list"><ListUl /> Review List <Badge bg="success">{list.length}</Badge></Nav.Link>
                        {/* <Nav.Link as={NavLink} activeStyle={activeStyle} to="/login">Login <Person /></Nav.Link> */}
                        {!user?.email ?
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/login">Login <Person /></Nav.Link>
                            :
                            <Navbar.Text>
                                <img src={user.photoURL || blankProfile} alt="" style={{ height: 30, width: 30, borderRadius: 50 }} />
                                <Button className="text-secondary" variant="light" onClick={logOut}>Logout <Power /></Button>
                            </Navbar.Text>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;