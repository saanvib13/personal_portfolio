import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import web_dev_skill from '../assets/img/web_dev.png'
import data_science from '../assets/img/datascience.png'
import add_img from '../assets/img/add_img.jpg'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

const Skills = () => {
  // const responsive = {
  //     superLargeDesktop: {
  //       // the naming can be any, depends on you.
  //       breakpoint: { max: 4000, min: 3000 },
  //       items: 5
  //     },
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 3
  //     },
  //     tablet: {
  //       breakpoint: { max: 1024, min: 464 },
  //       items: 2
  //     },
  //     mobile: {
  //       breakpoint: { max: 464, min: 0 },
  //       items: 1
  //     }
  //   };

  return (
    <section className="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-div">
              <h2>
                Skills
              </h2>
              {/* <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                          <img src={web_dev_skill} alt=""/>
                          <h5>Web Development</h5>
                        </div>
                        <div className="item">
                          <a href="#"><img src={data_science} alt=""/></a>
                          <h5>Data Science</h5>
                        </div>
                        <div className="item">
                          <a href="#"><img src={add_img} alt=""/></a>
                          <h5>More to be added...</h5> 
                        </div>
                      </Carousel> */}
              <Tab.Container id="project-tab"  defaultActiveKey="first">
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
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row className="skill-slider">
                    <div className="item">
                          <img src={web_dev_skill} alt=""/>
                          <div className="skill-desc">
                          <h5>Web Development</h5>
                          <span style={{color:"#B8B8B8"}}>(Front-End: Intermediate</span> <br/>
                          <span style={{color:"#B8B8B8"}}>Back-End: Basic)</span>

                          <p>Interned at:</p>
                          <ul>
                            <li>Exposys Data Labs</li>
                            <li>LetsGrowMore</li>
                            <li>The Sparks Foundation</li>
                            <li>Currently, a member of Google Developers Student Club, MSIT</li>
                          </ul>
                          </div>
                        </div>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row className="skill-slider">
                    <div className="item">
                          <img src={data_science} alt=""/>
                          <div className="skill-desc">
                          <h5>Data Science</h5>
                          <p>Attended summer training in data science with python<br/>Created a music recommendation website: Surr-Taal as a project</p>
                          <p>Certificate Link:</p>
                          <a className="certi-link" href="https://drive.google.com/file/d/1Js_hZRZbVbXMvfDbM8l_bZUAFW_Fjr_6/view?usp=sharing"><button>Click Here to View</button></a>
                          
                          </div>
                        </div>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills