import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Category from './Components/ProductAPI/Category';
import Product from './Components/ProductAPI/Product';
import Create from './Components/Create';
import Read from './Components/Read';
import Editing from './Components/Editing';

import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [ctgy, setCtgy] = useState([]);
  const [pros, setProducts] = useState([]);

    const getCatg = ()=>{
        axios.get('https://dummyjson.com/products/category-list')
        .then((res)=>res.data)
        .then((finalRes)=>{
            setCtgy(finalRes);
        })
    }
    const getProd = ()=>{
      axios.get('https://dummyjson.com/products')
      .then((res)=>res.data)
      .then((finalRes)=>{
        setProducts(finalRes);
      })
  }
    useEffect(()=>{
        getCatg();
        getProd();
    },[]);
  return (
    <>
    <div className="container text-center" style={{padding: '26px'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/edit' element={<Editing/>}/>
          <Route path='/ctgy' element={<Category ctgy = {ctgy}/>}/>
          <Route path='/product' element={<Product pros = {pros}/>}/>

        </Routes>
      </BrowserRouter>
      </div>
      </>
  );
}

export default App;