import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editProduct } from '../redux/action'

const EditProduct = ({el}) => {
    const [title, setTitle] = useState(el.title)
    const [category, setCategory] = useState(el.category)
    const [description, setDescription] = useState(el.description)
    const [price, setPrice] = useState(el.price)
    const [quantity, setQuantity] = useState(el.quantity)
    const [imageUrl, setImageUrl] = useState(el.imageUrl)
    const dispatch = useDispatch()
    let handelsubmit=(e)=>{
        e.preventDefault()
dispatch(editProduct(el._id,title,category,description,price,quantity,imageUrl))
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    return (
        <div>
                 <Button variant="primary" onClick={handleShow}>
        Edit-Product
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

export default EditProduct
