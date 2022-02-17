import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { AiOutlineMenuUnfold} from 'react-bootstrap-icons';
const NavigationBar = () => {
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src="/images/logo.png" alt="logo image" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link href="#home">home</Nav.Link>
                                <NavDropdown title="about" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#about1">About1</NavDropdown.Item>
                                    <NavDropdown.Item href="#about2">About2</NavDropdown.Item>
                                    <NavDropdown.Item href="#about3">About3</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#about link">Another About link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="project" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#project1">project1</NavDropdown.Item>
                                    <NavDropdown.Item href="#project3">project2</NavDropdown.Item>
                                    <NavDropdown.Item href="#project3">project3</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#project link">Another project link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#silicon delta">silicon delta </Nav.Link>
                                <Nav.Link href="#contact">contact</Nav.Link>
                                <Nav.Link href="#become an agent">become an agent</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                        <div className="justify-content-right">
                            <Button className="justify-content-end" pill variant="success" style={{ 'border-radius': '50px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-justify-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </Button>
                        </div>

                    </Container>

                </Navbar>

            </>
        </div>
    )
}

export default NavigationBar;