/*eslint-disable*/
import React from "react";

// reactstrap components
import {Container} from "reactstrap";

function Footer() {
    return (<footer className="footer" data-background-color="black">
        <Container>
            <nav>
                <ul>
                    <li>
                        <a
                            href="https://www.google.com/maps/place/Suncrest+Landscaping+%26+Design,+Inc./@46.336059,-122.5774749,9.18z/data=!4m5!3m4!1s0x0:0x7d779890040463c5!8m2!3d46.1134669!4d-122.367359"
                            target="_blank"
                        >
                            Suncrest Landscaping & Design inc.
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="copyright" id="copyright">
                CONTACT US: TAYLOR.BIRCHEM@ICLOUD.COM
            </div>
            <br/>
            <br/>
        </Container>
    </footer>);
}

export default Footer;