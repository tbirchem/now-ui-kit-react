import React from "react";

// reactstrap components
import {Button, Container, Row, Col, UncontrolledTooltip} from "reactstrap";

// core components

function Download() {
    return (<>

        <div
            className="section section-download"
            data-background-color="black"
            id="download-section"
        >
            <Container>
                <Row className="justify-content-md-center sharing-area text-center">
                    <Col className="text-center" lg="8" md="12">
                        <h3>Follow Us!</h3>
                    </Col>
                    <Col className="text-center" lg="8" md="12">
                        <Button
                            className="btn-neutral btn-icon btn-round"
                            color="black"
                            href="https://instagram.com/birchem_24"
                            id="tooltip86114138"
                            size="lg"
                            target="_blank"
                        >
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip86114138">
                        </UncontrolledTooltip>
                        <Button
                            className="btn-neutral btn-icon btn-round"
                            color="facebook"
                            href="https://www.facebook.com/profile.php?id=100057352882324"
                            id="tooltip735272548"
                            size="lg"
                            target="_blank"
                        >
                            <i className="fab fa-facebook-square"></i>
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip735272548">
                            Follow us on Facebook!
                        </UncontrolledTooltip>
                        <Button
                            className="btn-neutral btn-icon btn-round"
                            color="black"
                            href="https://www.linkedin.com/in/shawn-ramirez-5b9b3213"
                            id="tooltip647117716"
                            size="lg"
                            target="_blank"
                        >
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip647117716">
                        </UncontrolledTooltip>
                    </Col>
                </Row>
            </Container>
        </div>
    </>);
}

export default Download;
