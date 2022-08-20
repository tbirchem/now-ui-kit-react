import React from "react";

// reactstrap components
import {
  Card, CardHeader, CardBody, NavItem, NavLink, Nav, TabContent, TabPane, Container, Row, Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  return (<>
    <div className="section section-basic">
      <h1 className=" title text-center"> Our Services </h1>
      <hr
          style={{
            background: 'black', color: 'black', borderColor: 'black', height: '0.1px', width:'78%'
          }}/>
      <br/>
      <br/>
      <Container>
        <br/>
        <br/>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                    >
                      <i className="now-ui-icons objects_umbrella-13"/>
                      Water Features
                    </NavLink>
                  </NavItem>
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
                    <div
                        style={{
                          backgroundImage: "url(" + require("assets/img/bg11.jpg").default + ")",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          minHeight: "250px",
                        }}/>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                    >
                      <i className="now-ui-icons ui-2_settings-90"/>
                      Landscape Design
                    </NavLink>
                  </NavItem>
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
                    <div
                        style={{
                          backgroundImage: "url(" + require("assets/img/bg11.jpg").default + ")",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          minHeight: "250px",
                        }}/>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                    >
                      <i className="now-ui-icons ui-2_settings-90"/>
                      Commercial
                    </NavLink>
                  </NavItem>
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
                    <div
                        style={{
                          backgroundImage: "url(" + require("assets/img/bg11.jpg").default + ")",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          minHeight: "250px",
                        }}/>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                    >
                      <i className="now-ui-icons ui-2_settings-90"/>
                      Outdoor Structures
                    </NavLink>
                  </NavItem>
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
                    <div
                        style={{
                          backgroundImage: "url(" + require("assets/img/bg11.jpg").default + ")",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          minHeight: "250px",
                        }}/>
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
