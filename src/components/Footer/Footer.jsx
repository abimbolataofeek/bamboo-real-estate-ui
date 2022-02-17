import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

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
                            <h6>Our office</h6>
                            <p>nigeria</p>
                            <p>No. 4 Oringwo street, Sani Abacha
                                road, GRA phase III, Port Harcourt.</p>
                            <p>kenya</p>
                            <p>Suite M02, Madonna House Westland, Nairobi. P.O.Box 14196- 00800.</p>
                        </Col>
                        <Col xs={6}>
                            <h6>Start a conversation</h6>
                            <p>email</p>
                            <p>support@bamboogroupng.com</p>
                            <p>phone</p>
                            <p>+234 905 407 8990</p>
                            <p>+234 703 139 6510</p>
                        </Col>

                        <Col>
                            <h6>Follow Us</h6>
                            <p>facebook</p>
                            <p>twitter</p>
                            <p>Linkedin</p>
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