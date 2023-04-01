import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const proj = [
    {
        name: "Calculator",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, libero!",
        imgurl: ""
    },
    {
        name: "To-do List",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, libero!",
        imgurl: ""
    },
    {
        name: "Registration form",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, libero!",
        imgurl: ""
    },
    {
        name: "Mass Mail Dispatcher",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, libero!",
        imgurl: ""
    },
    {
        name: "The Sparks Bank",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, libero!",
        imgurl: ""
    },
    {
        name: "Surr-Taal",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, libero!",
        imgurl: ""
    },
    {
        name: "MentalBloomer",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, libero!",
        img: ""
    }

]

const Projects = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <>
            <section classname="project">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="proj-title">My Projects</h2>
                            {/* <Tab.Container id="project-tab">
                            <Nav variant="pills" defaultActiveKey="first">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">
                                        Tab four
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five">
                                        Tab five
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="six">
                                        Tab six
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seven">
                                        Tab Seven
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Tab.Container> */}
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                          <img src="" alt=""/>
                          <h5>Web Development</h5>
                        </div>
                        <div className="item">
                          <a href="#"><img src="" alt=""/></a>
                          <h5>Data Science</h5>
                        </div>
                        <div className="item">
                          <a href="#"><img src="" alt=""/></a>
                          <h5>More to be added...</h5> 
                        </div>
                      </Carousel> 
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Projects