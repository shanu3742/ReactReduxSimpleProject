import { useDispatch } from 'react-redux';
import { fetchUser } from './Redux/action/index.js';
import {BrowserRouter as Router,  Routes,Route} from  'react-router-dom'
import './App.css';
import Home from './container/Home';
import React from 'react';
import ProductDetails from './container/ProductDetails.js';

function App() {

  const dispatch = useDispatch()

  const fetchData = async() => {
    const result = await fetch('https://fakestoreapi.com/products')
    const jResult = await result.json()
    dispatch(fetchUser(jResult))

  }
  React.useEffect(() => {
    fetchData()
  },[])
  return (
    <Router >
    <div className="App">
    <h1 className ="price-card">Shoping App</h1>
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
