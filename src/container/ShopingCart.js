import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux'

const ShopingCart = () => {

    const product = useSelector((state) => state)
    const selectedItem = product.addedItem.product.length
    return (
        <div className= 'shoping-cart-main-div'>
        <div>
        <div className='Selected-item-tooltip'>{selectedItem}</div>
        </div>
      
       <FaShoppingCart  className='shaoping-cart'/>
        </div>
    )
}

export default ShopingCart
