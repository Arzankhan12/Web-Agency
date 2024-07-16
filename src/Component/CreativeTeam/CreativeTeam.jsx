import React from 'react'
import './CreativeTeam.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



const CreativeTeam = () => {
  // const [screen,setScreen ] = useState(5)

  // if(window.resizeTo(1000,600)){
  //   setScreen(3)
  // }
  return (
    <div>
      <div className="Creative-Team text-center">
        <h1 className='team-color my-4'>Our Creative <span>Team</span></h1>
        <p className='my-5'>We are committed to using fact-based knowledge and our unique brand of innovation to help <br /> you dominate the competition.</p>
      </div>

      <Swiper
        // slidesPerView={screen}
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
          375: {
            slidesPerView:1,
            spaceBetween:10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swipe'>
          <div className="slide-wrap">
            <div className="swipe-swipe">
              <div className="swipe-icon">
              <a href='https://github.com/'><i className="fa-brands fa-github mx-1 comp-logo"></i></a>
              <a href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in comp-logo"></i></a>
                 </div>
              <h3>Jhon Doe</h3>
              <p>Manager</p>
            </div>
          <img src="https://demo26.atiframe.com/wp-content/uploads/2020/02/Frame-56-1.jpg" alt="" />
          </div>

          </SwiperSlide>
        <SwiperSlide className='swipe'>
          <div className="slide-wrap">
            <div className="swipe-swipe">
              <div className="swipe-icon">
              <a href='https://github.com/'><i className="fa-brands fa-github mx-1 comp-logo"></i></a>
              <a href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in comp-logo"></i></a>
                 </div>
              <h3>Jhon Doe</h3>
              <p>Manager</p>
            </div>
          <img src="https://demo26.atiframe.com/wp-content/uploads/2020/02/Frame-56-4.jpg" alt="" />
          </div>

          </SwiperSlide>
        <SwiperSlide className='swipe'>
          <div className="slide-wrap">
            <div className="swipe-swipe">
              <div className="swipe-icon">
              <a href='https://github.com/'><i className="fa-brands fa-github mx-1 comp-logo"></i></a>
              <a href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in comp-logo"></i></a>
                 </div>
              <h3>Jhon Doe</h3>
              <p>Manager</p>
            </div>
          <img src="https://demo26.atiframe.com/wp-content/uploads/2020/02/Frame-56.jpg" alt="" />
          </div>

          </SwiperSlide>
        <SwiperSlide className='swipe'>
          <div className="slide-wrap">
            <div className="swipe-swipe">
              <div className="swipe-icon">
              <a href='https://github.com/'><i className="fa-brands fa-github mx-1 comp-logo"></i></a>
              <a href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in comp-logo"></i></a>
                 </div>
              <h3>Jhon Doee</h3>
              <p>Manager</p>
            </div>
          <img src="https://demo26.atiframe.com/wp-content/uploads/2020/02/Frame-56-3.jpg" alt="" />
          </div>

          </SwiperSlide>
        <SwiperSlide className='swipe'>
          <div className="slide-wrap">
            <div className="swipe-swipe">
              <div className="swipe-icon">
              <a href='https://github.com/'><i className="fa-brands fa-github mx-1 comp-logo"></i></a>
              <a href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in comp-logo"></i></a>
                 </div>
              <h3>Jhon Doe</h3>
              <p>Manager</p>
            </div>
          <img src="https://demo26.atiframe.com/wp-content/uploads/2020/02/Frame-56-2.jpg" alt="" />
          </div>

          </SwiperSlide>
        <SwiperSlide className='swipe'>
          <div className="slide-wrap">
            <div className="swipe-swipe">
              <div className="swipe-icon">
              <a href='https://github.com/'><i className="fa-brands fa-github mx-1 comp-logo"></i></a>
              <a href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in comp-logo"></i></a>
                 </div>
              <h3>Jhon Doe</h3>
              <p>Manager</p>
            </div>
          <img src="https://demo26.atiframe.com/wp-content/uploads/2020/02/Frame-56.jpg" alt="" />
          </div>

          </SwiperSlide>
        <SwiperSlide className='swipe'>
          <div className="slide-wrap">
            <div className="swipe-swipe">
              <div className="swipe-icon">
              <a href='https://github.com/'><i className="fa-brands fa-github mx-1 comp-logo"></i></a>
              <a href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in comp-logo"></i></a>
                 </div>
              <h3>Jhon Doe</h3>
              <p>Manager</p>
            </div>
          <img src="https://demo26.atiframe.com/wp-content/uploads/2020/02/Frame-56-4.jpg" alt="" />
          </div>

          </SwiperSlide>
        <SwiperSlide className='swipe'>
          <div className="slide-wrap">
            <div className="swipe-swipe">
              <div className="swipe-icon">
              <a href='https://github.com/'><i className="fa-brands fa-github mx-1 comp-logo"></i></a>
              <a href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in comp-logo"></i></a>
                 </div>
              <h3>Jhon Doe</h3>
              <p>Manager</p>
            </div>
          <img src="https://demo26.atiframe.com/wp-content/uploads/2020/02/Frame-56-1.jpg" alt="" />
          </div>

          </SwiperSlide>

      </Swiper>
      
    </div>

    
  )
}

export default CreativeTeam
