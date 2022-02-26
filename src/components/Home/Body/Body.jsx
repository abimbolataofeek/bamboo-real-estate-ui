import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import './body.css'

const Body = () => {
    return (
        <div>
            <section style={{ 'marginTop': '50px' }} >

                <Container >
                    <Row>
                        <Col>
                            <div style={{ 'width': '60%', 'margin': 'auto' }}>

                                <div className="raising-text">
                                    <h1>raising the next african landlords</h1>
                                </div>

                                <div className="we-provide-text" >
                                    <p>we provide clients with opportunities to own valuable
                                        commercial and residential land and housing properties
                                        in stategic areas in nigeria.</p>
                                </div>

                                <div className="explore-btn">
                                    <Button variant="dark">explore</Button>
                                </div>

                            </div>
                        </Col>

                        <Col><div >
                            <img src="/images/section1.png" alt="property-image" />
                        </div></Col>
                    </Row>


                </Container>
            </section>


            <section className="our-project-sec">
                <Container>
                    <div className="our-project">
                        <div>
                            <h1 className="our-project-h1">our project</h1>
                        </div>
                        <div className="our-project-p">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis amet nunc risus, vitae sed pharetra.Pharetra, aliquam vulputat</p>
                        </div>
                        <div>
                            <Container className="container-house-plot" >
                                <div className="bg-div">
                                    <figure>
                                        {/* <img src="/images/our-project-bg.png" alt="" /> */}
                                        <figcaption>
                                            <div className="row-div">
                                                <Row >

                                                    <Col>
                                                        <div>
                                                            <figure>
                                                                <img src="/images/section2.png" alt="property-img" />
                                                                <figcaption className="plot-image-text"><h4>plot</h4></figcaption>
                                                            </figure>

                                                        </div>
                                                    </Col>

                                                    <Col>
                                                        <div>
                                                            <figure>
                                                                <img src="/images/section02.png" alt="property-img" />
                                                                <figcaption className="house-image-text"><h4>house</h4></figcaption>
                                                            </figure>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div>
                                                <Button className="download-btn" size="md" variant="success">download our brochure</Button>
                                            </div>

                                        </figcaption>
                                    </figure>


                                </div>


                            </Container>
                        </div>

                    </div>

                </Container>
            </section>
            {/* <div>
                <img src="/images/image4.png" alt="property-img" />
            </div> */}

            <section>
                <Container>
                    <div className="our-office-text">
                        <h1>our office</h1>
                        <p className="our-office-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis amet nunc,
                            vitae sed pharetra. Pharetra, aliquam vulputate platea quisque mi, purus hac ac.
                            At eu vel risus, purus, facilisi ut aliquam. Commodo habitant laoreet id eget
                        </p>
                    </div>

                    <div>
                        <img src="/images/image5.png" alt="property-img" />
                    </div>


                </Container>
            </section>

            <section className="client-say-section">
                <Container>
                    <div className="client-say-h1"><h1>what our client say</h1></div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit diam arcu et, sit integer dui ipsum diam.
                            Pellentesque odio dictumst quis sollicitudin tincidunt sit rutrum.
                        </p>
                    </div>
                    <div>
                        <Container>
                            <Row>
                                <Col> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit  diam arcu et, sit integer dui ipsum diam. Pellentesque odio  dictumst quis sollicitudin tincidunt sit rutrum.  consectetur  adipiscing elit. Velit diam arcu et, sit integer dui ipsum diam
                                </p>

                                    <div>
                                        <div><img src="/images/pelumi.png" alt="pelumi-img" /> </div>
                                        <h6>adekoya pelumi</h6>
                                        <p>ventures platform</p>
                                    </div>
                                </Col>
                                <Col> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit  diam arcu et, sit integer dui ipsum diam. Pellentesque odio  dictumst quis sollicitudin tincidunt sit rutrum.  consectetur  adipiscing elit. Velit diam arcu et, sit integer dui ipsum diam
                                </p>
                                    <div>
                                        <div><img src="/images/chuks.png" alt="chuks-img" /></div>
                                        <h6>chuks festus</h6>
                                        <p>facebook</p>
                                    </div>
                                </Col>

                            </Row>



                        </Container>
                    </div>

                </Container>

            </section>

        </div>
    )
}
export default Body;