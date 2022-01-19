import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteProduct, getProduct } from '../redux/action'
import EditProduct from './EditProduct'

const ProductCardAdmin = ({el}) => {
  const dispatch = useDispatch()
  
    return (
       
          <Card  bg="white" variant="inheart" style={{ width: '15rem', height:"400px" ,color:"black" }} className=" m-3">
      <img src={`http://localhost:5000${el.imageUrl}`}style={{height:"200px",width:"200px"}}/>
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
     {el.price}
    </Card.Text>
    <Card.Text>
     {el.category}
    </Card.Text>
<EditProduct el={el}/>
    <Button variant="primary" style={{ marginLeft:"20px"}} onClick={()=>dispatch(deleteProduct(el._id),getProduct())}> Delete</Button>
  </Card.Body>
</Card>
      
    )
}

export default ProductCardAdmin
