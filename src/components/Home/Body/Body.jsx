import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
// import image4 from './images/image4.png';

const Body = () => {
    return (
        <div>
            <section style={{ 'marginTop': '50px' }} >

                <Container >
                    <Row>
                        <Col>
                            <div style={{ 'width': '60%', 'margin': 'auto' }}>

                                <div >
                                    <h1 style={{ 'textAlign': 'left' }}>raising the next african landlords</h1>
                                </div>

                                <div >
                                    <p style={{ 'textAlign': 'left' }}>we provide clients with opportunities to own valuable
                                        commercial and residential land and housing properties
                                        in stategic areas in nigeria.</p>
                                </div>

                                <div style={{ 'textAlign': 'left' }}>
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


            <section>
                <Container>
                    <div>
                        <div>
                            <h1>our project</h1>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis amet nunc risus, vitae sed pharetra.Pharetra, aliquam vulputat</p>
                        </div>
                        <div>
                            <Container>
                                <Row >
                                    <Col> <img src="/images/section2.png" alt="property-img" /></Col>
                                    <Col> <img src="/images/section02.png" alt="property-img" /></Col>
                                </Row>
                                <div>
                                    <Button variant="success">download our brochure</Button>
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
                    <div><h1>our office</h1></div>
                    <div>
                        <p>
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

            <section>
                <Container>
                    <div><h1>what our client say</h1></div>
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