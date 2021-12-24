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
            <h1>{pr.title }</h1>
            <img src={pr.imageUrl} style={{ width:"400px",height:"400px" ,borderRadius:"10px"    }}/>
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

        </div>
    )
}

export default Description
