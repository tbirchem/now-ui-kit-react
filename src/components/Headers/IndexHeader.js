/*eslint-disable*/
import React from "react";

// reactstrap components
import {Container} from "reactstrap";

// core components

function IndexHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform = "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (<>
        <div className="page-header clear-filter" filter-color="blue" id="header">
            <div
                className="page-header-image"
                style={{
                    backgroundImage: "url(" + require("../../../src/assets/img/lawninsttallation.jpg") + ")"
                }}
                ref={pageHeader}
            />
            <Container>
                <div className="content-center brand">
                    {/*<img*/}
                    {/*    alt="..."*/}
                    {/*    className="n-logo"*/}
                    {/*    src={require("assets/img/sunset.png")}*/}
                    {/*/>*/}
                    {/*<h1 className= "border-success">Suncrest Landscaping</h1>*/}
                    <br/>
                    <h1 className= "card-title">Exceeding Expectations for 25+ years - 4.8 Stars on Google </h1>
                    <hr
                        style={{
                            background: 'white', color: 'white', borderColor: 'white', height: '0.5px',
                        }}/>
                    <a
                        className= "text-white"
                        href="#pablo"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("getaquote")
                                .scrollIntoView();
                        }}><h1>GET A FREE QUOTE TODAY!</h1></a>
                </div>
            </Container>
        </div>
    </>);
}

export default IndexHeader;
