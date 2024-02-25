import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import SignUp from "./index-sections/SignUp.js";
import Download from "./index-sections/Download";


function About() {
    // const [firstFocus, setFirstFocus] = React.useState(false);
    // const [lastFocus, setLastFocus] = React.useState(false);
    return (
        <>
            <IndexNavbar/>
            <div className="wrapper">
                <LandingPageHeader/>
                <div className="section section-about-us">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="8">
                                <h1 className="title">WELCOME TO SUNCREST</h1>
                                <br/>
                                <h3 className="text-xl-left">
                                    <p>
                                        Hello there! We are Shawn & Silba Ramirez and we’re
                                        excited to share a little bit about the heart and
                                        soul behind Suncrest Landscaping & Design, Inc.
                                        We believe that family is not just a word; it's
                                        a driving force that shapes the foundation of
                                        our business.
                                    </p>
                                    <br/>
                                </h3>
                                <h2 className="text-bold text-sm-center font-italic">
                                    <p>Our Family Story</p>
                                </h2>
                                <h3 className="text-xl-left">
                                    <p>
                                        We started Suncrest Landscaping 25 years ago, my wife and I had the desire to
                                        support our small growing family in a career that would allow some flexibility
                                        with our jobs and allow us to continue volunteering in local youth sports, and
                                        schools.
                                        We took a leap of faith, while my wife was expecting our second child, and
                                        opened Suncrest Landscaping. With a mutual desire for Silba to stay home and
                                        raise our children, opening Suncrest allowed her to work from home and be
                                        available to our growing family and volunteer opportunities. Throughout our 25
                                        years, we raised 3 beautiful daughters who have now all spread their wings in
                                        the workforce and pursued passions that each of them has cultivated. Our oldest
                                        daughter, Sadie has pursued her enthusiasm for sales and works as an account
                                        executive for Cisco. Skylee, our middle daughter has a love for science and is
                                        working for a local medical clinic as a Lab Assistant- in point-of-care testing
                                        department. Shelby, our youngest works as a social worker for the child, family,
                                        and welfare services department. As, our family continued to grow we added in
                                        two son-in-laws, who both work as software engineers, and our first grandchild,
                                        little Sophie Jo.
                                        At Suncrest Landscaping we're more than just a team; we're a close-knit family
                                        working together to bring your landscape beautifications to life. At the
                                        beginning of our journey, we were presented with an opportunity to bid on a new
                                        subdivision going in, we were offered the project and accepted the challenge.
                                        This project was the catapult of all future projects that we were given the
                                        opportunity to bid on.

                                    </p>
                                </h3>
                                <br/>
                                <h2 className="text-bold text-sm-center font-italic">
                                    <p>The Strength of Unity</p>
                                </h2>
                                <h3 className="text-xl-left">
                                    <p>
                                        Family is the backbone of our business. We believe that the unique bond we share
                                        transcends into our work, creating an environment of trust, collaboration, and
                                        shared vision.
                                    </p>
                                </h3>
                                <br/>
                                <h2 className="text-bold text-sm-center font-italic">
                                    <p>Our Commitment to You</p>
                                </h2>
                                <h3 className="text-xl-left">
                                    <p>
                                        Just as we prioritize the well-being and success of our own family, we extend
                                        that commitment to you – our extended family. Whether you're a customer, a
                                        partner, or a part of our community, you're not just a client; you're an
                                        integral part of the Suncrest Landscaping family.
                                    </p>
                                </h3>
                                <br/>
                                <h2 className="text-bold text-sm-center font-italic">
                                    <p>Join Our Family</p>
                                </h2>
                                <h3 className="text-xl-left">
                                    <p>
                                        We invite you to join our family and become a part of the Suncrest Landscaping
                                        story. Together, let's build lasting connections, create memorable experiences,
                                        and celebrate the journey of growth and success.
                                        <br/>
                                        <br/>
                                        Thank you for being a part of our family at Suncrest Landscaping.
                                    </p>
                                </h3>
                            </Col>
                        </Row>
                        <br/>
                        <div className="separator separator-primary"></div>
                        <div className="section-story-overview">
                            <Row>
                                <Col md="6">
                                    <div
                                        className="image-container image-left"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/feature3.jpg") + ")"
                                        }}
                                    >
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div
                                        className="image-container image-right"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/feature5.jpg") + ")"
                                        }}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <SignUp/>
                <Download/>
                <DarkFooter/>
            </div>
        </>
    );
}

export default About;
