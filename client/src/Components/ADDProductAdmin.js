import axios from 'axios'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/action'

const ADDProductAdmin = () => {
  
    const dispatch = useDispatch()
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [story, setstory] = useState({
      imageUrl: "",
      title: "",
      description: "",
      price: "",
      category: "",
      quantity: "",
      quantityStock: "",
     
    });

    const uploadFileHandler = async (e) => {
      const file = e.target.files[0];
      const bodyFormData = new FormData();
      bodyFormData.append("file", file);
      const { data } = await axios.post(
        "http://localhost:3000/product/uploads",
        bodyFormData
      );
      console.log(data);
      setstory({ ...story, imageUrl: data });
    };
    const handleSubmit = () => {
      dispatch(addProduct(story));
      
    };
    return (
        <div>
              <Button variant="primary" onClick={handleShow}>
        ADD-Product
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Modal.Body>
      <form onSubmit={handleSubmit} >

      Title: <input type="text" className="form-control" placeholder="Enter Product Name"
                       onChange={(e) => {setstory({ ...story, title: e.target.value })}}
                       />
               Description: <input type="text" className="form-control" placeholder="Enter Description Product"
             onChange={(e) => {setstory({ ...story, description: e.target.value })}}/>

              Image:   <input type="file" name="file" onChange={uploadFileHandler}/><br/>
              Price : <input type="text" className="form-control" placeholder="Enter Price"
              onChange={(e) => {setstory({ ...story, price: e.target.value })}}
/>
Quantity : <input type="number" className="form-control" placeholder="Enter Product quantity"
onChange={(e) => {setstory({ ...story, quantity: e.target.value })}}
/>
    
Category: <input type="text" className="form-control" placeholder="Enter Product Category" 
onChange={(e) => {setstory({ ...story, category: e.target.value })}}
/>   
             <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save Changes
          </Button>
            </form>
            </Modal.Body>
      </Modal>
       
        </div>
    )
}

export default ADDProductAdmin
