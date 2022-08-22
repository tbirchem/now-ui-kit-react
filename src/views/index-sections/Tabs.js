import React from "react";

// reactstrap components
import {
    Card, CardHeader, CardBody, NavItem, NavLink, Nav, TabContent, TabPane, Container, Row, Col,
} from "reactstrap";

// core components

function Tabs() {
    const [iconPills, setIconPills] = React.useState("1");

    return (<>
            <div className=" section section-basic" id="services">
                <h1 className=" title text-center"> Our Services </h1>
                <div className="demo">
                <hr
                    style={{
                        background: 'black', color: 'black', borderColor: 'black', height: '0.1px', width:"78%"
                }}/>
                <br/>
                <br/>
                </div>
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md="12" xl="12">
                            <Card>
                                <CardHeader>
                                    <Nav className="justify-content-center" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "1" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("1");
                                                }}
                                            >
                                                <i className="now-ui-icons objects_umbrella-13"></i>
                                                Water Features
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "2" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("2");
                                                }}
                                            >
                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                Fire Features
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "3" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("3");
                                                }}
                                            >
                                                <i className="now-ui-icons shopping_shop"></i>
                                                Outdoor Structures & Kitchens
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "4" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("4");
                                                }}
                                            >
                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                Retaining Walls & Fencing
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "5" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("5");
                                                }}
                                            >
                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                Landscape Design
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "6" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("6");
                                                }}
                                            >
                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                Patio & Walkways
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "7" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("7");
                                                }}
                                            >
                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                Landscape Installation
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "8" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("8");
                                                }}
                                            >
                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                Residental
                                            </NavLink>
                                        </NavItem>
                                        {/*<NavItem>*/}
                                        {/*    <NavLink*/}
                                        {/*        className={iconPills === "9" ? "active" : ""}*/}
                                        {/*        href="#pablo"*/}
                                        {/*        onClick={(e) => {*/}
                                        {/*            e.preventDefault();*/}
                                        {/*            setIconPills("9");*/}
                                        {/*        }}*/}
                                        {/*    >*/}
                                        {/*        <i className="now-ui-icons ui-2_settings-90"></i>*/}
                                        {/*        Residential*/}
                                        {/*    </NavLink>*/}
                                        {/*</NavItem>*/}
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent
                                        className="text-center"
                                        activeTab={"iconPills" + iconPills}
                                    >
                                        <TabPane tabId="iconPills1">
                                            <p>
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                                the nucleus.
                                            </p>
                                            <br/>
                                            <br/>
                                            <div className="hero-images-container-2">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/bg11.jpg")}
                                                />
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="iconPills2">
                                            <p>
                                                I will be the leader of a company that ends up being
                                                worth billions of dollars, because I got the answers. I
                                                understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to
                                                show people, this is the level that things could be at.
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at.
                                            </p>
                                            <br/>
                                            <br/>
                                            <div className="hero-images-container-2">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/bg11.jpg")}
                                                /></div>
                                        </TabPane>
                                        <TabPane tabId="iconPills3">
                                            <p>
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                                the nucleus.
                                            </p>
                                            <br/>
                                            <br/>
                                            <div className="hero-images-container-2">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/bg11.jpg")}
                                                /></div>
                                        </TabPane>
                                        <TabPane tabId="iconPills4">
                                            <p>
                                                "I will be the leader of a company that ends up being
                                                worth billions of dollars, because I got the answers. I
                                                understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to
                                                show people, this is the level that things could be at."
                                            </p>
                                            <br/>
                                            <br/>
                                            <div className="hero-images-container-2">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/bg11.jpg")}
                                                /></div>
                                        </TabPane>
                                        <TabPane tabId="iconPills5">
                                            <p>
                                                "I will be the leader of a company that ends up being
                                                worth billions of dollars, because I got the answers. I
                                                understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to
                                                show people, this is the level that things could be at."
                                            </p>
                                            <br/>
                                            <br/>
                                            <div className="hero-images-container-2">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/bg11.jpg")}
                                                /></div>
                                        </TabPane>
                                        <TabPane tabId="iconPills6">
                                            <p>
                                                "I will be the leader of a company that ends up being
                                                worth billions of dollars, because I got the answers. I
                                                understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to
                                                show people, this is the level that things could be at."
                                            </p>
                                            <br/>
                                            <br/>
                                            <div className="hero-images-container-2">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/bg11.jpg")}
                                                /></div>
                                        </TabPane>
                                            <TabPane tabId="iconPills7">
                                                <p>
                                                    "I will be the leader of a company that ends up being
                                                    worth billions of dollars, because I got the answers. I
                                                    understand culture. I am the nucleus. I think that’s a
                                                    responsibility that I have, to push possibilities, to
                                                    show people, this is the level that things could be at."
                                                </p>
                                                <br/>
                                                <br/>
                                                <div className="hero-images-container-2">
                                                    <img
                                                        alt="..."
                                                        src={require("assets/img/bg11.jpg")}
                                                    /></div>
                                        </TabPane>
                                        <TabPane tabId="iconPills8">
                                            <p>
                                                "I will be the leader of a company that ends up being
                                                worth billions of dollars, because I got the answers. I
                                                understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to
                                                show people, this is the level that things could be at."
                                            </p>
                                            <br/>
                                            <br/>
                                            <div className="hero-images-container-2">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/bg11.jpg")}
                                                /></div>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>);
}

export default Tabs;
