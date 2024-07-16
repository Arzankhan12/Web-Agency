import './Professional.css'
import React, { useEffect, useRef, useState } from 'react';

const Professional = () => {
    const [isVisible, setIsVisible] = useState(false);
    const logoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const logoElement = logoRef.current;
            if (logoElement) {
                const topOffset = logoElement.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // Adjust this threshold as needed for when to trigger the animation
                if (topOffset < windowHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
    <div>
      <div className="main-profes">
        <h1>How It Is <span>Going</span></h1>
        <p>We offer professional web design services at affordable rates to help your business <br /> attract more visitors and keep them on your site!</p>
      </div>
      <div className="professional-goal">
      <div className="scroll-animation">
      <div className={`line ${isVisible ? 'visible' : ''}`}></div>
      <div className={`logo ${isVisible ? 'visible' : ''}`} ref={logoRef}>

                {/* Your logo image or text */}
                <div className="profes-icon">

                    <div className="p-icon">
                        <h2>01</h2>
                <i className="fa-regular fa-lightbulb modify1"></i>
                <h6>Info Gathering</h6>
                </div>

                <div className="p-icon">
                        <h2>02</h2>
                        <i className="fa-brands fa-trade-federation  modify1"></i>
                <h6>Planning</h6>
                </div>

                <div className="p-icon">
                        <h2>03</h2>
                        <i className="fa-solid fa-leaf modify1"></i>
                <h6>Design</h6>
                </div>

                <div className="p-icon">
                        <h2>04</h2>
                        <i className="fa-solid fa-laptop modify1"></i>
                <h6>Development</h6>
                </div>

                <div className="p-icon">
                        <h2>05</h2>
                        <i className="fa-solid fa-rocket modify1"></i>
                <h6>Testing & Launch</h6>
                </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Professional
