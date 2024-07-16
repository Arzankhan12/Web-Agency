import React from 'react'
import './WebDesingCompany.css'

const WebDesingCompany = () => {
  return (
    <div>
      <div className="Section1">
        <div className="Web-img">
            <img src="https://demo26.atiframe.com/wp-content/uploads/2020/03/Image-1.jpg" alt="" />
        </div>
        <div className="Web-cont">
            <h1>Web design company</h1>
            <h1>you can <span style={{color:"#f35444"}}>Trust</span></h1>

            <h6 style={{color:"gray"}} className='mt-3'>Our web design company specializes in the <br /> professional creation of unique sites. Our team  <br />constantly monitors the emergence of new <br /> technologies that we are not afraid to implement in <br /> web projects, making them modern and high-tech.</h6>

            <h5 className='mt-5'>Brian Detrix, Executive Director</h5>
        </div>
      </div>
    </div>
  )
}

export default WebDesingCompany
