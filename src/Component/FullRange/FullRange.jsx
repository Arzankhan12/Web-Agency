import React from 'react'
import './FullRange.css'

const FullRange = () => {
  return (
    <div className='FullRange'>
          <section className='container'>
      <div className="row">
       
        <div className="col-md-4">
          <div className="section-one">
          
            <h1>Full Range of Web</h1>
           <h1 className='color'> Design <span > Services</span></h1>
            <p className='mt-4'>We offer professional web design services at <br /> affordable rates to help your business attract <br /> more visitors and keep them on your site!</p>
            <button className='s-1-btn mt-4'><h6 className='my-auto'>View all services</h6></button>
          </div>
        </div>
    
        <div className="col-md-8">
          <div className="section-two">
          
            <div className="row upper-cards">
       
              <div className="col-md-6">
                <div className="card1">
                  <div className="card-body">
                    <i className="fa-solid fa-cloud-rain modify"></i>
                    <h4 className="card-title my-3">
                    <a href="https://in.linkedin.com/company/sarovitech">Web Development</a></h4>
                    <p className="card-text">We start from structuring information <br /> architecture and functionalities.</p>
                    <button className='arrow '><h6>Read more</h6></button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card1">
                  <div className="card-body">
                  <i className="fa-regular fa-eye modify"></i>
                    <h4 className="card-title my-3">
                    <a href="https://github.com/">Landing pages</a>
                    </h4>
                    <p className="card-text">Beautiful and effective landing <br /> pages for your goals.</p>
                    <button className='arrow '><h6>Read more</h6></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row lower-cards">

              <div className="col-md-6">
                <div className="card1">
                  <div className="card-body">
                  <i className="fa-solid fa-magnifying-glass modify"></i>
                  <h4 className="card-title my-3">
                    <a href="https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=674842289437&hvpos=&hvnetw=g&hvrand=3648708693654758471&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9303277&hvtargid=kwd-10573980&hydadcr=14453_2316415&gad_source=1">eCommerce</a>
                    </h4>
                    <p className="card-text">We build digital experiences to meet <br /> sales goals for your business.</p>
                    <button className='arrow '><h6>Read more</h6></button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card1">
                  <div className="card-body">
                  <i className="fa-solid fa-paint-roller modify"></i>
                    <h4 className="card-title my-3">
                    Branding
                    <a href="https://www.flipkart.com/sony-playstation-2-ps2/p/itmemr2g8fhqwwep ">eCommerce</a>
                    </h4>
                    <p className="card-text">Only best solutions that will <br /> make your business unique.</p>
                    <button className='arrow '><h6>Read more</h6></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  )
}

export default FullRange
