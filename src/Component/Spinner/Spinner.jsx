import React from 'react'
import './Spinner.css'

const Spinner = ({isLoading}) => {
  return (
    <div className={`spinner-container ${isLoading ? 'visible' : 'hidden'}`}>
      <img src="https://demo26.atiframe.com/wp-content/uploads/2020/03/Logo_main_new.svg" alt="" className='logo-img'/>
     <div className="spinner"></div> 
    </div>
  )
}

export default Spinner
