import React from "react";

// reactstrap components
import {
    Container,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import SignUp from "./SignUp";

function ProfilePage() {
    const [pills, setPills] = React.useState("2");
    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            <ExamplesNavbar />
            <div className="wrapper">
                <ProfilePageHeader />
                <div className="section">
                    <Container>
                        <br/>
                        <h2 className="text-center">WHO WE ARE</h2>
                        <h3 className="description">
                            An artist of considerable range, Ryan — the name taken by
                            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                            and records all of his own music, giving it a warm, intimate feel
                            with a solid groove structure. An artist of considerable range.
                        </h3>
                        <br/>
                        <br/>
                            <div
                                className="navigation-example shadow-lg"
                                style={{
                                    backgroundImage: "url(" + require("assets/img/bg7.jpg") + ")"
                                }}
                            >
                            </div>
                    </Container>
                </div>
                <SignUp />
                <DarkFooter />
            </div>
        </>
    );
}

export default ProfilePage;