import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductsCart, deleteItem } from '../redux/action'

const ShoppingCart = () => {
    const {items} = useSelector(state => state)
    let commande=items
    const dispatch = useDispatch()
    return (
        <div>
            
            {items.map((el)=>(
                
               <div>
                   <img src={el.imageUrl}/>
                   <p>{el.qty}</p>
                <button onClick={(e)=>{e.preventDefault();dispatch(deleteItem(el.id))}}>delete</button>
                </div>
            ))}
           
            <button onClick={(e)=>{e.preventDefault();dispatch(addProductsCart({commande}))}}>confirmer</button>
        </div>
    )
}

export default ShoppingCart
