import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/action'

const ADDProductAdmin = () => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const dispatch = useDispatch()
    let handelsubmit=(e)=>{
        e.preventDefault()
dispatch(addProduct({title,category,description,price,imageUrl,quantity}))
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
              <Button variant="primary" onClick={handleShow}>
        ADD-Product
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Modal.Body>
      <form onSubmit={handelsubmit} >
               Title: <input type="text" className="form-control" placeholder="Enter Product Name" onChange={e=> setTitle(e.target.value)} value={title}/>
               Description: <input type="text" className="form-control" placeholder="Enter Description Product" onChange={e=> setDescription(e.target.value)} value={description} />
              Image: <input type="url" className="form-control" placeholder="Enter URL Image" onChange={e=> setImageUrl(e.target.value)} value={imageUrl}/>
             Price : <input type="text" className="form-control" placeholder="Enter Price" onChange={e=> setPrice(e.target.value)} value={price} />
             Quantity : <input type="number" className="form-control" placeholder="Enter Product quantity" onChange={e=> setQuantity(e.target.value)} value={quantity} />
              Category: <input type="text" className="form-control" placeholder="Enter Product Category" onChange={e=> setCategory(e.target.value)} value={category} />
             <Button variant="primary" type="submit">
            Save Changes
          </Button>
            </form>
            </Modal.Body>
      </Modal>
       
        </div>
    )
}

export default ADDProductAdmin
