import React from 'react'
import { Link } from 'react-router-dom'
import ShopingCart from './ShopingCart'

const ShovingCartHeader = () => {
    return (
      
        <div className='shoping-cart-header'>
        <h1 className ="price-card">Shoping App</h1>
        <Link to='/home/viewCart' >
        <ShopingCart  />
        </Link>
    
        </div>
     
    )
}

export default ShovingCartHeader
