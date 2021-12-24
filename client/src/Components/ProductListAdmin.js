import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/action'
import ADDProductAdmin from './ADDProductAdmin'
import NavBarr from './NavBarr'
import ProductCardAdmin from './ProductCardAdmin'

const ProductListAdmin = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
          
      }, [])
      const {products} = useSelector(state => state)
    return (
        <div>
            <NavBarr/>
        <div className="container">
        <div className="row ml-5">
{
    products.map((el,i)=><ProductCardAdmin el={el} key={i}/>)
}
            
        </div>
        </div>
        <ADDProductAdmin/>
        </div>
    )
}

export default ProductListAdmin
