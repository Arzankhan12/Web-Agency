import React from 'react'
import CreativeTeam from '../CreativeTeam/CreativeTeam'
import CounterUp from '../CounterUp/CounterUp'
import { Row,Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';

import './About.css'

const About = () => {
  return (
    <div>
        <Container>
        <Row className="Digital-Team">
            <Col md={6} className="Digital-left">
                <h1>We Are <span className=''>Professional </span><br />
                Digital Team</h1>

                <h5 className='digital-para'>Our web design company specializes in the professional creation of unique sites.</h5>

                <p className='digital-para'>Our team constantly monitors the emergence of new technologies that we are not afraid to implement in web projects. We create only selling websites – this is an achievement by drawing the design and working out usability. The approach to each new project is individual, we treat every customer equally, regardless of the size of the company and its budget.</p>
            </Col>
            <Col md={6} className="Digital-right">
                <img src="https://demo26.atiframe.com/wp-content/uploads/2020/03/Image_about-002.png" alt="" />
            </Col>
        </Row>
        </Container>

        <CounterUp/>
        <CreativeTeam/> 

        <div className="choose-us">
            <div className="choose-heading">
                <h1>Why <span>Choose</span> Us</h1>
                <p className='mt-4'>Biggest brands in the automotive industry recommend our company as a reliable <br /> corporate website developer</p>
            </div>
            <Container>
            <Row className="choose-container gap-4 mt-5">
                <Col className="exp-card p-4" md={3}>
                <FontAwesomeIcon icon={faGears} className='digital-icon'/>
                <h5 className='mt-5'>Big expirence</h5>
                <p className='digital-para'>Many years of work in this field is an excellent indicator that companies trust us and in response we offer unique solutions.</p>
                </Col>
                <Col className="exp-card p-4" md={3}>
                <i className="fa-solid fa-group-arrows-rotate digital-icon"></i>
                <h5 className='mt-5'>Big expirence</h5>
                <p className='digital-para'>An excellent team of professionals will help you to bring all your ideas to life in the best possible way and with flexible functionality.</p>
                </Col>
                <Col className="exp-card p-4" md={3}>
                <i className="fa-solid fa-user-group digital-icon"></i>
                <h5 className='mt-5'>Big expirence</h5>
                <p className='digital-para'>ndividual approach to your project. flexible solutions for your tasks to achieve your goals on the path to success.</p>
                </Col>
            </Row>
            </Container>
        </div>
        
    </div>
  )
}

export default About
