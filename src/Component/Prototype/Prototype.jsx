import React from 'react'
import './Prototype.css'

const Prototype = () => {
  return (
    <div className=''>
      <div className="Prototype">


        <div className="prototype-left">
        <iframe className='vid' src="https://www.youtube.com/embed/EZPYLZ7I6gs?si=KxuHEMABW1i0C7gv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>



        <div className="prototype-right">
            <h1 className='proto-head'>Get a <span> Free</span> Prototype <br />
            of Your Future Website !</h1>

            <p className='mt-4'>Send your requirements for a website, we will <br /> research your specification, create a prototype of the <br /> website for free and sed a result to you!</p>

            <form action="" className='form1 mt-5'>
                <div className='input1'><input type="text" placeholder='Your name' /></div>
                <div className='input1'><input type="number" name="" id="" placeholder='+1'/></div>
                <div className='input1'><input type="text" name="" id="" placeholder='Message' maxLength={500}/></div>
            </form>

            <button className='sub-btn'>Submit</button>

        </div>
      </div>
    </div>
  )
}

export default Prototype
