import axios from 'axios'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editProduct } from '../redux/action'

const EditProduct = ({el}) => {
  const [storyedited, setstoryedited] = useState({});

const uploadFileHandler = async (e) => {
  const file = e.target.files[0];
  const bodyFormData = new FormData();
  bodyFormData.append("file", file);
  const { data } = await axios.post(
      "http://localhost:3000/product/uploads",
    bodyFormData
  );
  console.log(data);
  setstoryedited({ ...storyedited, imageUrl: data });
};

const dispatch = useDispatch()

const handelsubmit = () => {
  dispatch(editProduct( el._id, storyedited ));}


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
      <form>
               Title: <input type="text" className="form-control" placeholder="Enter Product Name" 
                              onChange={(e) => {
                                setstoryedited({
                                  ...storyedited,
                                  title: e.target.value,
                                });
                              }}/>
               Description: <input type="text" className="form-control" placeholder="Enter Description Product"
 onChange={(e) => {
  setstoryedited({
    ...storyedited,
    description: e.target.value,
  });
}}/>
              Image: 
              <input
                type="file"
                name='file'
                onChange={uploadFileHandler}
              /><br/>
                           Price : <input type="text" className="form-control" placeholder="Enter Price" 
onChange={(e) => {
  setstoryedited({
    ...storyedited,
    price: e.target.value,
  });
}}/>
             Quantity : <input type="number" className="form-control" placeholder="Enter Product quantity" 
 onChange={(e) => {
  setstoryedited({
    ...storyedited,
    quantity: e.target.value,
  });
}}/>
              Category: <input type="text" className="form-control" placeholder="Enter Product Category"
                onChange={(e) => {
                  setstoryedited({
                    ...storyedited,
                    category: e.target.value,
                  });
                }} />
             <Button variant="primary" type="submit" onClick={handelsubmit}>
            Save Changes
          </Button>
            </form>
            </Modal.Body>
      </Modal>

        </div>
    )
}

export default EditProduct
