import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, Navbar } from './components'

const App = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.product.list();

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  console.log(products)

  return (
    <>
      <Navbar />
      <Products />

    </>
  )
}

export default App
