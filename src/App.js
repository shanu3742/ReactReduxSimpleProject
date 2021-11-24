import { useDispatch } from 'react-redux';
import { fetchUser } from './Redux/action/index.js';
import {BrowserRouter as Router,  Routes,Route} from  'react-router-dom'
import './App.css';
import Home from './container/Home';
import React from 'react';
import ProductDetails from './container/ProductDetails.js';
import { useSelector } from 'react-redux'
import { filterUser } from './Redux/action/index.js';
import ShovingCartHeader from './container/ShovingCartHeader.js';
import ShopingCart from './container/ShopingCart.js';
import ShopingCard from './container/ShopingCard.js';

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

  
  

  //Low cost to high Cost (Increase  in order)
 
  // console.log(product)
  return (
    <Router >
    <div className="App">
   
   <ShovingCartHeader />
    
    
    <Routes>
    <Route path='/' exact element={<Home/>} />
    <Route path='/home' exact element={<h1>Hello</h1>} />
    <Route path='/home/:homeId'  exact element={<ProductDetails />} />
    <Route path='/home/viewCart' exact element={<ShopingCard />} />
    </Routes>

    
    </div>
    </Router>
  );
    
    
}

export default App;
