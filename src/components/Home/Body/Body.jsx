import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
const Body = () => {
    return (
        <div>
            <section style={{  'marginTop': '50px' }} >

                <Container>
                    <Row>
                        <Col>
                            <div >

                            <div >
                                <h1>raising the next african landlords</h1>
                            </div>

                            <div>
                                <p>we provide clients with opportunities to own valuable
                                    commercial and residential land and housing properties
                                    in stategic areas in nigeria.</p>
                            </div>

                            <div>
                                <Button variant="dark">explore</Button>
                            </div>

                            </div>
                        </Col>

                        <Col><div >
                            <img src="/images/section1.png" alt="logo image" />
                        </div></Col>
                    </Row>

                </Container>


            </section>

        </div>
    )
}
export default Body;