/*eslint-disable*/
import React from "react";

// reactstrap components
import {Button, Container} from "reactstrap";

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
    <div className="page-header clear-filter">
      <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/jan-canty-KcQuXaHCSPE-unsplash.jpg").default + ")",
          }}
          ref={pageHeader}
      />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">Suncrest Landscaping</h1>
          f    <h3>
          <p className="h5">Exceeding expectations for 20+ years</p>
          <hr
              style={{
                background: 'white', color: 'white', borderColor: 'white', height: '0.5px',
              }}/>
          <p className="h5">4.8 stars on
            <a href="https://www.google.com/maps/place/Suncrest+Landscaping+%26+Design,+Inc./@46.336059,-122.5774749,9.18z/data=!4m5!3m4!1s0x0:0x7d779890040463c5!8m2!3d46.1134669!4d-122.367359">
              <button className="btn-link btn-neutral">
                Google!
              </button>
            </a>
          </p>
        </h3>
        </div>
      </Container>
    </div>
  </>);
}

export default IndexHeader;
