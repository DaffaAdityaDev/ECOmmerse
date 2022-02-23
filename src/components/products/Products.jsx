import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

const products = [
    { id: 1, name: 'Product 1', price: '$1.00' },
    { id: 2, name: 'Product 2', price: '$2.00' },
    { id: 3, name: 'Product 3', price: '$3.00' },
]
const Products = () => {
  return (
    <Grid container justify="center" spacing={4}>
        
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={products} />
            </Grid>
        ))}
    </Grid>
  )
}

export default Products