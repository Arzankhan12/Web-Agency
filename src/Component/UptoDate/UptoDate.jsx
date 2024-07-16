import React, { useState } from 'react'
import './UptoDate.css'


const UptoDate = () => {
  const [input,setInput] = useState('')
  function Handlealert(){
   alert(input) 
  }
  return (
    <>
    <div className='text-center uptoContainer'>
      <div className="uptodate-cont">
      <h1 className='uptodate'>Be <span className=''>Up to Date </span> With New Events</h1>
      <p className='joining'>Join our mailing list to receive news and announcements.</p>
      </div>

      <form action="" id='form2'>
        <input 
        type="text" 
        id='go'
        value={input}
        onChange={(e)=> setInput(e.target.value)}

          />
        <button className='go-btn' onClick={Handlealert}>Go</button>
      </form>

    </div>
    </>
  )
}

export default UptoDate
