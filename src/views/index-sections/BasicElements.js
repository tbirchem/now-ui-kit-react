import React from "react";
// react plugin used to create switch buttons
// import Switch from "react-bootstrap-switch";
// plugin that creates slider
// import Slider from "nouislider";

// reactstrap components
import {
    Container,
} from "reactstrap";

// core components

function BasicElements() {
    return (<>
        <div className="section section-basic" id="basic-elements">
            <br/>
            <br/>
            <br/>
            <Container>
                <h1 className="title text-center">What We Offer</h1>
                <hr
                    style={{
                        background: 'black', color: 'black', borderColor: 'black', height: '0.1px'
                    }}/>
                <br/>
                <br/>
                <p className="font-italic ">
                    Suncrest Landscape & Design is a family owned and operated company. Through 25+ years of pace
                    setting and achievements, Suncrest has established itself as the area leader in design,
                    landscaping, wall and patio contracting.
                    <br/>
                    <br/>
                    Our goal is more than a perfect outdoor living space. It’s about making the whole experience always
                    driven by the style and lifestyle of the homeowner, imbued with our love for creative design, and
                    crafted with the highest of skill. We offer a friendly, open attitude, informative dialogue and
                    thorough management throughout the entire project.
                    <br/>
                    <br/>
                    Suncrest Landscape & Design is based out of Camas, Washington, serving the greater Portland, OR
                    metro area. We strive to support local business in the PNW region, which is why all products are
                    purchased locally.
                    <br/>
                    <br/>
                    If your perfect outdoor living space is a balance of the finest product and the best value for your
                    property, look no further than Suncrest Landscape & Design
                </p>
            </Container>
        </div>
    </>);
}

export default BasicElements;
