import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import styled from 'styled-components';
import ebook from '../images/ebook.svg';
import medal from '../images/medal.svg';
import calendar from '../images/calendar.svg';
import trophy from '../images/trophy.svg';
import years from '../images/years.svg';

function AboutUs() {
  return (
    <div style={{background: '#E4B6E5', textAlign: 'center'}}>
        <h1>About us</h1>
        {/* ADD PHOTO OF THE GUY OR HIS COMPANY, MAYBE EVEN A CAROUSEL*/}
        <p>Mr Mukesh Premji Maru is a mumbai based vastu professional serving the residential and commercial global vastu area since 2001. We specialize in custom home improvements as well as community and commercial buildings. Around the years we have completed infinite vastu projects, bringing the clients dreams to life.</p>
        <p>// Content about his team also //</p>
        <h3 style={{margin: '4rem'}}>WHAT WE BELIEVE IN</h3>
        <Container>
            <Row>
                <Col>
                    <h5>Our Philosophy</h5>
                    We strive to be the best at what we do.
                </Col>
                <Col>
                    <h5>Our Client’s Participation</h5>
                    To ensure our client’s needs are satisfied we constantly invite our clients to participate and provide input during the design process.
                </Col>
                <Col>
                    <h5>Our Style</h5>
                    The style of our working is as unique as our clients. With each new client a new dream becomes reality.
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Our Personal Attention To Each Project</h5>
                    Each client receives one-on-one attention through the entire process from our highly skilled profeciency.
                </Col>
                <Col>
                    <h5>Our Creativity</h5>
                    Creativity is achieved through a combination of our vastu collective, as well as the input obtained through brainstorming sessions with the client.
                </Col>
                <Col>
                    <h5>Our Professionalism</h5>
                    We maintain a consistently high level of professional care and responsibility in each project. We guarantee all of our work to be of the highest quality, as we know our clients would expect nothing less. Your project is our project.
                </Col>
            </Row>
        </Container>
        <h3 style={{margin: '4rem'}}>OUR ACCOMPLISHMENTS</h3>
        <Container>
        <Row>
            <Col>
                <img src={ebook} width='60px'></img>
                <div>Co-authored the e-book : Pyramid Vaastu Now In India</div>
            </Col>
            <Col>
                <img src={medal} width='60px'></img>
                <div>Gold medalist : Pyravastu 2005…SEMS Mumbai</div>
            </Col>
            <Col>
                <img src={years} width='75px'></img>
                <div>18 Years in Vastu Business</div>
            </Col>
            <Col>
                <img src={trophy} width='60px'></img>
                <div>Best Vaastu Expert Award in 2016 – 17</div>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default AboutUs;