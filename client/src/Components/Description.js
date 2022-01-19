import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { addToCart } from '../redux/action';

const Description = () => {
    let params=useParams();
    const {products} = useSelector(state => state)
    let pr=products.find(el=>el._id==params.id)
    const [qty, setQty] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <div>
            <img src={pr.imageUrl} style={{ width:"400px",height:"400px" ,borderRadius:"10px"    }} alt=''/>

            </div>
         <div style={{}}> 
         <h1>{pr.title }</h1>

<p>
  Quantity
  <select value={qty} onChange={(e) => setQty(e.target.value)}>
    {[...Array(pr.quantity).keys()].map((x) => (
      <option key={x + 1} value={x + 1}>
        {" "}
        {x + 1}{" "}
      </option>
    ))}
  </select>
</p>
<Link to='/addCart'>
<button onClick={()=>dispatch(addToCart(pr._id,qty))}>Add TO Cart</button>
</Link>
<button>Back</button>
<p>
            Status:
            <span id="stock_status">
              {pr.quantityStock > 0 ? "In Stock"  : "Out of Stock"}
            </span>
          </p>

          <h2>prix :{pr.price*qty}</h2> 
          <hr />

          <h4 className="mt-2">Description:</h4>
          <p>
          {pr.description}
          </p>
          <Link to="/">
            <button
              id="review_btn"
              type="button"
              className="btn btn-primary mt-4"
              data-toggle="modal"
              data-target="#ratingModal"
            >
              Go back
            </button>
          </Link>

          <div className="row mt-2 mb-5">
            <div className="rating w-50">
              <div
                className="modal fade"
                id="ratingModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="ratingModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="ratingModalLabel">
                        Submit Review
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <textarea
                        name="review"
                        id="review"
                        className="form-control mt-3"
                      ></textarea>

                      <button
                        className="btn my-3 float-right review-btn px-4 text-white"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        Submit
                      </button>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
         </div>
          

        </div>
    )
}

export default Description
