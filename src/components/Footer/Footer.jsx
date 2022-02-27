import React from "react";
import "./Footer.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import { MdLocationOn, MdEmail, MdCall } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { VscTwitter } from 'react-icons/vsc';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-container">
            <section>
                <Container>
                    <Row md={4}>
                        <Col>
                            <img src="/images/logo.png" alt="logo image" />
                        </Col>
                        <Col>
                            <h6 className="footer-heading">Our office</h6>
                            <a href="#" className="a"> <p><MdLocationOn  /> nigeria</p></a>
                            <p>No. 4 Oringwo street, Sani Abacha
                                road, GRA phase III, Port Harcourt.</p>
                            <a href="#" className="a"> <p><MdLocationOn /> kenya</p></a>
                            <p>Suite M02, Madonna House Westland, Nairobi. P.O.Box 14196- 00800.</p>
                        </Col>
                        <Col xs={6}>
                            <h6 className="footer-heading">Start a conversation</h6>
                            
                            <a href="#" className="a"> <p><MdEmail /> email</p></a>
                            <a href="#" className="a"><p>support@bamboogroupng.com</p></a>
                            <a href="#" className="a"> <p><MdCall /> phone</p></a>                            
                            <a href="#" className="a"><p>+234 905 407 8990</p></a> 
                            <a href="#" className="a"> <p>+234 703 139 6510</p></a>
                        </Col>

                        <Col>
                            <h6 className="footer-heading">Follow Us</h6>
                            <a href="#" className="a"> <p><BsFacebook /> facebook</p></a>
                            <a href="#" className="a"> <p><VscTwitter /> twitter</p></a>
                            <a href="#" className="a"> <p><FaLinkedinIn /> Linkedin</p></a>
                            
                        </Col>
                    </Row>
                </Container>

            </section>

        </div>
    )
}
export default Footer;