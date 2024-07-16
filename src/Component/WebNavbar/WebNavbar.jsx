import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './WebNavbar.css'

function WebNavbar() {
  const [activeButton, setActiveButton] = useState(null);

  const handleMouseEnter = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleMouseLeave = () => {
    setActiveButton(null);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
            <img src="https://demo26.atiframe.com/wp-content/uploads/2020/03/Logo_main_new.svg" alt="" />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{background:"white"}} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">

          <div className="hover-menu">
      <button
        className="hover-button colors-set"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <Link to='/' className='colors-set'>Home</Link> <i class="fa-solid fa-angle-down"></i>
        {activeButton === 1 && (
          <div className="menu">
            <p className='menu-lines'>Hompage 1</p>
            <p className='menu-lines'>Hompage 2</p>
            <p className='menu-lines'>Hompage 3</p>
            <p className='menu-lines'>Hompage 4</p>
          </div>
        )}
      </button>
      <button
        className="hover-button colors-set"
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/about" className='colors-set'>Shop</Link> <i class="fa-solid fa-angle-down"></i>
        {activeButton === 2 && (
          <div className="menu">
            <p className='menu-lines'>Home</p>
            <p className='menu-lines'>About</p>
            <p className='menu-lines'>Pages</p>
            <p className='menu-lines'>Contacts</p>
          </div>
        )}
      </button>
      <button
        className="hover-button colors-set"
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
         <Link to="/Services" className='colors-set'>Sevices</Link> <i class="fa-solid fa-angle-down"></i>
        {activeButton === 3 && (
          <div className="menu">
            <p className='menu-lines'>Landing Pages</p>
            <p className='menu-lines'>SEO</p>
            <p className='menu-lines'>Leading</p>
            <p className='menu-lines'>Maps</p>
          </div>
        )}
      </button>
      <button
        className="hover-button colors-set"
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/Pages" className='colors-set'>Pages</Link><i class="fa-solid fa-angle-down"></i>
        {activeButton === 4 && (
          <div className="menu">
            <p className='menu-lines'>Score to top</p>
            <p className='menu-lines'>Goals</p>
            <p className='menu-lines'>Achivpements</p>
            <p className='menu-lines'>Purpos</p>
          </div>
        )}
      </button>
    </div>

           

           
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='text-light mt-2 mx-2 searching'><i className="fas fa-search"></i> <input type="text" /></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='text-light'>
              <button className='btn'>
              <a className='btn-set1 my-auto' href='https://zoroxtv.to/home' >Series</a>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

export default WebNavbar;