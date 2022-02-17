import React from "react";
import "./Footer.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import { MdLocationOn,MdEmail, MdCall} from 'react-icons/md';
import {BsFacebook } from 'react-icons/bs';
import {VscTwitter } from 'react-icons/vsc';
import {FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <section>
                <Container>
                    <Row md={4}>
                        <Col>
                            <img src="/images/logo.png" alt="logo image" />
                        </Col>
                        <Col>
                            <h6 className="footer-heading">Our office</h6>
                            <p> <MdLocationOn /> nigeria</p>
                            <p>No. 4 Oringwo street, Sani Abacha
                                road, GRA phase III, Port Harcourt.</p>
                            <p><MdLocationOn />kenya</p>
                            <p>Suite M02, Madonna House Westland, Nairobi. P.O.Box 14196- 00800.</p>
                        </Col>
                        <Col xs={6}>
                            <h6 className="footer-heading">Start a conversation</h6>
                            <p><MdEmail/>email</p>
                            <p>support@bamboogroupng.com</p>
                            <p><MdCall/>phone</p>
                            <p>+234 905 407 8990</p>
                            <p>+234 703 139 6510</p>
                        </Col>

                        <Col>
                            <h6 className="footer-heading">Follow Us</h6>
                            <p> <BsFacebook className="icons-color" /> facebook</p>
                            <p><VscTwitter/>twitter</p>
                            <p><FaLinkedinIn/>Linkedin</p>
                            <p>+234 905 407 8990</p>
                            <p>+234 703 139 6510</p>
                        </Col>
                    </Row>
                </Container>

            </section>

        </div>
    )
}
export default Footer;