import React from 'react'
import { Card, Row, Col,Container } from 'react-bootstrap'; 
import './RecentNews.css'

const RecentNews = () => {
  let img1 = 'https://demo26.atiframe.com/wp-content/uploads/2020/02/Single_post-002-compressor-600x400.jpg'
  let img2 = 'https://demo26.atiframe.com/wp-content/uploads/2020/02/demo26-007-600x400.jpg'
  return (
    <div>
        <div className="Recent-news-head text-center">
      <h1 className='recent-head'>Recent <span>News</span></h1>
      <p>Check more posts in the blog for more inspiration. We will keep you updated on <br /> the latest developments. It will be inteesting!</p>
      </div>

    <Container>
      <Row>
      <Col md={6}>
        
          <Card.Body>
            <figure className='fig-zoom'>
            <img src={img1} alt="" className='Recent-img'/>
            </figure>
            <Card.Title><h4 className='rec-color mt-5'>Easy Ways to Incorporate Customer Feedback</h4></Card.Title>
            <Card.Text className='my-4'>
            The benefits of such a platform include submersing the user in the brand's content. Users will be more likely to…
            </Card.Text>
            <Card.Text className='text-cont'>
            CONTINUE READING <div className='animated-dot'></div>
            </Card.Text>
          </Card.Body>
       
      </Col>
      <Col md={6}>
       
          <Card.Body>
            <figure className='fig-zoom'>
            <img src={img2} alt="" className='Recent-img'/>
            </figure>
            <Card.Title><h4 className='rec-color mt-5'>How to create a website for your business?</h4></Card.Title>
            <Card.Text className='my-4'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin…
            </Card.Text>
            <Card.Text className='text-cont'>
            CONTINUE READING <div className='animated-dot'></div>
            </Card.Text>
          </Card.Body>
        
      </Col>
    </Row>
    </Container>

    </div>
  )
}

export default RecentNews
