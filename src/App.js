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
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  async function handeRemoveFromCart(productid) {
    const { cart } = await commerce.cart.remove(productid);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty()

    setCart(cart)
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
    <Navbar totalItem={cart.total_items}/> 
      <Routes>
        <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
        <Route path="cart" element={<Cart cart={cart} 
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemoveFromCart={handeRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
        />} />
      </Routes>
    </>
  )
}

export default App
