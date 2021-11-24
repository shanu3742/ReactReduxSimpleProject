import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { specificProduct } from '../Redux/action'
import { selectedItem } from '../Redux/action'
import {Rate} from 'rsuite'


const ProductDetails = () => {
    const productId = useParams()
    const id =productId.homeId
    const dispatch = useDispatch()
    const product = useSelector((state) => state)
    const productData=product.specificProduct.products

     console.log(product.specificProduct.products)
   
    const fetchData = React.useCallback(async() => {
        const result = await fetch(`https://fakestoreapi.com/products/${id}`)
        const jResult = await result.json()

        dispatch(specificProduct(jResult))

       
       
    
      },[id])
      React.useEffect(() => {
        fetchData()
      },[fetchData])

      const addToCartClick = (item) =>{
    

        dispatch(selectedItem(item))
        }
  
    return (
        <>
       {productData===undefined?<h1>Loading</h1>:<>
         {
           
               
                    <main class="container">
 
       
        <div class="left-column">
         
          <img data-image="red" class="active" src={productData.image} alt="" />
        </div>
       
       
       
        <div class="right-column">
       
          
          <div class="product-description">
            <span>{productData.category}</span>
            <h4>{productData.title}</h4>
            <p>{productData.description}</p>
          </div>
       
          
          <div class="product-configuration">
       
           
            <div class="product-color">
            <Rate defaultValue={productData.rating.rate} allowHalf />
       
             
       
            </div>
       
           
          
          </div>
       
          
          <div class="product-price">
            <span>{productData.price}$</span>
            <a href="#" class="cart-btn" onClick={ () =>addToCartClick(productData)}>Add to cart</a>
          </div>
        </div>
      </main>
                
            
        }
        </>}
      </>
    
    )
}

export default ProductDetails
