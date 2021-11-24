import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectedItem } from '../Redux/action'
// import { filterUser } from './Redux/action/index.js';
import { filterUser } from '../Redux/action'
import {ButtonToolbar,ButtonGroup,Button} from 'rsuite'



const Home = () => {

    const product = useSelector((state) => state)

    const dispatch = useDispatch()

  

    const FilterProduct = product.allFilterProduct.filterResult

// console.log(product.addedItem.addedItem)

const data= product
console.log(data)


// const product = useSelector((state) => state)
  

const productResult = product.allProduct.products

const addToCartClick = (item) =>{
    

dispatch(selectedItem(item))
}

const getLowCostClick  = () => {
    console.log('hey')
   const result=  productResult.sort(function(a, b){

    
      return a.price- b.price
    });
    dispatch(filterUser(result))

  }
  const getHighCostClick = () => {
    const result=  productResult.sort(function(a, b){

    
      return -(a.price- b.price)
    })
    dispatch(filterUser(result))
  }
    return (
        <div>
        <div className='filter-Item'>
  
        <ButtonToolbar>
        <ButtonGroup>
          <Button onClick= {getLowCostClick} appearance="primary">Low cost</Button>
          <Button onClick={getHighCostClick} appearance="primary">High cost</Button>
      
        </ButtonGroup>
      </ButtonToolbar>
     
  
    </div>
        <div className ='card-flex-Container'>
         {
            FilterProduct===undefined?<h1>Loading ....</h1>:<>{
                
                FilterProduct.map((el) => {
                        return(
                            <div className ='container-Card'>
                            
                           <div className ='card'>
                           
                           <img className ='Img-holder'  src={el.image} alt ='img'/>
                           <div className ="product-hedding" >{el.title.split(/\s+/).slice(0,3).join(" ")}...</div>
                            <div className ="price-card-flex">
                            <div className ="price-card">${el.price}</div>
                            <Link  className='text-deco' to={`/home/${el.id}`}> 
                            <div className ="price-card">Details</div>

                            </Link>
                            </div>
                            <button className='add-to-cart-button' onClick={ () =>addToCartClick(el)}>Add to cart</button>
                           </div>
 
                           
                            
                            </div>
                        )
                    })
                }</>
             }
        </div>
        </div>
    )
}

export default Home
