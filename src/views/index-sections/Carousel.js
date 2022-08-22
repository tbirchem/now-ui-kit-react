import React from "react";

// reactstrap components
import {
    Container, Row, Col, Carousel, CarouselItem, CarouselIndicators
} from "reactstrap";

// core components

const items = [{
    src: require("assets/img/featured1.jpg"), altText: "Residential", caption: "Residential"
}, {
    src: require("assets/img/feature2.jpg"), altText: "Outdoor Structure", caption: "Outdoor Structure"
}, {
    src: require("assets/img/feature3.jpg"), altText: "Retaining Wall", caption: "Retaining Wall"
}, {
    src: require("assets/img/feature4.jpg"), altText: "Landscape Design", caption: "Landscape Design"
}, {
    src: require("assets/img/feature5.jpg"), altText: "Water Feature", caption: "Water Feature"
}];

function CarouselSection() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
        setAnimating(true);
    };
    const onExited = () => {
        setAnimating(false);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    return (<>
        <div className="section section-basic" id="carousel">
            <Container>
                <h1 className="title text-center">Our Work</h1>
                <hr
                    style={{
                        background: 'black', color: 'black', borderColor: 'black', height: '0.1px'
                    }}/>
                <br/>
                <Row className="justify-content-center">
                    <Col lg="8" md="12">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                        >
                            <CarouselIndicators
                                items={items}
                                activeIndex={activeIndex}
                                onClickHandler={goToIndex}
                            />
                            {items.map((item) => {
                                return (<CarouselItem
                                    onExiting={onExiting}
                                    onExited={onExited}
                                    key={item.src}
                                >
                                    <img src={item.src} alt={item.altText}/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{item.caption}</h5>
                                    </div>
                                </CarouselItem>);
                            })}
                            <a
                                className="carousel-control-prev"
                                data-slide="prev"
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    previous();
                                }}
                                role="button"
                            >
                                <i className="now-ui-icons arrows-1_minimal-left"></i>
                            </a>
                            <a
                                className="carousel-control-next"
                                data-slide="next"
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    next();
                                }}
                                role="button"
                            >
                                <i className="now-ui-icons arrows-1_minimal-right"></i>
                            </a>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    </>);
}

export default CarouselSection;
