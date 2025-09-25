import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'
import ProductCard from './components/productCard'

function App() {
  const [product, setProduct] = useState([])

  const API = "https://68d269b6cc7017eec543c2c4.mockapi.io/api/v1/products"

  async function getProducts() {
    const {data}= await axios.get("https://68d269b6cc7017eec543c2c4.mockapi.io/api/v1/products")
    setProduct(data)
    console.log(data);
    
    
  }

  async function deleteProduct(id) {
    const cofirmChek = confirm("Are you sure want to delete this product?")
    console.log(cofirmChek);
    if(cofirmChek){
      const response = await axios.delete(`${API}/${id}`)
      console.log(response);
      if(response.status == 200){
        getProducts()
      }   
    }  
  }




  useEffect(() => {
    getProducts()

  }, [])

  return (
    <div className="container">
    <div className='products'>
        {product.map((obj, index) => (
          <ProductCard 
          product={obj}
          key={index} 
          deleteProduct={deleteProduct}/>
          
        ))}
    </div>
    </div>
    
  )
}

export default App
