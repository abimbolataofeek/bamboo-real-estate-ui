import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Container } from "react-bootstrap";
import { BsFillPlayFill } from 'react-icons/bs';
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <div>
            <NavigationBar />
            <section>
                <Container>
                    <div>
                        <h2>who we are.</h2>
                    </div>
                    <div>
                        <p>
                            beautiful bamboo. The practical, aesthetic, and spiritual significance of the bamboo is deeply embedded in our culture. What looks weak is strong.
                            Flexibility as it sways with the breeze does not undermine that it’s strongly rooted to the soil. The hollow inside reminds us that though we are rising as a corporate organization to enviable heights, yet we have enormous space to accommodate peoples
                        </p>
                    </div>
                    <div>
                        <Button variant='dark'><BsFillPlayFill />watch video</Button>
                    </div>

                </Container>

            </section>

            <section>
                <Container>
                    <div>
                        <h2>Our Vision</h2>
                    </div>
                    <div>
                        <p>
                            our vision is to become a truly African company
                            with a reputation for INNOVATION and EXCELLENT
                            service delivery.
                        </p>
                    </div>
                </Container>
            </section>

            <Footer />

        </div>

    )
}
export default About;