import { ArrowRightCircle } from "react-bootstrap-icons";
import { Container,Row,Col } from "react-bootstrap"
import header_img from '../assets/img/header-img.svg'
import { useState,useEffect } from "react";

const Banner =() =>{
    const [loopNum, setLoopNum] = useState(0)
    const toRotate = ["web developer", "data science enthusiast", "ui/ux developer"];
    const [isDeleting, setIsDeleting]=useState(false);
    const [text,setText]= useState("");
    // const [delta, setDelta]= useState(300-Math.random()*100)
    const [delta, setDelta]= useState(250)
    const period=2000;

    useEffect(()=>{
        let ticker= setInterval(()=>{
            tick();
        }, delta)

        return ()=>{clearInterval(ticker)};
    }, [text]) 

    const tick=()=>{
        let i= loopNum % toRotate.length;
        let ftext= toRotate[i];
        let updatedText =isDeleting? ftext.substring(0,text.length-1) : ftext.substring(0,text.length +1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === ftext){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(300);

        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="first" >
                        <span className="tagline" >Welcome to my portfolio</span>
                        <h3>Hi, my name is Saanvi Bhagat and I am a <span className="wrap">{text}</span></h3>
                        <p>I am a prefinal year student at Maharaja Surajmal Institute of Technology, Janakpuri, New Delhi and pursuing Bachelor of Technology in Computer Science.</p>
                        <button className="vvd" onClick={()=>console.log('connect')}>
                            <span>Let's Connect  <ArrowRightCircle size={18}/></span>
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={header_img} alt="header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;