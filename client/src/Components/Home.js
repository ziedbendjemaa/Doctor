import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/action'
import ProductsList from './ProductsList'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
          
      }, [])
      const {products,loading} = useSelector(state => state)

    return (
        <div>
           <ProductsList product={products}/> 
        </div>
    )
}

export default Home
