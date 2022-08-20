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
        <div className="page-header clear-filter" filter-color="blue">
            <div
                className="page-header-image"
                style={{
                    backgroundImage: "url(" + require("assets/img/jan-canty-KcQuXaHCSPE-unsplash.jpg") + ")"
                }}
                ref={pageHeader}
            />
            <Container>
                <div className="content-center brand">
                    <img
                        alt="..."
                        className="n-logo"
                        src={require("assets/img/sunset.png")}
                    />
                    <h1>Suncrest Landscaping</h1>
                    <hr
                        style={{
                            background: 'white', color: 'white', borderColor: 'white', height: '0.5px',
                        }}/>
                    <h3>Exceeding Expectations for 20+ years</h3>
                </div>
            </Container>
        </div>
    </>);
}

export default IndexHeader;
