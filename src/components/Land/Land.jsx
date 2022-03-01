import React from "react";
import "./land.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Footer from "../Footer/Footer";

const House = () => {
    return (
        <div>
            <NavigationBar />
            <section >
                <Container>
                    <div className="housing-section">
                        <h1>land</h1>
                    </div>
                </Container>
            </section>
                <section className="estate-project">
                <Container>
                    <div className="some-of-our">
                        <div className="some-of-our-text"><h3>Some of our estate project</h3></div>
                        <div className="buttons">
                            <Button variant="dark">All</Button>{' '}
                            <Button variant="outline-dark">Port-harcourt</Button>{' '}
                            <Button variant="outline-dark">Abuja</Button>{' '}
                        </div>
                    </div>

                    <div className="image-container">
                        <Container class="d-flex justify-content-center">
                            <div className="row-containers">
                                <Row>
                                    <Col md="auto">
                                        <div >
                                            <Card>
                                                <Card.Img src="/images/house-img1.png" alt="property image" />
                                                <Card.Body>
                                                    <Card.Title>David city phase II</Card.Title>
                                                    <Card.Text>consectetur adipiscing</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Col>

                                    <Col md="auto">
                                        <div>
                                            <Card>
                                                <Card.Img src="/images/house-img2.png" alt="property image" />
                                                <Card.Body>
                                                    <Card.Title>Nothern park hills</Card.Title>
                                                    <Card.Text>consectetur adipiscing</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>

                                    </Col>
                                    <Col md="auto">
                                        <div>
                                            <Card>
                                                <Card.Img src="/images/house-img3.png" alt="property image" />
                                                <Card.Body>
                                                    <Card.Title>Kigali Heights</Card.Title>
                                                    <Card.Text>consectetur adipiscing</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>

                                    </Col>
                                    <Col md="auto">
                                        <div>
                                            <Card>
                                                <Card.Img src="/images/house-img4.png" alt="property image" />
                                                <Card.Body>
                                                    <Card.Title>David city phase II</Card.Title>
                                                    <Card.Text>consectetur adipiscing</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>


                                    </Col>

                                </Row>

                            </div>

                            <div className="row-containers">
                                <Row>
                                    <Col md="auto">
                                        <div>
                                            <Card>
                                                <Card.Img src="/images/house-img5.png" alt="property image" />
                                                <Card.Body>
                                                    <Card.Title>Kigali Heights</Card.Title>
                                                    <Card.Text>consectetur adipiscing</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Col>

                                    <Col md="auto">
                                        <div>
                                            <Card>
                                                <Card.Img src="/images/house-img6.png" alt="property image" />
                                                <Card.Body>
                                                    <Card.Title>David city phase II</Card.Title>
                                                    <Card.Text>consectetur adipiscing</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Col>

                                    <Col md="auto">
                                        <div>
                                            <Card>
                                                <Card.Img src="/images/house-img7.png" alt="property image" />
                                                <Card.Body>
                                                    <Card.Title>David city phase II</Card.Title>
                                                    <Card.Text>consectetur adipiscing</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Col>

                                    <Col md="auto">
                                        <div>
                                            <Card>
                                                <Card.Img src="/images/house-img6.png" alt="property image" />
                                                <Card.Body>
                                                    <Card.Title>Kigali Heights</Card.Title>
                                                    <Card.Text>consectetur adipiscing</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="row-containers">
                                <Row>
                                    <Col md="auto">
                                        <div >
                                            <Card>
                                                <Card.Img src="/images/house-img1.png" alt="property image" />
                                                <Card.Body>
                                                    <Card.Title>David city phase II</Card.Title>
                                                    <Card.Text>consectetur adipiscing</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Col>

                                    <Col md="auto">
                                        <div>
                                            <Card>
                                                <Card.Img src="/images/house-img2.png" alt="property image" />
                                                <Card.Body>
                                                    <Card.Title>Nothern park hills</Card.Title>
                                                    <Card.Text>consectetur adipiscing</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>

                                    </Col>
                                    <Col md="auto">
                                        <div>
                                            <Card>
                                                <Card.Img src="/images/house-img3.png" alt="property image" />
                                                <Card.Body>
                                                    <Card.Title>Kigali Heights</Card.Title>
                                                    <Card.Text>consectetur adipiscing</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>

                                    </Col>
                                    <Col md="auto">
                                        <div>
                                            <Card>
                                                <Card.Img src="/images/house-img4.png" alt="property image" />
                                                <Card.Body>
                                                    <Card.Title>David city phase II</Card.Title>
                                                    <Card.Text>consectetur adipiscing</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>


                                    </Col>

                                </Row>
                            </div>



                        </Container>
                    </div>
                </Container>
            </section>
            <Footer />

        </div >
    )
}
export default House;