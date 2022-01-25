import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Products = () => {
  const [products, setProducts] = useState([])

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const getProducts = async () => {
    try {
      const res = await authAxios.get(`https://bagcomfort.com/api/product`)
      setProducts(res.data.data)

      console.log(products, res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, []);



  return (
    <div>
      <div className='grid grid-cols-4 text-center items-center border-b-2'>
        <h2>Name</h2>
        <h2>Price</h2>
        <h2>Stock</h2>
        <h2>Details</h2>
      </div>
      {products.map(product => (
        <div className='grid grid-cols-4 text-center items-center border-b-2'>
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
          <h2>{product.stock}</h2>
          <h2>{product.details}</h2>
        </div>
      ))}
    </div>
  )
};

export default Products
