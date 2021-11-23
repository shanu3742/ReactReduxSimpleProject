import { useDispatch } from 'react-redux';
import { fetchUser } from './Redux/action/index.js';
import {BrowserRouter as Router,  Routes,Route} from  'react-router-dom'
import './App.css';
import Home from './container/Home';
import React from 'react';
import ProductDetails from './container/ProductDetails.js';
import { useSelector } from 'react-redux'
import { filterUser } from './Redux/action/index.js';

function App() {

  const dispatch = useDispatch()

  const fetchData = React.useCallback(async() => {
    const result = await fetch('https://fakestoreapi.com/products')
    const jResult = await result.json()
    dispatch(fetchUser(jResult))
    dispatch(filterUser(jResult))

  },[dispatch])
  React.useEffect(() => {
    fetchData()
  },[fetchData])

  
  const product = useSelector((state) => state)
  

  const productResult = product.allProduct.products

  //Low cost to high Cost (Increase  in order)
  const getClick  = () => {
    console.log('hey')
   const result=  productResult.sort(function(a, b){

    
      return a.price- b.price
    });
    dispatch(filterUser(result))

  }
  console.log(product)
  return (
    <Router >
    <div className="App">
    <h1 className ="price-card">Shoping App</h1>
    <button onClick= {getClick}>low cost</button>
    <Routes>
    <Route path='/' exact element={<Home/>} />
    <Route path='/home' exact element={<h1>Hello</h1>} />
    <Route path='/home/:homeId'  exact element={<ProductDetails />} />
    </Routes>

    
    </div>
    </Router>
  );
    
    
}

export default App;
