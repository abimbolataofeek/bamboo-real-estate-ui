import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Container, Card } from "react-bootstrap";
import Footer from "../Footer/Footer";
const Land = () => {
    return (
        <div>
            <section>
                <NavigationBar />
                <Container>
                    <img src="" alt="" />
                    <h1>land</h1>
                </Container>
            </section>
            <section>
                <Container>
                    <div>
                        <h3>Some of our estate project</h3>
                    </div>
                    <div>
                        <Button varient="dark" size='sm'>All</Button>
                        <Button varient='light' size='sm'>Port-Harcourt</Button>
                        <Button varient='light'>Abuja</Button>
                    </div>
                    <Container>
                        <div>
                            <Card>
                                <Card.Img src="/images/house-img1.png" alt="property image" />
                                <Card.Body>
                                    <Card.Title>David city phase II</Card.Title>
                                    <Card.Text>consectetur adipiscing</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                            <Card>
                                <Card.Img src="/images/house-img2.png" alt="property image" />
                                <Card.Body>
                                    <Card.Title>Nothern park hills</Card.Title>
                                    <Card.Text>consectetur adipiscing</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                            <Card>
                                <Card.Img src="/images/house-img3.png" alt="property image" />
                                <Card.Body>
                                    <Card.Title>Kigali Heights</Card.Title>
                                    <Card.Text>consectetur adipiscing</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                            <Card>
                                <Card.Img src="/images/house-img4.png" alt="property image" />
                                <Card.Body>
                                    <Card.Title>David city phase II</Card.Title>
                                    <Card.Text>consectetur adipiscing</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                            <Card>
                                <Card.Img src="/images/house-img5.png" alt="property image" />
                                <Card.Body>
                                    <Card.Title>Kigali Heights</Card.Title>
                                    <Card.Text>consectetur adipiscing</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                            <Card>
                                <Card.Img src="/images/house-img6.png" alt="property image" />
                                <Card.Body>
                                    <Card.Title>David city phase II</Card.Title>
                                    <Card.Text>consectetur adipiscing</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                            <Card>
                                <Card.Img src="/images/house-img7.png" alt="property image" />
                                <Card.Body>
                                    <Card.Title>David city phase II</Card.Title>
                                    <Card.Text>consectetur adipiscing</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                            <Card>
                                <Card.Img src="/images/house-img8.png" alt="property image" />
                                <Card.Body>
                                    <Card.Title>Kigali Heights</Card.Title>
                                    <Card.Text>consectetur adipiscing</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    </Container>


                </Container>
            </section>
            <Footer />

        </div>
    )
}
export default Land;