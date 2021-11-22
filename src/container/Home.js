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
        <div>
         {
                 productResult===undefined?<h1>Loading ....</h1>:<>{
                
                    productResult.map((el) => {
                        return(
                            <div>
                            <Link to={`/home/${el.id}`}>
                            <div>
                            <h1>{el.name}</h1>
                            <span>{el.email}</span>
                            </div>
                            </Link>
                            
                            </div>
                        )
                    })
                }</>
             }
        </div>
    )
}

export default Home
