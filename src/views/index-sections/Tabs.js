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
                        background: 'black', color: 'black', borderColor: 'black', height: '0.1px', width: "78%"
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
                                            Landscape Lighting
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
                                            Retaining Walls & Fencing
                                        </NavLink>
                                    </NavItem>
                                    {/*<NavItem>*/}
                                    {/*    <NavLink*/}
                                    {/*        className={iconPills === "5" ? "active" : ""}*/}
                                    {/*        href="#pablo"*/}
                                    {/*        onClick={(e) => {*/}
                                    {/*            e.preventDefault();*/}
                                    {/*            setIconPills("5");*/}
                                    {/*        }}*/}
                                    {/*    >*/}
                                    {/*        <i className="now-ui-icons ui-2_settings-90"></i>*/}
                                    {/*        Landscape Design*/}
                                    {/*    </NavLink>*/}
                                    {/*</NavItem>*/}
                                    <NavItem>
                                        <NavLink
                                            className={iconPills === "6" ? "active" : ""}
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIconPills("6");
                                            }}
                                        >
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
                                            Residential
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={iconPills === "9" ? "active" : ""}
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIconPills("9");
                                            }}
                                        >
                                            Water Feature
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
                                            Through our exceptional landscape lighting, we accentuate the natural elements, architectural structures, and focal points of your property,
                                            ensuring that every feature is beautifully illuminated. Whether you seek a subtle, romantic ambiance or a vibrant,
                                            energetic atmosphere, we offer a comprehensive range of lighting techniques, including uplighting, downlighting,
                                            and pathway lighting, to create the perfect mood. With our commitment to quality craftsmanship, innovative design,
                                            and superior customer service, we are dedicated to enhancing your landscape and providing a remarkable outdoor living experience.
                                        </p>
                                        <br/>
                                        <br/>
                                        <div className="hero-images-container-2">
                                            <img
                                                alt="..."
                                                src={require("assets/img/lighting.jpg")}
                                            />
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="iconPills2">
                                        <p>
                                            At Suncrest, we specialize in creating captivating outdoor spaces with our exceptional fire features.
                                            Our skilled team designs and installs custom fire pits, fireplaces, and fire bowls that become mesmerizing focal
                                            points and cozy gathering spots in your landscape. With a commitment to safety, quality, and craftsmanship,
                                            we utilize premium materials and adhere to industry standards to ensure the durability and reliability of our fire features.
                                            Transform your outdoor living space into a warm and inviting sanctuary, where the enchanting glow of fire creates an ambiance of
                                            relaxation and connection.
                                        </p>
                                        <br/>
                                        <br/>
                                        <div className="hero-images-container-2">
                                            <img
                                                alt="..."
                                                src={require("assets/img/firefeatures.jpg")}
                                            /></div>
                                    </TabPane>
                                    <TabPane tabId="iconPills3">
                                        <p>
                                            Our skilled team designs and constructs custom outdoor structures such as pergolas, gazebos, and pavilions, providing shade,
                                            architectural beauty, and functional spaces in your landscape. Additionally, our outdoor kitchens are meticulously designed to
                                            meet your culinary desires, featuring top-of-the-line appliances and durable materials. With a focus on quality craftsmanship
                                            and attention to detail, we ensure that our outdoor structures and kitchens are built to withstand the elements and provide
                                            lasting enjoyment.
                                        </p>
                                        <br/>
                                        <br/>
                                        <div className="hero-images-container-2">
                                            <img
                                                alt="..."
                                                src={require("assets/img/outdoorstructures.jpg")}
                                            /></div>
                                    </TabPane>
                                    <TabPane tabId="iconPills4">
                                        <p>
                                            At Suncrest, we designs and constructs custom retaining walls that not only provide functional support but also add
                                            visual appeal to your landscape. With a meticulous approach, we ensure the proper engineering and
                                            installation of retaining walls to withstand soil erosion and create beautiful terraced areas.
                                            In addition, our fencing solutions are tailored to your specific needs, offering privacy, security,
                                            and aesthetic enhancement to your property. We utilize high-quality materials and expert craftsmanship
                                            to build durable and visually pleasing fences that seamlessly blend with your landscape's style.
                                        </p>
                                        <br/>
                                        <br/>
                                        <div className="hero-images-container-2">
                                            <img
                                                alt="..."
                                                src={require("assets/img/Retainingwallsandfencing.jpg")}
                                            /></div>
                                    </TabPane>
                                    {/*<TabPane tabId="iconPills5">*/}
                                    {/*    <p>*/}
                                    {/*        Here at Suncrest, we envision and create customized plans that transform your*/}
                                    {/*        outdoor space into a captivating haven. We carefully consider the unique characteristics of your property, such as topography,*/}
                                    {/*        existing features, and your preferences, to craft designs that reflect your individual style and enhance the natural beauty of*/}
                                    {/*        the surroundings. With an eye for detail and a deep understanding of plant selection, hardscape elements, and outdoor living spaces,*/}
                                    {/*        we create designs that evoke a sense of tranquility and inspire outdoor enjoyment.*/}
                                    {/*    </p>*/}
                                    {/*    <br/>*/}
                                    {/*    <br/>*/}
                                    {/*    <div className="hero-images-container-2">*/}
                                    {/*        <img*/}
                                    {/*            alt="..."*/}
                                    {/*            src={require("assets/img/landscapeanddesign.jpg")}*/}
                                    {/*        /></div>*/}
                                    {/*</TabPane>*/}
                                    <TabPane tabId="iconPills6">
                                        <p>
                                            Whether you desire a cozy, intimate patio or a
                                            grand, expansive gathering area, we meticulously design and install custom patios that seamlessly
                                            blend with your landscape's aesthetics. Additionally, our expertly crafted walkways provide both
                                            functionality and beauty, guiding you through your outdoor oasis with elegance and grace. With a
                                            keen eye for detail, we select high-quality materials and employ precise installation techniques
                                            to ensure the durability and longevity of your patio and walkway.
                                        </p>
                                        <br/>
                                        <br/>
                                        <div className="hero-images-container-2">
                                            <img
                                                alt="..."
                                                src={require("assets/img/patioandwalkways.jpg")}
                                            /></div>
                                    </TabPane>
                                    <TabPane tabId="iconPills7">
                                        <p>
                                            With a passion for creating breathtaking outdoor environments, our skilled team of professionals
                                            brings your landscape design to life with precision and expertise. From lush gardens and vibrant
                                            flower beds to carefully selected trees and shrubs, we meticulously install the elements that will
                                            transform your outdoor space into a stunning oasis. Our commitment to quality craftsmanship and attention
                                            to detail ensures that every aspect of the installation process is executed to perfection.
                                        </p>
                                        <br/>
                                        <br/>
                                        <div className="hero-images-container-2">
                                            <img
                                                alt="..."
                                                src={require("assets/img/landscapeinstallation.jpg")}
                                            /></div>
                                    </TabPane>
                                    <TabPane tabId="iconPills8">
                                        <p>
                                            With a deep understanding of the importance of a well-designed outdoor space,
                                            we specialize in creating captivating landscapes that enhance the beauty and
                                            of your home. Our team of skilled professionals works closely with you to understand
                                            your vision and preferences, ensuring that every aspect of your residential landscape
                                            reflects your individual style and meets your specific needs.
                                        </p>
                                        <br/>
                                        <br/>
                                        <div className="hero-images-container-2">
                                            <img
                                                alt="..."
                                                src={require("assets/img/residential.jpg")}
                                            /></div>
                                    </TabPane>
                                    <TabPane tabId="iconPills9">
                                        <p>
                                            Here at Suncrest, we specialize in creating mesmerizing water features for your outdoor spaces.
                                            Our skilled team designs and installs custom water features such as ponds, waterfalls, fountains,
                                            and streams that add beauty and tranquility to your landscape. With meticulous attention to detail,
                                            we ensure seamless integration of water elements with the surrounding environment, creating a harmonious
                                            and captivating focal point.
                                        </p>
                                        <br/>
                                        <br/>
                                        <div className="hero-images-container-2">
                                            <img
                                                alt="..."
                                                src={require("assets/img/waterfeatures.jpg")}
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
