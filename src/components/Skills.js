import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import web_dev_skill from '../assets/img/web_dev.png'
import Webdev from "./WebDev";
import data_science from '../assets/img/datascience.png'
import add_img from '../assets/img/add_img.jpg'

const Skills = () =>{
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
        <section className="skill">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-div">
                      <h2>
                        Skills
                      </h2>
                      <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                          <a href={<Webdev />}><img src={web_dev_skill} alt=""/></a>
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
                      </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}

export default Skills