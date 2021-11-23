import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Home = () => {

    const product = useSelector((state) => state)


  

    const FilterProduct = product.allFilterProduct.filterResult

console.log(product.allFilterProduct.filterResult)
    

  
    return (
        <div className ='card-flex-Container'>
         {
            FilterProduct===undefined?<h1>Loading ....</h1>:<>{
                
                FilterProduct.map((el) => {
                        return(
                            <div className ='container-Card'>
                            
                           <div className ='card'>
                           
                           <img className ='Img-holder'  src={el.image} alt ='img'/>
                           <div className ="product-hedding" >{el.title}</div>
                            <div className ="price-card-flex">
                            <div className ="price-card">${el.price}</div>
                            <Link  className='text-deco' to={`/home/${el.id}`}> 
                            <div className ="price-card">Details</div>
                            </Link>
                            </div>
                           </div>
 
                           
                            
                            </div>
                        )
                    })
                }</>
             }
        </div>
    )
}

export default Home
