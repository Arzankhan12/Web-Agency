import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css'
import { useState } from 'react';

function BasicExample() {
  let len = "eb design company specializes in the"
  
  function handleLength(){
      setLength("eb design company specializes in theeb design company specializes in the")
    
  }
  const [length,setLength] = useState(len)
  return (

    <div className="card-container">
    <Card className='cards'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.4uR8VA0SxeEHNAskVSWSLwHaE7?w=1024&h=681&rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {length}
        </Card.Text>
        <Button variant="primary" onClick={handleLength? handleLength : "Read less"}>Read more</Button>
      </Card.Body>
    </Card>
    
    <Card className='cards'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.4uR8VA0SxeEHNAskVSWSLwHaE7?w=1024&h=681&rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {length}
        </Card.Text>
        <Button variant="primary" onClick={handleLength}>Read more</Button>
      </Card.Body>
    </Card>

    <Card className='cards'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.4uR8VA0SxeEHNAskVSWSLwHaE7?w=1024&h=681&rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {length}
        </Card.Text>
        <Button variant="primary" onClick={handleLength}>Read more</Button>
      </Card.Body>
    </Card>

    <Card className='cards'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.4uR8VA0SxeEHNAskVSWSLwHaE7?w=1024&h=681&rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {length}
        </Card.Text>
        <Button variant="primary" onClick={handleLength}>Read more</Button>
      </Card.Body>
    </Card>

    <Card className='cards'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.4uR8VA0SxeEHNAskVSWSLwHaE7?w=1024&h=681&rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {length}
        </Card.Text>
        <Button variant="primary" onClick={handleLength}>Read more</Button>
        
      </Card.Body>
    </Card>
    
    </div>
  );
}

export default BasicExample;