import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand className='fw-bold' as={Link} to="/">Todo App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {!user ? <Nav.Link className='fw-bold' as={Link} to="/login">Login</Nav.Link> :
                            <>
                                <Nav.Link as={Link} to="/manage-profile">Manage Profile</Nav.Link>
                                <Button onClick={() => signOut(auth)} className="btn btn-light fw-bold" >SignOut</Button></>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;