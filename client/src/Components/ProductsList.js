

import { useState } from 'react'
import Footer from './Footer'
import NavBarr from './NavBarr'
import ProductCard from './ProductCard'

const ProductsList = ({product}) => {
    console.log("product",product)
    const [text, setText] = useState("")
    return (
        <div>
            <NavBarr text={text} setText={setText}/>
        <div className="container">
        <div className="row ml-5">
       {
           product.filter(el=>el.title.toLowerCase().includes(text.toLowerCase())).map((el,i)=><ProductCard el={el} key={i}/>)
       }
        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default ProductsList
