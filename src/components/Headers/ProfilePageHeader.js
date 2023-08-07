import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="white"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/lawninsttallation.jpg") + ")"
          }}
          ref={pageHeader}
        >
          <Container>
            <div className="content-center brand">
              {/*<img*/}
              {/*    alt="..."*/}
              {/*    className="n-logo"*/}
              {/*    src={require("assets/img/sunset.png")}*/}
              {/*/>*/}
              <h1 className="border-bottom">
                GET TO KNOW US</h1>
              <br/>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProfilePageHeader;
