import React from 'react'
import './Footer.css'   
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 footer">
      <Container>
        <Row>
          <Col md={4} className='footer-media-set'>
            <h4 className='fw-bold'>About</h4>
            <p className='f-para mt-5 '>We have much planned for the future, <br /> working with great clients and continued <br /> software development</p>
            <ul className='ul'>
                <li className='mt-4'>+1 963 542 78 32</li>
                <li className='mt-3'>info@example.com</li>
                <li className='mt-3'>Follow Us 
                    <i className="fa-brands fa-instagram ms-4 comp-logo"></i>
                    <i className="fa-brands fa-twitter ms-4 comp-logo"></i>
                    <i className="fa-solid fa-blog ms-4 comp-logo"></i>
                    <i className="fa-brands fa-linkedin-in ms-4 comp-logo"></i>
                
                </li>
            </ul>
          </Col>
          <Col md={4} className='footer-media-set'>

            <h4 className='fw-bold mb-5'>Recent News</h4>

            <p className='f-para '>April 12, 2020</p>
              <li className='li text-cont'> {/*responsive sudhaarna he*/}
              Easy Ways to Incorporate Customer <br /> Feedback</li>

              <p className='f-para mt-3'>January 31, 2020</p>
              <li className='li text-cont' > {/*responsive sudhaarna he*/}
              How to create a website for your <br /> business?</li>
            
          </Col>
          <Col md={4} className='footer-media-set'>
            <h4 className='fw-bold mb-5'>Newsletter</h4>
            <p className='f-para'>Join our mailing list to receive news and <br /> announcements</p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <input type="email" placeholder="Your email" className='f-input my-3'/>
              </Form.Group>
              
              <button type="submit" className='f-btn'>Get A Subscribe</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
