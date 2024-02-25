import React from "react";

// reactstrap components
import {
    Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, UncontrolledTooltip,
} from "reactstrap";
import {Link} from "react-router-dom";

function IndexNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (document.documentElement.scrollTop > 399 || document.body.scrollTop > 399) {
                setNavbarColor("");
            } else if (document.documentElement.scrollTop < 400 || document.body.scrollTop < 400) {
                setNavbarColor("navbar-transparent");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (<>
        {collapseOpen ? (<div
            id="bodyClick"
            onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(false);
            }}
        />) : null}
        <Navbar className={"fixed-top " + navbarColor}  expand="lg" color="success">
            <Container>
                <div className="navbar-translate h3 font-italic font-weight-bold" style={{
                    paddingTop: '10px',
                }}>
                    <NavbarBrand
                        id="navbar-brand"
                        href="/index"
                        >
                        <h1 className="text-xl-center"> Suncrest Landscaping </h1>
                    </NavbarBrand>
                    <button
                        className="navbar-toggler navbar-toggler"
                        onClick={() => {
                            document.documentElement.classList.toggle("nav-open");
                            setCollapseOpen(!collapseOpen);
                        }}
                        aria-expanded={collapseOpen}
                        type="button"
                    >
                        <span className="navbar-toggler-bar top-bar"/>
                        <span className="navbar-toggler-bar middle-bar"/>
                        <span className="navbar-toggler-bar bottom-bar"/>
                    </button>
                </div>
                <Collapse
                    className="justify-content-end"
                    isOpen={collapseOpen}
                    navbar
                >
                    <Nav navbar>
                        <NavItem className="h5">
                            <NavLink
                                href ="/about"
                            >
                                <p>About</p>
                            </NavLink>
                        </NavItem>
                        <NavItem className="h5">
                            <NavLink
                                href = "/index"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById("services")
                                        .scrollIntoView();
                                }}>
                                <p>Services</p>
                            </NavLink>
                        </NavItem>
                        <NavItem className="h5">
                            <NavLink
                                href="/index"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById("carousel")
                                        .scrollIntoView({
                                            inline: 'start', block: 'start', behavior: 'smooth'
                                        });
                                }}>
                                <p>Gallery</p>
                            </NavLink>
                        </NavItem>
                        <NavItem className="h5">
                            <NavLink
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById("getaquote")
                                        .scrollIntoView();
                                }}>
                                <p className="font-weight-bolder">Get Connected</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="https://www.facebook.com/profile.php?id=100057352882324"
                                target="_blank"
                                id="facebook-tooltip"
                            >
                                <i className="fab fa-facebook-square"></i>
                                <p className="d-lg-none d-xl-none">Facebook</p>
                            </NavLink>
                            <UncontrolledTooltip target="#facebook-tooltip">
                                Like us on Facebook
                            </UncontrolledTooltip>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="https://www.instagram.com/suncrest.landscaping/"
                                target="_blank"
                                id="instagram-tooltip"
                            >
                                <i className="fab fa-instagram"></i>
                                <p className="d-lg-none d-xl-none">Instagram</p>
                            </NavLink>
                            <UncontrolledTooltip target="#instagram-tooltip">
                                Follow us on Instagram
                            </UncontrolledTooltip>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </>);
}

export default IndexNavbar;
