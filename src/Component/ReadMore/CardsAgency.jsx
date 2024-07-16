import React from 'react'
import './CardAgency.css'

const CardsAgency = ({ title, imageUrl, description }) => {
  return (
    <div>
       <div className="card2 p-5">
      <img src={imageUrl} className="card-img" alt="Card image cap" />
      <div className="card-body">
        <h2 className="card-title mt-3">{title}</h2>
        <p className="card-text mt-3 ">{description}</p>
        <button className='s-1-btn mt-4'><h6 className='my-auto'>View all services</h6></button>
      </div>
    </div>
    </div>
  )
}

export default CardsAgency
