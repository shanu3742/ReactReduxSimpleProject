import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Home = () => {

    const product = useSelector((state) => state)
    console.log(product.allProduct.products)

    const productResult = product.allProduct.products

    

    // {
    //     productResult===undefined?<h1>Loading ....</h1>:
    // }
    return (
        <div className ='card-flex-Container'>
         {
                 productResult===undefined?<h1>Loading ....</h1>:<>{
                
                    productResult.map((el) => {
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
