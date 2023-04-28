import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">
                                <Link to="/category/0">Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets">
                                <FaRegUserCircle style={{ fontSize: '2rem' }}></FaRegUserCircle>
                            </Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                {user ?
                                    <Button variant="secondary">Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;