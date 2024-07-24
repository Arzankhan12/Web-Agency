import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
    <div className="">

        <div className="wrapper">

        <div className="content ">
      <img src="https://demo26.atiframe.com/wp-content/uploads/2020/02/Rectangle-7.png" alt="" />

      <h1 className='heading text-light'>A Website that <br /> <span>Leads to Customers</span></h1>

        <div className="gap">
      <h5 className='mt-5'>Our Web desing company Specializes in the </h5>
      <h5 className='mt-2'>Professional creation of unique sites that convert</h5>
      </div>

      {/* <button className='btn-set1 head-btn'><h6 className='my-auto p-2'>Read more</h6></button> */}

      <Link to='readmore'> <button className='btn-set1 head-btn'><h6 className='my-auto p-2'>Read more</h6></button></Link>

      </div>

      <div className="images slide-right ">
        <img src="https://demo26.atiframe.com/wp-content/uploads/revslider/slider-940px-11/Frame1.png " alt="" />
      </div>

      </div>

    </div>
    </div>
  )
}

export default Header
