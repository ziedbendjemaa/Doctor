import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({el}) => {
    return (
      
          <Card bg="white" variant="dark" style={{ width: '18rem', color:"black" }} className=" m-3">
  <Card.Img variant="top" src={el.imageUrl} />
  <Card.Body>
    <Link to={`description/${el._id}`}>
    <Card.Title>{el.title}</Card.Title>
  
    </Link>
  </Card.Body>
</Card>
     
    )
}

export default ProductCard
