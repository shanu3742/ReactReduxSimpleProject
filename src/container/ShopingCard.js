import React from 'react'
import '../shopingCard.css'
import PlusRoundIcon from '@rsuite/icons/PlusRound';
import MinusRoundIcon from '@rsuite/icons/MinusRound';
import {IconButton} from 'rsuite'
import {  useSelector } from 'react-redux';

const ShopingCard = () => {

    const product = useSelector((state) =>state)
    console.log(product)
  

    const cartData= product.addedItem.product
    return (
     <>
     <div class="shopping-cart">
     <div class="title">
     Shopping Bag
   </div>
  
     {
         cartData===undefined?<h1>Loading</h1>:<>
         {
             cartData.map((el) => {
                 return(
                  
<>
                  
                   
                    <div class="item">
                      <div class="buttons">
                        <span class="delete-btn"></span>
                        <span class="like-btn"></span>
                      </div>
                   
                      <div class="image">
                        <img className ="shopping_img" src={el.image} alt="" />
                      </div>
                      
                      <div class="description">
                        <span>{el.category}</span>
                        <span>count:{el.rating.count}</span>
                        <span>White</span>
                      </div>
                   
                      <div class="quantity">
                      <IconButton icon={<PlusRoundIcon />} circle size="sm" />
                        1
                        <IconButton icon={<MinusRoundIcon />} circle size="sm" />
                      </div>
                   
                      <div class="total-price">${el.price}</div>
                    </div>
                 
                    </>     
                 )
             })
         }
         </>
     }
     </div>
     </>
    )
}

export default ShopingCard
