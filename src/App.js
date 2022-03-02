import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, Navbar, Cart } from './components'
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productid, quanitity) => {
    const data = await commerce.cart.add(productid, quanitity)
    setCart(data)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  return (
    <>
    <Navbar totalItem={cart.total_items}/> 
      <Routes>
              <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
              <Route path="cart" element={<Cart cart={cart} />} />
      </Routes>
    </>
  )
}

export default App
